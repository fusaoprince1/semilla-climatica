import type { FundStats } from "@/lib/donors";

type Props = {
  stats: FundStats;
  compact?: boolean;
};

export default function FundProgress({ stats, compact }: Props) {
  const progress = Math.min(
    100,
    Math.round((stats.current / stats.target) * 100) || 0
  );

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm">
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
        <span className="text-primary-light">
          {stats.donorCount} semillero{stats.donorCount !== 1 ? "s" : ""} · $
          {stats.current.toLocaleString("es-MX")} MXN recaudados
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted">
            Meta Fase {stats.phase} · {stats.donorCount} donante
            {stats.donorCount !== 1 ? "s" : ""}
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
          {progress}%
        </p>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-surface-light">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
          style={{ width: `${Math.max(progress, stats.current > 0 ? 2 : 0)}%` }}
        />
      </div>
    </div>
  );
}
