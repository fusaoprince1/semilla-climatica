import type { ReactNode } from "react";
import type { SectionWallpaper } from "@/lib/section-images";

export type BackdropOverlay = "hero" | "soft" | "medium" | "heavy";

const overlayClass: Record<BackdropOverlay, string> = {
  hero: "bg-gradient-to-b from-background/15 via-background/40 to-background/68",
  soft: "bg-background/48",
  medium: "bg-background/55",
  heavy: "bg-background/60",
};

type Props = {
  wallpaper: SectionWallpaper;
  overlay?: BackdropOverlay;
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function SectionBackdrop({
  wallpaper,
  overlay = "medium",
  id,
  className = "",
  children,
}: Props) {
  return (
    <section id={id} className={`relative isolate overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
        data-section-backdrop
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat saturate-[1.12] brightness-[1.08]"
          style={{ backgroundImage: `url("${wallpaper.src}")` }}
        />
        <div className={`absolute inset-0 ${overlayClass[overlay]}`} />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
