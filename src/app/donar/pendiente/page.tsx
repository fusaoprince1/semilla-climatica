import Link from "next/link";
import { Clock } from "lucide-react";

export default function PendientePage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6">
        <Clock className="mx-auto h-16 w-16 text-accent" />
        <h1 className="mt-6 font-display text-2xl font-bold">
          Pago pendiente
        </h1>
        <p className="mt-2 text-muted">
          Tu pago está en proceso (OXXO, SPEI u otro método). Te avisaremos
          cuando se confirme y tu nombre aparezca en el Muro Digital.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-border px-8 py-3 font-medium transition hover:border-primary/40"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
