"use client";

import { useState } from "react";
import Link from "next/link";
import { Share2, Leaf, ArrowRight, Printer, Link2, Check } from "lucide-react";

type Props = {
  name: string;
  amount: number;
  paymentId?: string;
  showThankYou?: boolean;
};

export default function DonationBadge({
  name,
  amount,
  paymentId,
  showThankYou = true,
}: Props) {
  const [copied, setCopied] = useState(false);
  const siteHost =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, "") ||
    "semillaclimatica.com";
  const badgeUrl = paymentId
    ? `https://${siteHost}/badge/${paymentId}`
    : `https://${siteHost}`;

  function shareWhatsApp() {
    const text = encodeURIComponent(
      `Acabo de donar $${amount} MXN a Semilla Climática 🌱 ¿Cuánto gastaste hoy en snacks? ${badgeUrl}`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  async function copyLink() {
    await navigator.clipboard.writeText(badgeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function printBadge() {
    window.print();
  }

  return (
    <div className="mx-auto max-w-md text-center">
      {showThankYou && (
        <>
          <div className="animate-float mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 ring-2 ring-accent/40 print:hidden">
            <Leaf className="h-10 w-10 text-accent" />
          </div>
          <h2 className="mt-6 font-display text-2xl font-bold print:hidden">
            ¡Gracias, {name}!
          </h2>
          <p className="mt-2 text-muted print:hidden">
            Tu donación de ${amount.toLocaleString("es-MX")} MXN ayuda a construir
            el fondo climático de México.
          </p>
        </>
      )}

      <div
        id="donation-badge"
        className="mt-8 overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/30 via-surface to-background p-6 print:border-2 print:border-primary print:bg-white print:text-black"
      >
        <div className="flex items-center justify-center gap-2">
          <Leaf className="h-5 w-5 text-accent print:text-green-800" />
          <span className="font-display font-semibold">Semilla Climática</span>
        </div>
        <p className="mt-4 font-display text-lg font-bold">{name}</p>
        <p className="mt-1 text-sm text-accent print:text-green-800">
          Donó ${amount.toLocaleString("es-MX")} MXN al clima
        </p>
        <p className="mt-3 text-xs text-muted print:text-gray-600">
          {siteHost}
        </p>
        {paymentId && (
          <p className="mt-2 text-[10px] text-muted/60 print:hidden">
            Badge verificado ✓
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3 print:hidden sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={shareWhatsApp}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent-hover"
        >
          <Share2 className="h-4 w-4" />
          Compartir
        </button>
        <button
          type="button"
          onClick={printBadge}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-primary/40"
        >
          <Printer className="h-4 w-4" />
          Imprimir / guardar
        </button>
        {paymentId && (
          <button
            type="button"
            onClick={copyLink}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-primary/40"
          >
            {copied ? (
              <Check className="h-4 w-4 text-accent" />
            ) : (
              <Link2 className="h-4 w-4" />
            )}
            {copied ? "¡Copiado!" : "Copiar link"}
          </button>
        )}
      </div>

      {paymentId && (
        <p className="mt-4 text-xs text-muted print:hidden">
          Guarda este link para volver a tu badge cuando quieras:{" "}
          <span className="break-all text-primary-light">/badge/{paymentId}</span>
        </p>
      )}

      <Link
        href="/muro"
        className="mt-4 inline-flex items-center gap-1 text-sm text-muted transition hover:text-accent print:hidden"
      >
        Ver el Muro Digital
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
