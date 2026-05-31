import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST() {
  revalidateTag("donors", "max");
  return NextResponse.json({ ok: true });
}

export async function GET() {
  revalidateTag("donors", "max");
  return NextResponse.json({ ok: true, message: "Cache de donantes actualizado" });
}
