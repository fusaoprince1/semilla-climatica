import type { Metadata } from "next";
import Link from "next/link";
import { Crown, Leaf } from "lucide-react";
import { WALL_DONORS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Muro Digital",
  description:
    "Cada donante que planta su semilla queda registrado. Conoce a quienes ya están construyendo el futuro climático de México.",
};

export default function MuroPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Muro Digital
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Cada persona que dona desde $20 queda registrada aquí. Los miembros
            fundadores ($500+) serán reconocidos en un mural conmemorativo en
            CDMX cuando alcancemos la Fase 3.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4 text-center text-sm text-muted">
          Tu nombre no es un premio — es prueba de que estuviste antes que los
          demás.
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {WALL_DONORS.map((donor, i) => (
            <div
              key={`${donor.name}-${i}`}
              className={`rounded-xl border p-4 transition ${
                donor.founder
                  ? "border-accent/40 bg-accent/5 ring-1 ring-accent/20"
                  : "border-border bg-surface hover:border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
                  {donor.founder ? (
                    <Crown className="h-4 w-4 text-accent" />
                  ) : (
                    <Leaf className="h-4 w-4 text-primary-light" />
                  )}
                </div>
                {donor.founder && (
                  <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent">
                    FUNDADOR
                  </span>
                )}
              </div>
              <p className="mt-3 font-display font-semibold">{donor.name}</p>
              <p className="mt-1 text-sm text-accent">
                ${donor.amount.toLocaleString("es-MX")} MXN
              </p>
              <p className="mt-2 text-xs text-muted">
                {donor.city} ·{" "}
                {new Date(donor.date).toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>

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
