function unsplash(photoId: string, width = 1920) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

export type SectionWallpaper = {
  src: string;
  alt: string;
};

/** Fotos de fondo por sección — Unsplash, uso libre en web */
export const SECTION_WALLPAPERS = {
  hero: {
    src: unsplash("photo-1559827260-dc66d52bef19"),
    alt: "Paisaje montañoso en México",
  },
  problem: {
    src: unsplash("photo-1416879595882-3373a048ccbb"),
    alt: "Suelo seco y agrietado por sequía",
  },
  plan: {
    src: unsplash("photo-1509391366360-2e959784a276"),
    alt: "Campo de paneles solares al amanecer",
  },
  liveDonors: {
    src: unsplash("photo-1464226184884-fa280b87aa32"),
    alt: "Manos sosteniendo un árbol joven",
  },
  transparency: {
    src: unsplash("photo-1441974231531-c6227db76b6e"),
    alt: "Sendero entre árboles verdes",
  },
  rewards: {
    src: unsplash("photo-1542601906990-985af0ad0c0d"),
    alt: "Bosque en regeneración",
  },
  donate: {
    src: unsplash("photo-1518531933031-229bbbd7573a"),
    alt: "Plántula verde brotando en la tierra",
  },
} as const satisfies Record<string, SectionWallpaper>;
