import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Opciones — Mar agitado (Cancún, Acapulco, Vallarta)",
  robots: { index: false, follow: false },
};

const OPTIONS = [
  {
    id: "01",
    file: "01-acapulco-olas-atardecer.jpg",
    title: "Acapulco — Olas al atardecer",
    note: "Olas chocando en la playa. Acapulco Diamante, Guerrero.",
  },
  {
    id: "02",
    file: "02-cancun-olas-chocando.jpg",
    title: "Cancún — Olas en la orilla",
    note: "Mar con movimiento fuerte al atardecer. Quintana Roo.",
  },
  {
    id: "03",
    file: "03-cancun-olas-ciudad.jpg",
    title: "Cancún — Olas cerca de la ciudad",
    note: "Mar agitado junto a la costa urbana.",
  },
  {
    id: "04",
    file: "04-cancun-playa-olas.jpg",
    title: "Cancún — Playa con olas",
    note: "Olas en la playa con cielo cargado.",
  },
  {
    id: "05",
    file: "05-vallarta-playa-olas.jpg",
    title: "Puerto Vallarta — Playa Bocanegra",
    note: "Olas en la arena. Puerto Vallarta, Jalisco.",
  },
  {
    id: "06",
    file: "06-olas-rompiendo-fuerte.jpg",
    title: "Olas rompiendo con fuerza",
    note: "Mar muy agitado contra la costa. Muy dramático.",
  },
  {
    id: "07",
    file: "07-costa-viento-palmeras.jpg",
    title: "Costa tropical con viento",
    note: "Palmeras y mar en movimiento. Sensación de temporal.",
  },
  {
    id: "08",
    file: "08-mar-agitado-barco.jpg",
    title: "Mar agitado con embarcación",
    note: "Océano con oleaje fuerte.",
  },
  {
    id: "09",
    file: "09-olas-costeras.jpg",
    title: "Olas costeras",
    note: "Mar en movimiento en la orilla.",
  },
  {
    id: "10",
    file: "10-cancun-mar-olas.jpg",
    title: "Cancún — Mar con olas",
    note: "Agua turquesa con movimiento y espuma.",
  },
] as const;

export default function CoastStormOptionsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pt-36">
      <h1 className="font-display text-center text-3xl font-bold sm:text-4xl">
        10 opciones — mar agitado
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted leading-relaxed">
        Cancún, Acapulco, Puerto Vallarta y costas con oleaje fuerte.
        <br />
        Carpeta:{" "}
        <code className="text-foreground">public/coast-storm-options/</code>
        <br />
        Dime el número (01–10) para usarla de fondo.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {OPTIONS.map((opt) => (
          <article
            key={opt.id}
            className="overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <a
              href={`/coast-storm-options/${opt.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative aspect-[16/9] bg-background">
                <Image
                  src={`/coast-storm-options/${opt.file}`}
                  alt={opt.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </a>
            <div className="p-4">
              <h2 className="font-display text-lg font-semibold">
                <span className="text-accent">{opt.id}</span> — {opt.title}
              </h2>
              <p className="mt-1 text-sm text-muted leading-relaxed">
                {opt.note}
              </p>
              <p className="mt-2 font-mono text-xs text-muted/80">{opt.file}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
