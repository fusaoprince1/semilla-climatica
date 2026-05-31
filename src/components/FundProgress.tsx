import type { FundStats } from "@/lib/donors";
import { shouldShowPublicStats } from "@/lib/stats-policy";

type Props = {
  stats: FundStats;
};

export default function FundProgress({ stats }: Props) {
  const showNumbers = shouldShowPublicStats(stats.current);

  return (
    <div className="card-glass rounded-2xl border border-border/80 p-6 sm:p-8">
      {showNumbers ? (
        <>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-muted">
                Meta Fase {stats.phase}
              </p>
              <p className="font-display text-2xl font-bold">
                ${stats.current.toLocaleString("es-MX")} MXN
                <span className="text-muted font-normal">
                  {" "}
                  / ${stats.target.toLocaleString("es-MX")} MXN
                </span>
              </p>
            </div>
            <p className="font-display text-3xl font-bold text-accent">
              {Math.min(
                100,
                Math.round((stats.current / stats.target) * 100) || 0
              )}
              %
            </p>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-surface-light">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
              style={{
                width: `${Math.min(100, Math.max((stats.current / stats.target) * 100, stats.current > 0 ? 2 : 0))}%`,
              }}
            />
          </div>
        </>
      ) : (
        <>
          <p className="text-sm font-medium text-accent">
            Fase {stats.phase} en marcha
          </p>
          <p className="mt-2 font-display text-xl font-bold sm:text-2xl">
            Sé de los primeros semilleros
          </p>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Estamos en las primeras etapas del fondo. Las cifras totales se
            publicarán al alcanzar $50,000 MXN — tu donación cuenta desde el
            día uno.
          </p>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-surface-light">
            <div className="h-full w-1/4 animate-pulse rounded-full bg-gradient-to-r from-primary/60 to-accent/60" />
          </div>
        </>
      )}
    </div>
  );
}
