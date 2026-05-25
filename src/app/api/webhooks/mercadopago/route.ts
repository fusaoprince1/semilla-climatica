import { NextRequest, NextResponse } from "next/server";

// Webhook para confirmaciones de pago (activar cuando MP esté en producción)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Mercado Pago webhook:", body?.type, body?.data?.id);
    // TODO: verificar firma, registrar donante en base de datos, actualizar muro
    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ received: true });
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
