import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.SUPABASE_URL || "", process.env.SUPABASE_SERVICE_ROLE_KEY || "");
export async function GET() {
  try {
    const { count } = await supabase.from("subscribers").select("*", { count: "exact", head: true });
    return NextResponse.json({ count: count || 0 });
  } catch { return NextResponse.json({ count: 0 }); }
}