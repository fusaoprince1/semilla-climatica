import Link from "next/link";
import { ArrowRight, Shield, Target, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            México no puede esperar{" "}
            <span className="gradient-text">otro verano récord</span>
          </h1>

          <p className="mt-6 text-lg text-muted leading-relaxed sm:text-xl">
            Un fondo permanente para comprar soluciones hoy, crear las de
            mañana, y exigir acción política real.
          </p>

          <p className="mt-4 text-base font-medium text-accent sm:text-lg">
            ¿Cuánto gastaste hoy en snacks? $20 van al clima.
          </p>

          <p className="mt-2 text-sm text-muted">
            Menos que un antojo. Tu nombre queda en el Muro Digital para
            siempre.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/donar"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-background transition hover:bg-accent-hover sm:w-auto"
            >
              Donar ahora — desde $20 MXN
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/transparencia"
              className="flex w-full items-center justify-center rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition hover:border-primary/50 hover:bg-surface sm:w-auto"
            >
              Ver cómo usamos tu dinero
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary-light" />
              100% transparente
            </span>
            <span className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary-light" />
              Metas públicas
            </span>
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary-light" />
              Reportes trimestrales
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
