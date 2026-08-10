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
    headline: "Primeros daños irreversibles — ya lo superamos",
    impacts: [
      "Desaparece el 14% de los arrecifes de coral del planeta; blanqueamiento masivo en Australia, el Caribe y el Pacífico.",
      "Olas de calor 5 veces más frecuentes que antes de la industrialización; más de 489,000 muertes por calor al año (2000–2019).",
      "Derretimiento del permafrost ártico liberando metano — un gas 80 veces más potente que el CO₂.",
      "Tormentas e inundaciones más intensas: una atmósfera más caliente retiene más humedad y la suelta de golpe.",
      "5 de 9 puntos de inflexión climáticos ya dentro de su rango de activación.",
    ],
    source: "IPCC AR6 / WMO / Science (Armstrong McKay et al.)",
  },
  {
    celsius: 1.4,
    label: "+1.4°C",
    status: "current",
    headline: "Aquí estamos hoy — 2025",
    impacts: [
      "2025: el 3er año más caliente registrado; los 11 más calientes son desde 2015.",
      "El 90% del océano sufrió al menos una ola de calor marina; millones de peces muertos en costas de todo el mundo.",
      "Incendios forestales récord en Canadá, Grecia y California; humo tóxico en ciudades enteras durante semanas.",
      "Huracanes que se intensifican en horas (Otis, Milton): de tormenta tropical a categoría 5 en menos de 24 horas.",
      "Ninguno de los 45 indicadores del Acuerdo de París va en camino para 2030 — las emisiones siguen subiendo.",
    ],
    mexicoNote:
      "México ya supera +1.9°C — 0.5°C más caliente que el promedio global. La tasa de calentamiento se duplicó desde 2012.",
    source: "WMO 2025 / ESSD Indicators of Global Climate Change",
  },
  {
    celsius: 1.5,
    label: "+1.5°C",
    status: "near",
    headline: "Límite de París — lo cruzamos año tras año",
    impacts: [
      "99% de probabilidad de colapso total de arrecifes tropicales; desaparecen en una década.",
      "Si la ola de calor de 2003 se repite: 17,800 muertes en una sola semana en Europa.",
      "El cambio climático ya causa más del 50% de muertes por calor en olas extremas.",
      "Sequías agrícolas un 40% más frecuentes; riesgo de hambruna en África subsahariana y Asia central.",
      "6 puntos de inflexión se vuelven probables: corales, permafrost, hielo ártico, bosques amazónicos.",
    ],
    mexicoNote:
      "México podría alcanzar +2°C en 10–20 años. Los impactos ya no son futuro: están ocurriendo ahora.",
    source: "IPCC SR1.5 / Nature Climate Change 2025",
  },
  {
    celsius: 1.9,
    label: "+1.9°C",
    status: "current",
    headline: "México hoy — más caliente que el planeta",
    impacts: [
      "70% del territorio mexicano en sequía severa; ríos secos y presas al mínimo histórico.",
      "Récords de 52°C en CDMX; el calor mata — mortalidad sube 15% tras eventos extremos.",
      "Lluvias torrenciales e inundaciones en la misma región que sufre sequía: el patrón se repite cada año.",
      "Huracanes más destructivos en costas del Pacífico y Golfo; comunidades enteras arrasadas en horas.",
      "Enfermedades transmitidas por mosquitos (dengue, zika) se expanden a zonas antes templadas.",
    ],
    mexicoNote:
      "PINCC-UNAM: México está entre el 35% de países con mayor calentamiento del planeta.",
    source: "PINCC-UNAM / CONAGUA / SMN",
  },
  {
    celsius: 2.0,
    label: "+2.0°C",
    status: "near",
    headline: "Daño severo e irreversible — probable entre 2040 y 2050",
    impacts: [
      "Desaparecen el 99% de los arrecifes de coral; mueren ecosistemas marinos que sustentan a 500 millones de personas.",
      "Inicia el colapso de la capa de hielo de Groenlandia: el nivel del mar subirá metros en los próximos siglos.",
      "Sequías e inundaciones extremas se multiplican por 5; ciudades costeras inundadas de forma permanente.",
      "Huracanes categoría 4–5 se duplican; tormentas que antes eran raras ocurren cada temporada.",
      "Muertes por calor 1.4 a 2 veces mayores que a +1.5°C; olas de calor mortales en India, África y Europa.",
      "La corriente del Atlántico Norte (AMOC) se debilita — el clima de Europa y América del Norte se altera.",
    ],
    mexicoNote:
      "PINCC-UNAM: si no cambia la tendencia, México podría llegar a +2.7°C para 2040 — antes que el resto del planeta.",
    source: "IPCC AR6 / Science / npj Climate and Atmospheric Science",
  },
  {
    celsius: 2.6,
    label: "+2.6°C",
    status: "likely",
    headline: "Colapso en cadena — camino actual hacia 2050",
    impacts: [
      "32 empresas de combustibles fósiles producen el 50% del CO₂ del planeta — y siguen expandiendo extracción.",
      "BP, Shell y Chevron abandonaron promesas de net zero; invierten más en petróleo que en renovables.",
      "EE.UU. salió del Acuerdo de París; Arabia Saudita, Emiratos e India bloquearon la salida de fósiles en COP30.",
      "9+ puntos de inflexión activados: efecto dominó entre hielos, océanos, bosques y corrientes marinas.",
      "Zonas del trópico empiezan a ser invivibles: temperatura corporal humana no puede regularse al aire libre.",
      "Incendios, sequías e inundaciones catastróficas se convierten en la norma anual, no en excepción.",
    ],
    source: "Climate Action Tracker / Clean Creatives / The Guardian",
  },
  {
    celsius: 3.0,
    label: "+3.0°C",
    status: "catastrophic",
    headline: "Catástrofe global — posible hacia 2060",
    impacts: [
      "Ola de calor tipo 2003 a +3°C: 32,000 muertes en una semana en Europa — comparable al pico de COVID-19.",
      "92% de probabilidad de ola de calor extrema en cualquier región del planeta en un año dado.",
      "Colapso de cosechas de maíz, arroz y trigo; cientos de millones enfrentan inseguridad alimentaria severa.",
      "Desplazamiento masivo: calor insoportable, sequías permanentes y ciudades costeras bajo el agua.",
      "Temperaturas de bulbo húmedo superan lo que el cuerpo humano soporta en Golfo Pérsico, India y Centroamérica.",
      "1 de cada 4 probabilidades de cruzar un umbral global mayor irreversible (AMOC, Amazonía, Groenlandia).",
    ],
    source: "Nature Climate Change / Climatic Change / Yale E360",
  },
  {
    celsius: 4.0,
    label: "+4.0°C",
    status: "catastrophic",
    headline: "Colapso apocalíptico — +4°C basta para devastación total",
    impacts: [
      "No hace falta llegar a +6°C: a +4°C gran parte del trópico y subtropico es inhabitable al aire libre.",
      "61% de probabilidad de sequía agrícola extrema en cualquier año; hambruna generalizada en continentes enteros.",
      "Extinción masiva de especies: ecosistemas enteros colapsan más rápido de lo que pueden adaptarse.",
      "Conflicto global por agua potable y tierra habitable; gobiernos colapsan en regiones ecuatoriales y costeras.",
      "Overshoot permanente: imposible volver a niveles seguros en siglos, aunque las emisiones se detengan.",
      "En el peor escenario sin cambios: alcanzable hacia 2080. Cada década de inacción lo acerca más.",
    ],
    source: "IPCC AR6 / Potsdam Institute / Climatic Change",
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
