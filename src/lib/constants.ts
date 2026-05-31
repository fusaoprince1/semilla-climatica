export const SITE = {
  name: "Semilla Climática",
  tagline: "Un fondo permanente para el clima en México",
  description:
    "Construimos un fondo climático permanente para comprar soluciones hoy, crear las de mañana, y exigir acción política real en México.",
  url: "https://semillaclimatica.com",
};

export const DONATION_TIERS = [
  {
    amount: 20,
    label: "Un antojo",
    description: "Badge compartible + tu nombre en el Muro Digital",
    perks: ["Badge compartible", "Nombre en el Muro Digital"],
    popular: true,
  },
  {
    amount: 50,
    label: "Una comida",
    description: "Badge + Muro Digital con reconocimiento visible",
    perks: ["Badge compartible", "Nombre en el Muro Digital"],
  },
  {
    amount: 150,
    label: "Un fin de semana",
    description: "Badge premium + certificado digital + destacado en el Muro",
    perks: [
      "Badge premium",
      "Certificado digital",
      "Destacado en el Muro Digital",
    ],
  },
  {
    amount: 500,
    label: "Miembro fundador",
    description: "Badge fundador + certificado + prioridad mural CDMX (Fase 3)",
    perks: [
      "Badge fundador",
      "Certificado digital",
      "Prioridad mural Reforma (Fase 3)",
    ],
  },
];

export const TRANSPARENCY_BREAKDOWN = [
  { label: "Fondo de inversión", percent: 40, color: "#0D4F3C" },
  { label: "Acciones climáticas", percent: 30, color: "#2E7D5A" },
  { label: "Operación y equipo", percent: 20, color: "#F4A024" },
  { label: "Reserva de emergencia", percent: 10, color: "#5C6BC0" },
];

export const PROBLEM_STATS = [
  {
    value: "+2°C",
    label: "Proyección para 2050",
    detail: "En zonas agrícolas clave de México",
    source: "IPCC / INECC",
  },
  {
    value: "70%",
    label: "Territorio en sequía",
    detail: "Condiciones extremas recurrentes",
    source: "CONAGUA",
  },
  {
    value: "52°C",
    label: "Récords de calor",
    detail: "Olas de calor cada vez más letales en CDMX",
    source: "SMN",
  },
];

export const PLAN_PHASES = [
  {
    phase: 1,
    title: "Comprar tecnología",
    description:
      "Adquirimos y desplegamos soluciones existentes: paneles solares comunitarios, captura de CO₂, reforestación y tech de eficiencia energética.",
    icon: "zap",
  },
  {
    phase: 2,
    title: "Crear tecnología",
    description:
      "Con fondos suficientes, desarrollamos nuestra propia I+D climática adaptada a las realidades de México.",
    icon: "flask",
  },
  {
    phase: 3,
    title: "Influir políticamente",
    description:
      "Construimos voz en México exclusivamente en cuestiones climáticas: propuestas, advocacy y el mural conmemorativo en Reforma.",
    icon: "landmark",
  },
];

export const FUND_GOAL = {
  target: 500000,
  phase: 1,
};
