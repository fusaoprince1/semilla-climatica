import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DonateCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-surface to-background p-8 sm:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Planta tu semilla hoy
            </h2>
            <p className="mt-4 text-lg text-muted">
              ¿Cuánto gastaste hoy en snacks?{" "}
              <span className="font-semibold text-accent">
                $20 van al clima.
              </span>
            </p>
            <p className="mt-2 text-sm text-muted">
              Menos de lo que cuesta un antojo. Impacto que puede durar años.
            </p>
            <Link
              href="/donar"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-background transition hover:bg-accent-hover"
            >
              Donar ahora
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
