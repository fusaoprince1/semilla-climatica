/** Cifras públicas solo desde esta meta (MXN) */
export const PUBLIC_STATS_MIN_AMOUNT = 50_000;

export function shouldShowPublicStats(current: number): boolean {
  return current >= PUBLIC_STATS_MIN_AMOUNT;
}

export const CAROUSEL_SLOTS = 8;
export const MURO_VISIBLE_SLOTS = 40;
export const MURO_COLUMNS = 4;
