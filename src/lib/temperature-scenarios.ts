export type TempScenarioStatus =
  | "past"
  | "current"
  | "near"
  | "likely"
  | "catastrophic";

export type TempScenario = {
  celsius: number;
  label: string;
  status: TempScenarioStatus;
  headline: string;
  impacts: string[];
  mexicoNote?: string;
  source: string;
};

export const TEMP_MIN = 0.8;
export const TEMP_MAX = 4.0;
export const CURRENT_GLOBAL_TEMP = 1.4;
export const CURRENT_MEXICO_TEMP = 1.9;

export const TEMPERATURE_SCENARIOS: TempScenario[] = [
  {
    celsius: 1.0,
    label: "+1.0°C",
    status: "past",
    headline: "Primeros signos irreversibles",
    impacts: [
      "Pérdida del 14% de los arrecifes de coral del mundo.",
      "Derretimiento acelerado del permafrost ártico liberando metano.",
      "Olas de calor 5 veces más frecuentes que en época preindustrial.",
      "5 de 9 puntos de inflexión climáticos ya dentro de su rango de activación.",
    ],
    source: "IPCC AR6 / Science (Armstrong McKay et al.)",
  },
  {
    celsius: 1.4,
    label: "+1.4°C",
    status: "current",
    headline: "Aquí estamos hoy — 2025",
    impacts: [
      "2025 fue el 3er año más caliente registrado; los 11 más calientes son desde 2015.",
      "Emisiones globales en máximo histórico: 54.6 GtCO₂e al año.",
      "90% del océano experimentó al menos una ola de calor marina en 2025.",
      "Ninguno de los 45 indicadores del Acuerdo de París va en camino para 2030.",
    ],
    mexicoNote:
      "México ya supera +1.9°C — 0.5°C más caliente que el promedio global. La tasa de calentamiento se duplicó desde 2012.",
    source: "WMO 2025 / ESSD Indicators of Global Climate Change",
  },
  {
    celsius: 1.5,
    label: "+1.5°C",
    status: "near",
    headline: "Límite del Acuerdo de París — cruzado en años individuales",
    impacts: [
      "99% de probabilidad de colapso de arrecifes tropicales.",
      "Si la ola de calor de 2003 se repite: 17,800 muertes en una semana en Europa.",
      "El cambio climático ya causa más del 50% de muertes por calor en olas extremas.",
      "6 puntos de inflexión climáticos se vuelven probables.",
    ],
    mexicoNote:
      "México podría alcanzar +2°C en 10–20 años, no en 2100. Impactos ya no son futuro: están en el horizonte de planeación.",
    source: "IPCC / Nature Climate Change 2025",
  },
  {
    celsius: 1.9,
    label: "+1.9°C",
    status: "current",
    headline: "México hoy — más caliente que el planeta",
    impacts: [
      "70% del territorio en sequía con condiciones extremas recurrentes.",
      "Récords de 52°C en CDMX; olas de calor cada vez más letales.",
      "Tasa de calentamiento de 5.5°C por siglo — casi el triple del promedio global.",
      "Mortalidad puede subir 15% tras eventos extremos, con efectos hasta 2 meses después.",
    ],
    mexicoNote:
      "Estimaciones del PINCC-UNAM: México está en el 35% de países con mayor calentamiento del planeta.",
    source: "PINCC-UNAM / CONAGUA / SMN",
  },
  {
    celsius: 2.0,
    label: "+2.0°C",
    status: "near",
    headline: "Umbral de daño severo e irreversible",
    impacts: [
      "Inicio probable del colapso de la capa de hielo de Groenlandia (+7 m de mar en siglos).",
      "Colapso de la Antártida occidental — subida acelerada del nivel del mar.",
      "Sequías e inundaciones extremas se multiplican por 5 en zonas vulnerables.",
      "Debilitamiento crítico de la corriente del Atlántico Norte (AMOC).",
    ],
    mexicoNote:
      "Proyección PINCC: +2.7°C para 2040 si no cambia la tendencia. Pérdidas acumuladas equivalentes a 6 veces el PIB mexicano actual.",
    source: "Science / El País México (Francisco Estrada)",
  },
  {
    celsius: 2.6,
    label: "+2.6°C",
    status: "likely",
    headline: "Colapso en cadena — el camino que llevamos",
    impacts: [
      "9+ puntos de inflexión activados; riesgo de colapso en cadena (efecto dominó).",
      "32 empresas de combustibles fósiles emiten la mitad del CO₂ del planeta — y expanden producción.",
      "BP, Shell y Chevron abandonaron promesas de net zero; invierten más en petróleo que en renovables.",
      "Zonas habitables del trópico empiezan a ser invivibles por calor extremo.",
    ],
    source: "Climate Action Tracker / Clean Creatives 2025",
  },
  {
    celsius: 3.0,
    label: "+3.0°C",
    status: "catastrophic",
    headline: "Escenario catastrófico — mortalidad masiva",
    impacts: [
      "Ola de calor tipo 2003 a +3°C: 32,000 muertes en una semana en Europa (comparable al pico de COVID).",
      "Colapso de sistemas agrícolas globales; cientos de millones en riesgo de inseguridad alimentaria.",
      "Desplazamiento masivo por calor insoportable, sequía y subida del mar.",
      "1 de cada 4 probabilidades de cruzar al menos un umbral global mayor irreversible.",
    ],
    source: "Nature Climate Change / Yale E360",
  },
  {
    celsius: 4.0,
    label: "+4.0°C",
    status: "catastrophic",
    headline: "Colapso sistémico — el escenario apocalíptico",
    impacts: [
      "Gran parte del trópico y subtropico inhabitable para actividad humana al aire libre.",
      "Conflicto global por agua, tierra y recursos; colapso de gobernanza en regiones vulnerables.",
      "Extinción masiva de especies; ecosistemas que no pueden adaptarse en décadas.",
      "Overshoot permanente: imposible volver a niveles seguros sin siglos de captura de carbono.",
    ],
    source: "IPCC escenarios RCP8.5 / Potsdam Institute",
  },
];

export function getNearestScenario(temp: number): TempScenario {
  return TEMPERATURE_SCENARIOS.reduce((closest, scenario) =>
    Math.abs(scenario.celsius - temp) < Math.abs(closest.celsius - temp)
      ? scenario
      : closest,
  );
}

export function getScenarioAt(celsius: number): TempScenario {
  return (
    TEMPERATURE_SCENARIOS.find((s) => s.celsius === celsius) ??
    getNearestScenario(celsius)
  );
}

export function tempToPercent(temp: number): number {
  return ((temp - TEMP_MIN) / (TEMP_MAX - TEMP_MIN)) * 100;
}

export function percentToTemp(percent: number): number {
  const clamped = Math.min(100, Math.max(0, percent));
  return TEMP_MIN + (clamped / 100) * (TEMP_MAX - TEMP_MIN);
}

export const STATUS_LABELS: Record<TempScenarioStatus, string> = {
  past: "Ya superado",
  current: "Estamos aquí",
  near: "Próximo umbral",
  likely: "Si no actuamos",
  catastrophic: "Escenario extremo",
};

export const STATUS_COLORS: Record<TempScenarioStatus, string> = {
  past: "#2E7D5A",
  current: "#F4A024",
  near: "#FF8F00",
  likely: "#E65100",
  catastrophic: "#E53935",
};
