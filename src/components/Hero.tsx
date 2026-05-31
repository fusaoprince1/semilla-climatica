import Link from "next/link";
import { Shield, Target, FileText } from "lucide-react";
import SectionBackdrop from "@/components/SectionBackdrop";
import { SECTION_WALLPAPERS } from "@/lib/section-images";

export default function Hero() {
  return (
    <SectionBackdrop
      wallpaper={SECTION_WALLPAPERS.hero}
      overlay="hero"
      priority
      className="hero-glow min-h-svh"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" />
      </div>

      <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
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
            Badge verificado + tu nombre en el Muro Digital al instante.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/donar"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-background transition hover:bg-accent-hover sm:w-auto"
            >
              Donar ahora — desde $20 MXN
            </Link>
            <Link
              href="/transparencia"
              className="flex w-full items-center justify-center rounded-full border border-border bg-background/40 px-8 py-4 text-base font-medium text-foreground backdrop-blur-sm transition hover:border-primary/50 hover:bg-surface/60 sm:w-auto"
            >
              Ver cómo usamos tu dinero
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary-light" />
              Pagos seguros Mercado Pago
            </span>
            <span className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary-light" />
              Metas públicas
            </span>
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary-light" />
              Reportes al alcanzar metas
            </span>
          </div>
        </div>
      </div>
    </SectionBackdrop>
  );
}
