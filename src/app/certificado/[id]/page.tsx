import Link from "next/link";
import DonationCertificate from "@/components/DonationCertificate";
import { getDonorById } from "@/lib/donors";
import { hasCertificate } from "@/lib/tiers";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CertificadoPage({ params }: Props) {
  const { id } = await params;
  const donor = await getDonorById(id);

  if (!donor) {
    return (
      <div className="pt-28 pb-20 text-center sm:pt-36">
        <p className="font-display text-xl font-bold">Certificado no encontrado</p>
        <Link href="/donar" className="mt-6 inline-block text-accent">
          Donar →
        </Link>
      </div>
    );
  }

  if (!hasCertificate(donor.amount)) {
    return (
      <div className="pt-28 pb-20 text-center sm:pt-36">
        <p className="font-display text-xl font-bold">
          Certificado disponible desde $150 MXN
        </p>
        <p className="mt-2 text-muted">
          Tu donación de ${donor.amount} MXN incluye badge y Muro Digital.
        </p>
        <Link
          href={`/badge/${donor.id}`}
          className="mt-6 inline-block text-accent"
        >
          Ver tu badge →
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <DonationCertificate
          name={donor.name}
          amount={donor.amount}
          date={donor.date}
          paymentId={donor.id}
        />
      </div>
    </div>
  );
}
