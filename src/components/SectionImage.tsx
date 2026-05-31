import Image from "next/image";

type Overlay = "dark" | "dark-heavy" | "gradient-bottom" | "none";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  overlay?: Overlay;
  sizes?: string;
};

const overlayClasses: Record<Exclude<Overlay, "none">, string> = {
  dark: "bg-background/75",
  "dark-heavy": "bg-background/88",
  "gradient-bottom":
    "bg-gradient-to-t from-background via-background/80 to-background/30",
};

export default function SectionImage({
  src,
  alt,
  priority,
  className = "",
  imageClassName = "object-cover",
  overlay = "none",
  sizes = "100vw",
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
      />
      {overlay !== "none" && (
        <div
          className={`absolute inset-0 ${overlayClasses[overlay]}`}
          aria-hidden
        />
      )}
    </div>
  );
}
