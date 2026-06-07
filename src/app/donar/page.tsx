import type { Metadata } from "next";
import DonateForm from "@/components/DonateForm";
import MetaTrackEvent from "@/components/MetaTrackEvent";
import SectionBackdrop from "@/components/SectionBackdrop";
import { SECTION_WALLPAPERS } from "@/lib/section-images";

export const metadata: Metadata = {
  title: "Donar",
  description:
    "¿Cuánto gastaste hoy en snacks? $20 van al clima. Dona a Semilla Climática y recibe tu badge compartible.",
};

const HOOKS = [
  "¿Cuánto gastaste hoy en snacks? $20 van al clima.",
  "Menos que un Uber. Más impacto que ignorar el problema.",
  "El clima no espera a que tengas más dinero.",
  "Tu nombre en el Muro Digital — para siempre.",
];

export default function DonarPage() {
  return (
    <SectionBackdrop
      wallpaper={SECTION_WALLPAPERS.donate}
      overlay="heavy"
      className="min-h-svh"
    >
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pt-36">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-on-wallpaper font-display text-3xl font-bold sm:text-4xl">
            Planta tu semilla
          </h1>
          <p className="text-on-wallpaper mt-4 text-lg font-semibold sm:text-xl">
            {HOOKS[0]}
          </p>
          <p className="text-on-wallpaper-soft mt-2 text-sm sm:text-base">
            Desde $20 recibes un badge compartible y tu nombre en el Muro
            Digital automáticamente.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-2">
          {HOOKS.slice(1).map((hook) => (
            <span
              key={hook}
              className="trust-pill rounded-full px-3 py-1 text-xs text-on-wallpaper-soft"
            >
              {hook}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <MetaTrackEvent
            event="ViewContent"
            params={{
              content_name: "Donar",
              content_category: "donation",
            }}
          />
          <div className="card-glass mx-auto max-w-lg rounded-2xl border border-border/80 p-6 sm:p-8">
            <DonateForm />
          </div>
        </div>
      </div>
    </SectionBackdrop>
  );
}
