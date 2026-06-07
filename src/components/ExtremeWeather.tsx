import { EXTREME_WEATHER_STATS } from "@/lib/constants";
import SectionBackdrop from "@/components/SectionBackdrop";
import { SECTION_WALLPAPERS } from "@/lib/section-images";

const HOOKS = [
  "¿Llueve más fuerte que antes? También es el clima.",
  "Huracanes que explotan en horas, no en días.",
  "Inundaciones en ciudades que nunca se prepararon.",
];

export default function ExtremeWeather() {
  return (
    <SectionBackdrop
      id="extremos"
      wallpaper={SECTION_WALLPAPERS.extremeWeather}
      overlay="medium"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-on-wallpaper font-display text-3xl font-bold sm:text-4xl">
            No es solo calor
          </h2>
          <p className="text-on-wallpaper mx-auto mt-4 max-w-xl text-lg font-medium leading-relaxed sm:text-xl">
            El cambio climático también trae lluvias torrenciales, inundaciones
            y huracanes cada vez más intensos. Si hoy te inunda la calle, el
            problema es el mismo — solo cambia de cara.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
          {HOOKS.map((hook) => (
            <span
              key={hook}
              className="trust-pill rounded-full px-3 py-1 text-xs text-on-wallpaper-soft"
            >
              {hook}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {EXTREME_WEATHER_STATS.map((stat) => (
            <div
              key={stat.label}
              className="card-glow surface-glass rounded-2xl border border-border/80 p-6 transition"
            >
              <p className="font-display text-4xl font-bold text-accent">
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

        <p className="text-on-wallpaper-soft mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed sm:text-base">
          Da igual si vives con olas de calor o con temporales: la misma
          urgencia climática está detrás. Por eso Semilla Climática actúa ahora —
          no cuando ya sea tarde para todos.
        </p>
      </div>
    </SectionBackdrop>
  );
}
