import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDonors } from "@/lib/donors";
import DonorGrid from "@/components/DonorGrid";

export default async function LiveDonors() {
  const donors = await getDonors();
  const latest = donors.slice(0, 4);

  if (latest.length === 0) return null;

  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Semilleros recientes
            </h2>
            <p className="mt-2 text-muted">
              Personas reales que ya plantaron su semilla.
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
        <DonorGrid donors={latest} />
      </div>
    </section>
  );
}
