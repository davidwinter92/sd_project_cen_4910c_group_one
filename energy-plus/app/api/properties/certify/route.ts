import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

type CertifyPropertyBody = {
    propertyId?: string;
    notes?: string | null;
};

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as CertifyPropertyBody;
        const propertyId = body.propertyId?.trim();
        const notes = body.notes?.trim() || null;

        if (!propertyId) {
            return NextResponse.json(
                { error: "Property ID is required." },
                { status: 400 }
            );
        }

        const { error } = await supabaseServer.rpc("certify_property", {
            p_property_id: propertyId,
            p_notes: notes,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({
            message: "Property certified successfully.",
        });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Failed to certify property.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}