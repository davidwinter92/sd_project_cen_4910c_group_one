import { NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";

export async function GET() {
    const { data, error } = await supabaseClient
        .from("jurisdictions")
        .select("*")
        .order("name");

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ jurisdictions: data });
}