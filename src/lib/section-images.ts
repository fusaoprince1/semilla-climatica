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
  extremeWeather: {
    src: "/coast-storm-options/07-costa-viento-palmeras.jpg",
    alt: "Costa tropical con viento, palmeras y mar en movimiento",
  },
  problem: {
    src: unsplash("photo-1559113386-9a07836a1b72"),
    alt: "Pastizal soleado al atardecer con ganado a lo lejos en Texas",
  },
  plan: {
    src: unsplash("photo-1509391366360-2e959784a276"),
    alt: "Campo de paneles solares al amanecer",
  },
  liveDonors: {
    src: unsplash("photo-1560493676-04071c5f467b"),
    alt: "Campo cultivado al atardecer",
  },
  transparency: {
    src: unsplash("photo-1441974231531-c6227db76b6e"),
    alt: "Sendero entre árboles verdes",
  },
  rewards: {
    src: unsplash("photo-1500382017468-9049fed747ef"),
    alt: "Amanecer sobre campo verde",
  },
  donate: {
    src: unsplash("photo-1472214103451-9374bd1c798e"),
    alt: "Colinas verdes al amanecer",
  },
} as const satisfies Record<string, SectionWallpaper>;
