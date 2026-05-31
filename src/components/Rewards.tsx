import Link from "next/link";
import { Award, Crown, Leaf } from "lucide-react";
import { PUBLIC_PROMISES } from "@/lib/perks";
import SectionBackdrop from "@/components/SectionBackdrop";
import { SECTION_WALLPAPERS } from "@/lib/section-images";

export default function Rewards() {
  return (
    <SectionBackdrop
      wallpaper={SECTION_WALLPAPERS.rewards}
      overlay="medium"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Tu donación deja huella
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Todo se entrega automáticamente al confirmarse tu pago. Sin
            trámites, sin esperas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-glow card-glass rounded-2xl border border-border/80 p-6 text-center transition">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 ring-1 ring-primary/40">
              <Leaf className="h-7 w-7 text-primary-light" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">
              Desde $20 MXN
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li>✓ Badge verificado</li>
              <li>✓ Muro Digital</li>
            </ul>
          </div>

          <div className="card-glow card-glass rounded-2xl border border-border/80 p-6 text-center transition">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 ring-1 ring-primary/40">
              <Leaf className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">
              $20 – $149 MXN
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li>✓ Badge compartible</li>
              <li>✓ Nombre en el Muro</li>
            </ul>
          </div>

          <div className="card-glow card-glass rounded-2xl border border-accent/30 p-6 text-center ring-1 ring-accent/20 transition">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
              <Award className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">
              Desde $150 MXN
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li>✓ Badge premium</li>
              <li>✓ Certificado digital</li>
              <li>✓ Destacado en el Muro</li>
            </ul>
          </div>

          <div className="card-glow-accent group card-glass rounded-2xl border border-accent/30 p-6 text-center ring-1 ring-accent/20 transition">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 ring-1 ring-accent/40 transition group-hover:bg-accent/30 group-hover:shadow-[0_0_20px_rgba(244,160,36,0.45)] group-hover:ring-accent/70">
              <Crown className="h-7 w-7 text-accent transition group-hover:drop-shadow-[0_0_10px_rgba(244,160,36,0.9)]" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">
              Desde $500 MXN
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li>✓ Badge fundador</li>
              <li>✓ Certificado digital</li>
              <li>✓ Prioridad mural Fase 3*</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          * {PUBLIC_PROMISES.muralNote}
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/muro"
            className="text-sm text-accent transition hover:text-accent-hover"
          >
            Ver el Muro Digital →
          </Link>
        </div>
      </div>
    </SectionBackdrop>
  );
}
