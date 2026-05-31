import { PROBLEM_STATS } from "@/lib/constants";
import SectionImage from "@/components/SectionImage";
import { SECTION_IMAGES } from "@/lib/section-images";

export default function Problem() {
  return (
    <section id="problema" className="relative py-20 sm:py-28">
      <SectionImage
        src={SECTION_IMAGES.problem.src}
        alt={SECTION_IMAGES.problem.alt}
        overlay="dark-heavy"
        sizes="100vw"
        className="absolute inset-0 -z-10"
        imageClassName="object-cover object-center"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            El clima no espera
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            No podemos cambiar todos los factores geopolíticos, pero el
            calentamiento global es la batalla que no podemos posponer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {PROBLEM_STATS.map((stat) => (
            <div
              key={stat.label}
              className="card-glow rounded-2xl border border-border/80 bg-background/90 p-6 backdrop-blur-sm transition"
            >
              <p className="font-display text-4xl font-bold text-danger">
                {stat.value}
              </p>
              <p className="mt-2 font-semibold text-foreground">{stat.label}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {stat.detail}
              </p>
              <p className="mt-4 text-xs text-muted/70">Fuente: {stat.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
