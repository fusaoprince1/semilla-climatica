import type { Metadata } from "next";
import DonateForm from "@/components/DonateForm";

export const metadata: Metadata = {
  title: "Donar",
  description:
    "¿Cuánto gastaste hoy en snacks? $20 van al clima. Dona a Semilla Climática y recibe tu badge compartible.",
};

export default function DonarPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Planta tu semilla
          </h1>
          <p className="mt-4 text-lg text-muted">
            ¿Cuánto gastaste hoy en snacks?{" "}
            <span className="font-semibold text-accent">$20 van al clima.</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            Desde $20 recibes un badge compartible y tu nombre en el Muro
            Digital.
          </p>
        </div>

        <div className="mt-12">
          <DonateForm />
        </div>
      </div>
    </div>
  );
}
