import Link from "next/link";
import { Share2, Award, Crown } from "lucide-react";

export default function Rewards() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Tu donación deja huella
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Desde $20 recibes un badge compartible. A mayor contribución, mayor
            reconocimiento — incluyendo prioridad para el mural conmemorativo
            en CDMX.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div className="card-glow rounded-2xl border border-border bg-background p-6 text-center transition">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
              <Share2 className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">
              Desde $20 MXN
            </h3>
            <p className="mt-2 text-sm text-muted">
              Badge compartible para redes + tu nombre en el Muro Digital
            </p>
          </div>

          <div className="card-glow rounded-2xl border border-accent/30 bg-background p-6 text-center ring-1 ring-accent/20 transition">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
              <Award className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">
              Desde $150 MXN
            </h3>
            <p className="mt-2 text-sm text-muted">
              Badge premium + destacado en el Muro Digital + certificado
            </p>
          </div>

          <div className="card-glow rounded-2xl border border-border bg-background p-6 text-center transition">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
              <Crown className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">
              Desde $500 MXN
            </h3>
            <p className="mt-2 text-sm text-muted">
              Badge fundador + certificado + prioridad mural Reforma (Fase 3)
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/muro"
            className="text-sm text-accent transition hover:text-accent-hover"
          >
            Ver el Muro Digital →
          </Link>
        </div>
      </div>
    </section>
  );
}
