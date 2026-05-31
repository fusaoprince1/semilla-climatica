import { getDonorTier, TIER_LABELS } from "./tiers";

export type PerkInfo = {
  perks: string[];
  description: string;
  label: string;
};

const BASE_PERKS = [
  "Badge verificado (compartir / imprimir)",
  "Nombre en el Muro Digital",
];

export function getPerksForAmount(amount: number): string[] {
  const tier = getDonorTier(amount);

  if (tier === "fundador") {
    return [
      "Badge fundador",
      "Certificado digital",
      "Destacado permanente en el Muro",
      "Prioridad mural Reforma — meta Fase 3 (sujeto a permisos)",
    ];
  }

  if (tier === "premium") {
    return [
      "Badge premium",
      "Certificado digital",
      "Destacado en el Muro (etiqueta Premium)",
      "Nombre en el Muro Digital",
    ];
  }

  return BASE_PERKS;
}

export function getTierInfo(amount: number): PerkInfo {
  const tier = getDonorTier(amount);

  if (tier === "fundador") {
    return {
      label: TIER_LABELS.fundador,
      description: "Badge fundador + certificado + prioridad mural CDMX (Fase 3)",
      perks: getPerksForAmount(amount),
    };
  }

  if (tier === "premium") {
    return {
      label: TIER_LABELS.premium,
      description: "Badge premium + certificado digital + destacado en el Muro",
      perks: getPerksForAmount(amount),
    };
  }

  if (amount >= 50) {
    return {
      label: "Semillero",
      description: "Badge + tu nombre en el Muro Digital",
      perks: BASE_PERKS,
    };
  }

  return {
    label: TIER_LABELS.semillero,
    description: "Badge compartible + tu nombre en el Muro Digital",
    perks: BASE_PERKS,
  };
}

/** Umbrales públicos — una sola fuente de verdad */
export const PUBLIC_PROMISES = {
  minDonation: 20,
  certificateFrom: 150,
  founderFrom: 500,
  muralNote:
    "El mural conmemorativo en Reforma es meta de Fase 3, sujeto a permisos oficiales y alcance del fondo.",
  reportsNote:
    "Reportes trimestrales se publicarán al alcanzar $50,000 MXN recaudados.",
} as const;
