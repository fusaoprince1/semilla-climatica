function unsplash(photoId: string, width = 1200) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

export type SectionImage = {
  src: string;
  alt: string;
};

export const SECTION_IMAGES = {
  hero: {
    src: unsplash("photo-1559827260-dc66d52bef19", 1600),
    alt: "Paisaje montañoso en México con nubes al amanecer",
  },
  problem: {
    src: unsplash("photo-1416879595882-3373a048ccbb", 1920),
    alt: "Suelo seco y agrietado por sequía extrema",
  },
  planPhase1: {
    src: unsplash("photo-1509391366360-2e959784a276", 800),
    alt: "Paneles solares instalados bajo el sol",
  },
  planPhase2: {
    src: unsplash("photo-1582719478250-c89cae4dc85b", 800),
    alt: "Investigación científica en laboratorio climático",
  },
  planPhase3: {
    src: unsplash("photo-1523906834654-6a921f15d7be", 800),
    alt: "Vista aérea de la Ciudad de México",
  },
  liveDonors: {
    src: unsplash("photo-1464226184884-fa280b87aa32", 1600),
    alt: "Manos sosteniendo un árbol joven recién plantado",
  },
} as const satisfies Record<string, SectionImage>;

export const PHASE_IMAGES: Record<
  1 | 2 | 3,
  (typeof SECTION_IMAGES)[keyof typeof SECTION_IMAGES]
> = {
  1: SECTION_IMAGES.planPhase1,
  2: SECTION_IMAGES.planPhase2,
  3: SECTION_IMAGES.planPhase3,
};
