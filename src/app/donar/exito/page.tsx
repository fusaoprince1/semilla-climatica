import { revalidateTag } from "next/cache";
import Link from "next/link";
import DonationBadge from "@/components/DonationBadge";
import { parseDonorReference } from "@/lib/site";

type Props = {
  searchParams: Promise<{
    ref?: string;
    external_reference?: string;
    status?: string;
    collection_status?: string;
  }>;
};

export default async function ExitoPage({ searchParams }: Props) {
  const params = await searchParams;
  const ref = params.ref || params.external_reference || null;
  const status = params.status || params.collection_status;
  const { name, amount } = parseDonorReference(ref);

  if (status === "approved" || !status) {
    revalidateTag("donors", "max");
  }

  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <DonationBadge name={name} amount={amount || 20} />
        <p className="mt-8 text-center text-xs text-muted">
          Tu nombre aparecerá en el Muro Digital en los próximos minutos.
        </p>
        <div className="mt-6 text-center">
          <Link
            href="/muro"
            className="mr-4 text-sm text-accent transition hover:text-accent-hover"
          >
            Ver el Muro Digital
          </Link>
          <Link
            href="/"
            className="text-sm text-muted transition hover:text-foreground"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
