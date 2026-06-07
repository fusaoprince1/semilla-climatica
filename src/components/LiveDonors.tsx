import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDonors } from "@/lib/donors";
import { buildCarouselSlots } from "@/lib/display-donors";
import { SECTION_WALLPAPERS } from "@/lib/section-images";
import DonorSlotGrid from "@/components/DonorSlotGrid";
import SectionBackdrop from "@/components/SectionBackdrop";

export default async function LiveDonors() {
  const donors = await getDonors();
  const slots = buildCarouselSlots(donors);

  return (
    <SectionBackdrop
      wallpaper={SECTION_WALLPAPERS.liveDonors}
      overlay="medium"
      className="border-y border-border/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-on-wallpaper font-display text-2xl font-bold sm:text-3xl">
              Ya sembraron
            </h2>
            <p className="text-on-wallpaper-soft mt-2 text-sm font-medium sm:text-base">
              Toca un nombre para ver su badge · Desliza para explorar
            </p>
          </div>
          <Link
            href="/muro"
            className="inline-flex items-center gap-1 text-sm text-accent transition hover:text-accent-hover"
          >
            Ver muro completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <DonorSlotGrid slots={slots} horizontal />
      </div>
    </SectionBackdrop>
  );
}
