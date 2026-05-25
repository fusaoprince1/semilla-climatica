import Link from "next/link";
import { XCircle } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6">
        <XCircle className="mx-auto h-16 w-16 text-danger" />
        <h1 className="mt-6 font-display text-2xl font-bold">
          El pago no se completó
        </h1>
        <p className="mt-2 text-muted">
          No se cobró nada. Puedes intentar de nuevo cuando quieras.
        </p>
        <Link
          href="/donar"
          className="mt-8 inline-flex rounded-full bg-accent px-8 py-3 font-semibold text-background transition hover:bg-accent-hover"
        >
          Intentar de nuevo
        </Link>
      </div>
    </div>
  );
}
