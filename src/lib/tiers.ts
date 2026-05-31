export type DonorTier = "semillero" | "premium" | "fundador";

export const TIER_THRESHOLDS = {
  premium: 150,
  fundador: 500,
} as const;

export function getDonorTier(amount: number): DonorTier {
  if (amount >= TIER_THRESHOLDS.fundador) return "fundador";
  if (amount >= TIER_THRESHOLDS.premium) return "premium";
  return "semillero";
}

export function hasCertificate(amount: number): boolean {
  return amount >= TIER_THRESHOLDS.premium;
}

export function isFounder(amount: number): boolean {
  return amount >= TIER_THRESHOLDS.fundador;
}

export function isHighlightedOnWall(amount: number): boolean {
  return amount >= TIER_THRESHOLDS.premium;
}

export const TIER_LABELS: Record<DonorTier, string> = {
  semillero: "Semillero",
  premium: "Semillero Premium",
  fundador: "Miembro Fundador",
};
