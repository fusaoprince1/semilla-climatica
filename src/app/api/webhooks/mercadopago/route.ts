import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const type = body?.type;
    const paymentId = body?.data?.id;

    console.log("Mercado Pago webhook:", type, paymentId);

    if (type === "payment" && paymentId) {
      revalidateTag("donors", "max");
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ received: true });
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
