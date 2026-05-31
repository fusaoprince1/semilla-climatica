import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return false;
  const header = request.headers.get("authorization");
  return header === `Bearer ${secret}`;
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }
  revalidateTag("donors", "max");
  return NextResponse.json({ ok: true });
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }
  revalidateTag("donors", "max");
  return NextResponse.json({ ok: true });
}
