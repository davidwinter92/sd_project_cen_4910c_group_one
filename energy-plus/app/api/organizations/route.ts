import { NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";

export async function GET() {
    const { data: organizations, error: orgError } = await supabaseClient
        .from("organizations")
        .select("*");

    const { data: properties, error: propError } = await supabaseClient
        .from("properties")
        .select("*");

    if (orgError || propError) {
        return NextResponse.json(
            { error: orgError?.message || propError?.message },
            { status: 500 }
        );
    }

    return NextResponse.json({
        organizations,
        properties,
    });
}

export async function POST(req: Request) {
    const body = await req.json();

    const { data, error } = await supabaseClient
        .from("organizations")
        .insert([
            {
                name: body.name,
                created_by: body.createdBy,
            },
        ])
        .select()
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ organization: data });
}

export async function PATCH(req: Request) {
    const body = await req.json();

    const { data, error } = await supabaseClient
        .from("organizations")
        .update({ name: body.name })
        .eq("id", body.organizationId)
        .select()
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ organization: data });
}

export async function DELETE(req: Request) {
    const body = await req.json();

    const { error } = await supabaseClient
        .from("organizations")
        .delete()
        .eq("id", body.organizationId);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}