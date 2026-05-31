"use client";

import Link from "next/link";
import { Printer, Award, Leaf } from "lucide-react";
import { formatDonorDate } from "@/lib/dates";
import { TIER_LABELS, getDonorTier } from "@/lib/tiers";

type Props = {
  name: string;
  amount: number;
  date: string;
  paymentId: string;
};

export default function DonationCertificate({
  name,
  amount,
  date,
  paymentId,
}: Props) {
  const tier = getDonorTier(amount);
  const formattedDate = formatDonorDate(date);

  return (
    <div className="mx-auto max-w-2xl">
      <div
        id="donation-certificate"
        className="relative overflow-hidden rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-primary/20 via-surface to-background p-8 sm:p-12 print:border-amber-700 print:bg-white print:text-black"
      >
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 print:hidden" />
        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-primary/10 print:hidden" />

        <div className="relative text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 print:border print:border-green-800">
            <Leaf className="h-7 w-7 text-accent print:text-green-800" />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent print:text-amber-800">
            Certificado de donación
          </p>
          <h1 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
            Semilla Climática
          </h1>
          <p className="mt-1 text-sm text-muted print:text-gray-600">
            Fondo climático permanente · México
          </p>

          <div className="mx-auto mt-8 max-w-md border-y border-accent/20 py-6 print:border-amber-200">
            <p className="text-sm text-muted print:text-gray-600">
              Se certifica que
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-foreground print:text-black">
              {name}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted print:text-gray-700">
              realizó una donación de{" "}
              <span className="font-semibold text-accent print:text-amber-800">
                ${amount.toLocaleString("es-MX")} MXN
              </span>{" "}
              al fondo climático Semilla Climática, contribuyendo a acciones
              contra el cambio climático en México.
            </p>
            <p className="mt-3 text-xs font-medium uppercase tracking-wider text-primary-light print:text-green-800">
              {TIER_LABELS[tier]}
            </p>
          </div>

          <div className="mt-6 flex flex-col items-center gap-1 text-sm text-muted print:text-gray-600 sm:flex-row sm:justify-center sm:gap-6">
            <span>Fecha: {formattedDate}</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-xs">Ref. {paymentId}</span>
          </div>

          <p className="mt-8 text-xs text-muted/80 print:text-gray-500">
            Documento digital verificado con Mercado Pago · semillaclimatica.com
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 print:hidden sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-background transition hover:bg-accent-hover"
        >
          <Printer className="h-4 w-4" />
          Imprimir / guardar PDF
        </button>
        <Link
          href={`/badge/${paymentId}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-medium transition hover:border-primary/40"
        >
          <Award className="h-4 w-4" />
          Ver badge
        </Link>
      </div>

      <p className="mt-4 text-center text-xs text-muted print:hidden">
        En el diálogo de impresión elige &quot;Guardar como PDF&quot; para
        descargarlo.
      </p>
    </div>
  );
}
