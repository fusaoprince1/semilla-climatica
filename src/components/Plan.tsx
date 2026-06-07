import { getFundStats } from "@/lib/donors";
import FundProgress from "@/components/FundProgress";
import SectionBackdrop from "@/components/SectionBackdrop";
import { SECTION_WALLPAPERS } from "@/lib/section-images";

export default async function Plan() {
  const stats = await getFundStats();

  const icons = {
    zap: "⚡",
    flask: "🧪",
    landmark: "🏛️",
  };

  const phases = [
    {
      phase: 1,
      title: "Comprar tecnología",
      description:
        "Adquirimos y desplegamos soluciones existentes: paneles solares comunitarios, captura de CO₂, reforestación y tech de eficiencia energética.",
      icon: "zap" as const,
    },
    {
      phase: 2,
      title: "Crear tecnología",
      description:
        "Con fondos suficientes, desarrollamos nuestra propia I+D climática adaptada a las realidades de México.",
      icon: "flask" as const,
    },
    {
      phase: 3,
      title: "Influir políticamente",
      description:
        "Construimos voz en México exclusivamente en cuestiones climáticas: propuestas, advocacy y el mural conmemorativo en CDMX.",
      icon: "landmark" as const,
    },
  ];

  return (
    <SectionBackdrop
      id="plan"
      wallpaper={SECTION_WALLPAPERS.plan}
      overlay="soft"
      brightImage="subtle"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Nuestro plan en 3 fases
          </h2>
          <p className="text-on-wallpaper-soft mt-4 text-lg leading-relaxed">
            Comprar, crear e influir. Un camino claro de acción climática en
            México.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {phases.map((phase) => (
            <div
              key={phase.phase}
              className="card-glow card-glass relative rounded-2xl border border-border/80 p-6 transition"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-lg">
                  {icons[phase.icon]}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Fase {phase.phase}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {phase.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <FundProgress stats={stats} />
        </div>
      </div>
    </SectionBackdrop>
  );
}
