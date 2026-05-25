import { Zap, FlaskConical, Landmark } from "lucide-react";
import { PLAN_PHASES, FUND_GOAL } from "@/lib/constants";

const icons = {
  zap: Zap,
  flask: FlaskConical,
  landmark: Landmark,
};

export default function Plan() {
  const progress = Math.round((FUND_GOAL.current / FUND_GOAL.target) * 100);

  return (
    <section id="plan" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Nuestro plan en 3 fases
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Comprar, crear e influir. Un camino claro de acción climática en
            México.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLAN_PHASES.map((phase) => {
            const Icon = icons[phase.icon as keyof typeof icons];
            return (
              <div
                key={phase.phase}
                className="card-glow relative rounded-2xl border border-border bg-background p-6 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                    <Icon className="h-5 w-5 text-accent" />
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
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-background p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-muted">
                Meta Fase {FUND_GOAL.phase}
              </p>
              <p className="font-display text-2xl font-bold">
                ${FUND_GOAL.current.toLocaleString("es-MX")} MXN
                <span className="text-muted font-normal">
                  {" "}
                  / ${FUND_GOAL.target.toLocaleString("es-MX")} MXN
                </span>
              </p>
            </div>
            <p className="font-display text-3xl font-bold text-accent">
              {progress}%
            </p>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-surface-light">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
