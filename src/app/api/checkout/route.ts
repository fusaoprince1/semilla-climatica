import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { getSiteUrl } from "@/lib/site";
import { buildExternalReference } from "@/lib/donors";

export async function POST(request: NextRequest) {
  const accessToken = process.env.MP_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      { error: "Mercado Pago no configurado. Falta MP_ACCESS_TOKEN." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const amount = Number(body.amount);
    const name = String(body.name || "Semillero").trim().slice(0, 80);
    const city = String(body.city || "").trim().slice(0, 40);
    const frequency = body.frequency === "monthly" ? "monthly" : "once";

    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Escribe tu nombre para el Muro Digital." },
        { status: 400 }
      );
    }

    if (!Number.isFinite(amount) || amount < 20) {
      return NextResponse.json(
        { error: "El monto mínimo es $20 MXN." },
        { status: 400 }
      );
    }

    if (frequency === "monthly") {
      return NextResponse.json(
        {
          error:
            "Donación mensual disponible pronto. Por ahora usa donación única.",
        },
        { status: 400 }
      );
    }

    const siteUrl = getSiteUrl();
    const client = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(client);

    const externalReference = buildExternalReference(name, amount, city || undefined);

    const result = await preference.create({
      body: {
        items: [
          {
            id: "donacion-semilla",
            title: "Donación — Semilla Climática",
            description: `Donación de ${name} para acciones climáticas en México`,
            quantity: 1,
            unit_price: amount,
            currency_id: "MXN",
          },
        ],
        payer: {
          name,
        },
        back_urls: {
          success: `${siteUrl}/donar/exito`,
          failure: `${siteUrl}/donar/error`,
          pending: `${siteUrl}/donar/pendiente`,
        },
        auto_return: "approved",
        external_reference: externalReference,
        statement_descriptor: "SEMILLA CLIMATICA",
        notification_url: `${siteUrl}/api/webhooks/mercadopago`,
      },
    });

    const initPoint =
      process.env.MP_SANDBOX === "true"
        ? result.sandbox_init_point
        : result.init_point;

    if (!initPoint) {
      return NextResponse.json(
        { error: "No se pudo crear el enlace de pago." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      initPoint,
      preferenceId: result.id,
    });
  } catch (error) {
    console.error("Mercado Pago checkout error:", error);
    return NextResponse.json(
      { error: "Error al conectar con Mercado Pago. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
