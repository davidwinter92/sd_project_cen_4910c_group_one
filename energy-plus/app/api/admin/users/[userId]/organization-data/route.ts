import { NextResponse } from "next/server";

import { supabaseServer } from "@/lib/supabaseServer";

type ProfileRow = {
    id: string;
    username: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
};

type OrganizationRow = {
    id: string;
    name: string | null;
    slug: string | null;
    created_by: string | null;
    created_at: string | null;
};

type PropertyCountRow = {
    id: string;
    organization_id: string;
};

function formatUserName(profile: ProfileRow | null, authUser: { email?: string | null; user_metadata?: Record<string, unknown> } | null) {
    const fullName = [profile?.first_name, profile?.last_name]
        .filter((value): value is string => Boolean(value?.trim()))
        .join(" ")
        .trim();

    if (fullName) {
        return fullName;
    }

    const metadataName = typeof authUser?.user_metadata?.name === "string"
        ? authUser.user_metadata.name.trim()
        : "";

    if (metadataName) {
        return metadataName;
    }

    return profile?.email?.trim() || authUser?.email?.trim() || "Unknown user";
}

function buildOrganizationProperties(
    organization: OrganizationRow,
    linkedPropertyCount: number,
) {
    return [
        {
            id: `${organization.id}-org-id`,
            key: "id",
            label: "Organization ID",
            value: organization.id,
            description: "Primary identifier for this organization record.",
            type: "string" as const,
            updatedAt: organization.created_at ?? undefined,
        },
        {
            id: `${organization.id}-name`,
            key: "name",
            label: "Organization Name",
            value: organization.name,
            description: "Display name used throughout the dashboard.",
            type: "string" as const,
            updatedAt: organization.created_at ?? undefined,
        },
        {
            id: `${organization.id}-slug`,
            key: "slug",
            label: "Slug",
            value: organization.slug,
            description: "URL-safe organization identifier.",
            type: "string" as const,
            updatedAt: organization.created_at ?? undefined,
        },
        {
            id: `${organization.id}-created-by`,
            key: "created_by",
            label: "Created By User ID",
            value: organization.created_by,
            description: "User currently associated with this organization record.",
            type: "string" as const,
            updatedAt: organization.created_at ?? undefined,
        },
        {
            id: `${organization.id}-created-at`,
            key: "created_at",
            label: "Created At",
            value: organization.created_at,
            description: "Timestamp when the organization record was created.",
            type: "date" as const,
            updatedAt: organization.created_at ?? undefined,
        },
        {
            id: `${organization.id}-property-count`,
            key: "property_count",
            label: "Linked Property Count",
            value: linkedPropertyCount,
            description: "Number of property records currently assigned to this organization.",
            type: "number" as const,
            updatedAt: organization.created_at ?? undefined,
        },
    ];
}

export async function GET(
    _request: Request,
    context: { params: Promise<{ userId: string }> },
) {
    try {
        const { userId } = await context.params;
        const normalizedUserId = userId?.trim();

        if (!normalizedUserId) {
            return NextResponse.json({ error: "User ID is required." }, { status: 400 });
        }

        const [
            authUserResult,
            profileResult,
            organizationsResult,
        ] = await Promise.all([
            supabaseServer.auth.admin.getUserById(normalizedUserId),
            supabaseServer
                .from("profiles")
                .select("id, username, first_name, last_name, email")
                .eq("id", normalizedUserId)
                .maybeSingle<ProfileRow>(),
            supabaseServer
                .from("organizations")
                .select("id, name, slug, created_by, created_at")
                .eq("created_by", normalizedUserId)
                .order("name", { ascending: true }),
        ]);

        if (authUserResult.error) {
            return NextResponse.json(
                { error: authUserResult.error.message || "Unable to fetch user." },
                { status: 500 },
            );
        }

        if (profileResult.error) {
            return NextResponse.json(
                { error: `Unable to fetch user profile: ${profileResult.error.message}` },
                { status: 500 },
            );
        }

        if (organizationsResult.error) {
            return NextResponse.json(
                { error: `Unable to fetch user organizations: ${organizationsResult.error.message}` },
                { status: 500 },
            );
        }

        if (!authUserResult.data.user) {
            return NextResponse.json({ error: "User not found." }, { status: 404 });
        }

        const organizations = (organizationsResult.data ?? []) as OrganizationRow[];
        const organizationIds = organizations.map((organization) => organization.id);

        const propertyCountMap = new Map<string, number>();

        if (organizationIds.length) {
            const propertyRowsResult = await supabaseServer
                .from("properties")
                .select("id, organization_id")
                .in("organization_id", organizationIds);

            if (propertyRowsResult.error) {
                return NextResponse.json(
                    { error: `Unable to fetch organization property counts: ${propertyRowsResult.error.message}` },
                    { status: 500 },
                );
            }

            for (const property of (propertyRowsResult.data ?? []) as PropertyCountRow[]) {
                propertyCountMap.set(
                    property.organization_id,
                    (propertyCountMap.get(property.organization_id) ?? 0) + 1,
                );
            }
        }

        return NextResponse.json({
            user: {
                id: normalizedUserId,
                name: formatUserName(profileResult.data ?? null, authUserResult.data.user),
            },
            organizations: organizations.map((organization) => ({
                id: organization.id,
                name: organization.name ?? "Untitled organization",
                properties: buildOrganizationProperties(
                    organization,
                    propertyCountMap.get(organization.id) ?? 0,
                ),
            })),
        });
    } catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to load user organization data.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}
