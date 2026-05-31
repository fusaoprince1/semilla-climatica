import type { Donor } from "./donors";
import { getDonorDateKey } from "./dates";
import { CAROUSEL_SLOTS, MURO_VISIBLE_SLOTS } from "./stats-policy";

export type DisplaySlot = Donor | "placeholder";

export function sortDonorsNewestFirst(donors: Donor[]): Donor[] {
  return [...donors].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Carrusel: siempre 8 espacios.
 * - Si hay 8+ reales → los 8 más recientes (el 9.º ya no aparece aquí, sí en muro).
 * - Si hay menos de 8 → reales + placeholders al final.
 */
export function buildCarouselSlots(donors: Donor[]): DisplaySlot[] {
  const sorted = sortDonorsNewestFirst(donors);
  const slots: DisplaySlot[] = sorted.slice(0, CAROUSEL_SLOTS);
  while (slots.length < CAROUSEL_SLOTS) slots.push("placeholder");
  return slots;
}

/**
 * Muro: siempre los 40 donantes más recientes (solo reales, sin placeholders).
 * El 41.º más antiguo solo aparece por búsqueda.
 */
export function buildMuroBrowseSlots(donors: Donor[]): Donor[] {
  return sortDonorsNewestFirst(donors).slice(0, MURO_VISIBLE_SLOTS);
}

/** Búsqueda en TODA la base (sin límite de 40) */
export function filterDonors(
  donors: Donor[],
  query: string,
  dateFilter: string
): Donor[] {
  let result = sortDonorsNewestFirst(donors);
  const q = query.trim().toLowerCase();

  if (q) {
    result = result.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.city?.toLowerCase().includes(q)
    );
  }

  if (dateFilter) {
    result = result.filter(
      (d) => getDonorDateKey(d.date) === dateFilter
    );
  }

  return result;
}
