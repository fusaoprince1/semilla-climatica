import { PROBLEM_STATS } from "@/lib/constants";
import SectionBackdrop from "@/components/SectionBackdrop";
import { SECTION_WALLPAPERS } from "@/lib/section-images";

export default function Problem() {
  return (
    <SectionBackdrop
      id="problema"
      wallpaper={SECTION_WALLPAPERS.problem}
      overlay="medium"
      brightImage
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-on-wallpaper font-display text-3xl font-bold sm:text-4xl">
            El clima no espera
          </h2>
          <p className="text-on-wallpaper mx-auto mt-4 max-w-xl text-lg font-medium leading-relaxed sm:text-xl">
            No podemos cambiar todos los factores geopolíticos, pero el
            calentamiento global es la batalla que no podemos posponer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {PROBLEM_STATS.map((stat) => (
            <div
              key={stat.label}
              className="card-glow surface-glass rounded-2xl border border-border/80 p-6 transition"
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
    </SectionBackdrop>
  );
}
