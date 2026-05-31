const MX_TIMEZONE = "America/Mexico_City";

/** YYYY-MM-DD en hora de México (para comparar con input type=date) */
export function getDonorDateKey(isoDate: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: MX_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(isoDate));
}

/** Fecha legible en hora de México */
export function formatDonorDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("es-MX", {
    timeZone: MX_TIMEZONE,
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
