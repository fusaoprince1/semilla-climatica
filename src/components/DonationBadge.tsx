"use client";

import Link from "next/link";
import { Share2, Leaf, ArrowRight } from "lucide-react";

type Props = {
  name: string;
  amount: number;
};

export default function DonationBadge({ name, amount }: Props) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, "") ||
    "semillaclimatica.mx";

  return (
    <div className="mx-auto max-w-md text-center">
      <div className="animate-float mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 ring-2 ring-accent/40">
        <Leaf className="h-10 w-10 text-accent" />
      </div>
      <h2 className="mt-6 font-display text-2xl font-bold">
        ¡Gracias, {name}!
      </h2>
      <p className="mt-2 text-muted">
        Tu donación de ${amount.toLocaleString("es-MX")} MXN ayuda a construir
        el fondo climático de México.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/30 via-surface to-background p-6">
        <div className="flex items-center justify-center gap-2">
          <Leaf className="h-5 w-5 text-accent" />
          <span className="font-display font-semibold">Semilla Climática</span>
        </div>
        <p className="mt-4 font-display text-lg font-bold">{name}</p>
        <p className="mt-1 text-sm text-accent">
          Donó ${amount.toLocaleString("es-MX")} MXN al clima
        </p>
        <p className="mt-3 text-xs text-muted">{siteUrl}</p>
      </div>

      <button
        type="button"
        onClick={() => {
          const text = encodeURIComponent(
            `Acabo de donar $${amount} MXN a Semilla Climática 🌱 ¿Cuánto gastaste hoy en snacks? https://${siteUrl}`
          );
          window.open(`https://wa.me/?text=${text}`, "_blank");
        }}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent-hover"
      >
        <Share2 className="h-4 w-4" />
        Compartir mi badge
      </button>

      <Link
        href="/muro"
        className="mt-4 inline-flex items-center gap-1 text-sm text-muted transition hover:text-accent"
      >
        Ver el Muro Digital
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
