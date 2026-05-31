import type { FundStats } from "./donors";

/** Mostrar cifras públicas solo cuando el movimiento tenga masa crítica */
export const PUBLIC_STATS_MIN_DONORS = 100;
export const PUBLIC_STATS_MIN_AMOUNT = 50_000;

export function shouldShowPublicStats(stats: FundStats): boolean {
  return (
    stats.donorCount >= PUBLIC_STATS_MIN_DONORS ||
    stats.current >= PUBLIC_STATS_MIN_AMOUNT
  );
}

/** Mostrar sección de nombres recientes (sin cifras) desde el primer donante */
export const PUBLIC_WALL_MIN_DONORS = 1;

export function shouldShowRecentDonors(donorCount: number): boolean {
  return donorCount >= PUBLIC_WALL_MIN_DONORS;
}
