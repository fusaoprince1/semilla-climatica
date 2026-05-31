import type { Metadata } from "next";
import DonateForm from "@/components/DonateForm";

export const metadata: Metadata = {
  title: "Donar",
  description:
    "¿Cuánto gastaste hoy en snacks? $20 van al clima. Dona a Semilla Climática y recibe tu badge compartible.",
};

const HOOKS = [
  "¿Cuánto gastaste hoy en snacks? $20 van al clima.",
  "Menos que un Uber. Más impacto que ignorar el problema.",
  "El clima no espera a que tengas más dinero.",
  "Tu nombre en el Muro Digital — para siempre.",
];

export default function DonarPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Planta tu semilla
          </h1>
          <p className="mt-4 text-lg font-semibold text-accent">
            {HOOKS[0]}
          </p>
          <p className="mt-2 text-sm text-muted">
            Desde $20 recibes un badge compartible y tu nombre en el Muro
            Digital automáticamente.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-2">
          {HOOKS.slice(1).map((hook) => (
            <span
              key={hook}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
            >
              {hook}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <DonateForm />
        </div>
      </div>
    </div>
  );
}
