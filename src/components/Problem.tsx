import { PROBLEM_STATS } from "@/lib/constants";

export default function Problem() {
  return (
    <section id="problema" className="py-20 sm:py-28">
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
              className="card-glow rounded-2xl border border-border bg-surface p-6 transition"
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
