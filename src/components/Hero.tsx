import Link from "next/link";
import { Shield, Target, FileText } from "lucide-react";
import SectionImage from "@/components/SectionImage";
import { SECTION_IMAGES } from "@/lib/section-images";

export default function Hero() {
  return (
    <section className="hero-glow relative min-h-svh overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" />
      </div>

      <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
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

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/donar"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-background transition hover:bg-accent-hover sm:w-auto"
              >
                Donar ahora — desde $20 MXN
              </Link>
              <Link
                href="/transparencia"
                className="flex w-full items-center justify-center rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition hover:border-primary/50 hover:bg-surface sm:w-auto"
              >
                Ver cómo usamos tu dinero
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted lg:justify-start">
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

          <SectionImage
            src={SECTION_IMAGES.hero.src}
            alt={SECTION_IMAGES.hero.alt}
            priority
            overlay="gradient-bottom"
            sizes="(max-width: 1024px) 100vw, 560px"
            className="aspect-[4/3] w-full rounded-3xl border border-border shadow-2xl shadow-primary/20 ring-1 ring-primary/20 lg:aspect-[5/6] lg:max-h-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
