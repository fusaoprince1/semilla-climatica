import Link from "next/link";
import DonationBadge from "@/components/DonationBadge";
import { getDonorById } from "@/lib/donors";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ welcome?: string }>;
};

export default async function BadgePage({ params, searchParams }: Props) {
  const { id } = await params;
  const { welcome } = await searchParams;
  const donor = await getDonorById(id);

  if (!donor) {
    return (
      <div className="pt-28 pb-20 text-center sm:pt-36">
        <p className="font-display text-xl font-bold">Badge no encontrado</p>
        <p className="mt-2 text-muted">
          Solo badges de donaciones verificadas existen aquí.
        </p>
        <Link href="/donar" className="mt-6 inline-block text-accent">
          Donar →
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <DonationBadge
          name={donor.name}
          amount={donor.amount}
          date={donor.date}
          paymentId={donor.id}
          showThankYou={welcome === "1"}
        />
        <p className="mt-6 text-center text-xs text-muted">
          Badge verificado con Mercado Pago · Solo donaciones confirmadas
        </p>
        <div className="mt-4 text-center">
          <Link href="/donar" className="text-sm text-accent hover:text-accent-hover">
            Planta tu semilla →
          </Link>
        </div>
      </div>
    </div>
  );
}
