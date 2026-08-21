import { NextResponse } from "next/server";
import { profile } from "@/data/portfolio";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(
    { phone: profile.phone },
    {
      headers: {
        "Cache-Control": "private, no-store, max-age=0",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    },
  );
}
