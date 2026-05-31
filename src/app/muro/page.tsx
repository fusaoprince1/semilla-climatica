import type { Metadata } from "next";
import Link from "next/link";
import { getDonors } from "@/lib/donors";
import DonorGrid from "@/components/DonorGrid";

export const metadata: Metadata = {
  title: "Muro Digital",
  description:
    "Cada donante que planta su semilla queda registrado. Conoce a quienes ya están construyendo el futuro climático de México.",
};

export default async function MuroPage() {
  const donors = await getDonors();

  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Muro Digital
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Cada persona que dona desde $20 queda registrada aquí
            automáticamente. Los miembros fundadores ($500+) tendrán prioridad
            para el mural conmemorativo en CDMX (Fase 3).
          </p>
          <p className="mt-2 text-sm font-medium text-accent">
            {donors.length} semillero{donors.length !== 1 ? "s" : ""} registrado
            {donors.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4 text-center text-sm text-muted">
          Tu nombre no es un premio — es prueba de que estuviste antes que los
          demás.
        </div>

        <DonorGrid donors={donors} />

        <div className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
          <h2 className="font-display text-xl font-semibold">
            ¿Quieres ver tu nombre aquí?
          </h2>
          <p className="mt-2 text-muted">
            Desde $20 MXN — badge compartible incluido.
          </p>
          <Link
            href="/donar"
            className="mt-6 inline-flex rounded-full bg-accent px-8 py-3 font-semibold text-background transition hover:bg-accent-hover"
          >
            Donar ahora
          </Link>
        </div>
      </div>
    </div>
  );
}
