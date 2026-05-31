import { PLAN_PHASES } from "@/lib/constants";
import { getFundStats } from "@/lib/donors";
import { PHASE_IMAGES } from "@/lib/section-images";
import FundProgress from "@/components/FundProgress";
import SectionImage from "@/components/SectionImage";

export default async function Plan() {
  const stats = await getFundStats();

  const icons = {
    zap: "⚡",
    flask: "🧪",
    landmark: "🏛️",
  };

  return (
    <section id="plan" className="section-light py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground-dark sm:text-4xl">
            Nuestro plan en 3 fases
          </h2>
          <p className="mt-4 text-muted-dark leading-relaxed">
            Comprar, crear e influir. Un camino claro de acción climática en
            México.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLAN_PHASES.map((phase) => {
            const image = PHASE_IMAGES[phase.phase as 1 | 2 | 3];

            return (
              <div
                key={phase.phase}
                className="overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition hover:shadow-md"
              >
                <SectionImage
                  src={image.src}
                  alt={image.alt}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="aspect-[16/10]"
                  imageClassName="object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-lg">
                      {icons[phase.icon as keyof typeof icons]}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Fase {phase.phase}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground-dark">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-dark leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14">
          <FundProgress stats={stats} />
        </div>
      </div>
    </section>
  );
}
