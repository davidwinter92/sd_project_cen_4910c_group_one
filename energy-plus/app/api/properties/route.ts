import { NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";

export async function POST(req: Request) {
    const body = await req.json();

    const { data, error } = await supabaseClient
        .from("properties")
        .insert([body])
        .select()
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ property: data });
}

export async function PATCH(req: Request) {
    const body = await req.json();

    const { data, error } = await supabaseClient
        .from("properties")
        .update({ organization_id: body.organizationId })
        .eq("id", body.propertyId)
        .select()
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ property: data });
}