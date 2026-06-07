import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Opciones de fondo — Huracanes",
  robots: { index: false, follow: false },
};

const OPTIONS = [
  {
    id: "01",
    file: "01-nasa-golfo-marco-laura.jpg",
    title: "NASA — Golfo (Marco y Laura)",
    note: "Vista satélite desde arriba. Golfo de México. La que usa el sitio ahora.",
  },
  {
    id: "02",
    file: "02-nasa-golfo-laura.jpg",
    title: "NASA — Huracán Laura (Golfo)",
    note: "Alta resolución. Tormenta grande en el Golfo.",
  },
  {
    id: "03",
    file: "03-unsplash-typhoon-topdown-nasa.jpg",
    title: "NASA — Tifón (vista cenital)",
    note: "Ojo del huracán visto directamente desde arriba.",
  },
  {
    id: "04",
    file: "04-unsplash-hurricane-space-nasa.jpg",
    title: "NASA — Huracán desde el espacio",
    note: "Vista lateral/oblicua, muy icónica.",
  },
  {
    id: "05",
    file: "05-unsplash-storm-ocean.jpg",
    title: "Tormenta sobre el océano",
    note: "Nubes oscuras y mar. Más atmósfera.",
  },
  {
    id: "06",
    file: "06-unsplash-earth-space.jpg",
    title: "Tierra desde el espacio",
    note: "Planeta con nubes. Más abstracto.",
  },
  {
    id: "07",
    file: "07-unsplash-storm-clouds.jpg",
    title: "Nubes de tormenta",
    note: "Cielo cargado. Buen contraste para texto.",
  },
  {
    id: "08",
    file: "08-unsplash-hurricane-dusk-cattle.jpg",
    title: "Ganado al atardecer",
    note: "Siluetas en pastizal. No satélite.",
  },
  {
    id: "09",
    file: "09-unsplash-ocean-storm-city.jpg",
    title: "Olas cerca de ciudad",
    note: "Costa urbana con mar agitado.",
  },
  {
    id: "10",
    file: "10-unsplash-clouds-storm.jpg",
    title: "Nubes desde el espacio",
    note: "Patrón de nubes sobre océano.",
  },
] as const;

export default function HurricaneOptionsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pt-36">
      <h1 className="font-display text-center text-3xl font-bold sm:text-4xl">
        10 opciones de fondo — huracanes
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted leading-relaxed">
        Carpeta del proyecto:{" "}
        <code className="text-foreground">public/hurricane-options/</code>
        <br />
        Dime el número (01–10) en el chat para ponerla en la sección{" "}
        <strong className="text-foreground">No es solo calor</strong>.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {OPTIONS.map((opt) => (
          <article
            key={opt.id}
            className="overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <a
              href={`/hurricane-options/${opt.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative aspect-[16/9] bg-background">
                <Image
                  src={`/hurricane-options/${opt.file}`}
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
