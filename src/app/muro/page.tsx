import type { Metadata } from "next";
import Link from "next/link";
import { getDonors } from "@/lib/donors";
import MuroWithSearch from "@/components/MuroWithSearch";
import SectionBackdrop from "@/components/SectionBackdrop";
import { SECTION_WALLPAPERS } from "@/lib/section-images";

export const metadata: Metadata = {
  title: "Muro Digital",
  description:
    "Cada donante que planta su semilla queda registrado. Busca tu nombre y comparte tu badge.",
};

export default async function MuroPage() {
  const donors = await getDonors();

  return (
    <SectionBackdrop
      wallpaper={SECTION_WALLPAPERS.liveDonors}
      overlay="medium"
      className="min-h-svh"
    >
      <div className="pt-28 pb-20 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-on-wallpaper font-display text-3xl font-bold sm:text-4xl">
              Muro Digital
            </h1>
            <p className="text-on-wallpaper-soft mt-4 leading-relaxed">
              Cada persona que dona desde $20 queda registrada aquí. Toca tu nombre
              para ver, imprimir o compartir tu badge.
            </p>
          </div>

          <div className="card-glass mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4 text-center text-sm text-on-wallpaper-soft">
            Toca un nombre para ver, imprimir o compartir su badge verificado.
          </div>

          <MuroWithSearch donors={donors} />

          <div className="card-glass mt-14 rounded-2xl border border-border/80 p-8 text-center">
            <h2 className="text-on-wallpaper font-display text-xl font-semibold">
              ¿Quieres ver tu nombre aquí?
            </h2>
            <p className="text-on-wallpaper-soft mt-2">
              Desde $20 MXN — badge compartible incluido.
            </p>
            <Link
              href="/donar"
              className="mt-6 inline-flex rounded-full bg-accent px-8 py-3 font-semibold text-background transition hover:bg-accent-hover"
            >
              Donar ahora
            </Link>
          </div>
        </div>
      </div>
    </SectionBackdrop>
  );
}
