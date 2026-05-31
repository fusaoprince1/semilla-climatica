import type { Donor } from "./donors";
import { CAROUSEL_SLOTS, MURO_VISIBLE_SLOTS } from "./stats-policy";

export type DisplaySlot = Donor | "placeholder";

export function sortDonorsNewestFirst(donors: Donor[]): Donor[] {
  return [...donors].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Reales primero (izquierda), placeholders rellenan hasta 8 */
export function buildCarouselSlots(donors: Donor[]): DisplaySlot[] {
  const sorted = sortDonorsNewestFirst(donors);
  const slots: DisplaySlot[] = sorted.slice(0, CAROUSEL_SLOTS);
  while (slots.length < CAROUSEL_SLOTS) slots.push("placeholder");
  return slots;
}

/** Grid de hasta 40: reales + placeholders al final */
export function buildMuroBrowseSlots(donors: Donor[]): DisplaySlot[] {
  const sorted = sortDonorsNewestFirst(donors);
  const slots: DisplaySlot[] = sorted.slice(0, MURO_VISIBLE_SLOTS);
  while (slots.length < MURO_VISIBLE_SLOTS) slots.push("placeholder");
  return slots;
}

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
    result = result.filter((d) => {
      const donorDate = new Date(d.date).toISOString().slice(0, 10);
      return donorDate === dateFilter;
    });
  }

  return result.slice(0, MURO_VISIBLE_SLOTS);
}

export function isSameDay(isoDate: string, yyyyMmDd: string): boolean {
  return new Date(isoDate).toISOString().slice(0, 10) === yyyyMmDd;
}
