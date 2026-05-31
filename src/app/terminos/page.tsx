import type { Metadata } from "next";
import Link from "next/link";
import { PUBLIC_PROMISES } from "@/lib/perks";

export const metadata: Metadata = {
  title: "Términos de donación",
};

export default function TerminosPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 prose prose-invert">
        <h1 className="font-display text-3xl font-bold">Términos de donación</h1>
        <p className="mt-4 text-muted leading-relaxed">
          Al donar a Semilla Climática aceptas estos términos.
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold">Qué es una donación</h2>
        <p className="mt-2 text-muted leading-relaxed">
          Una contribución voluntaria al fondo climático Semilla Climática. No
          es la compra de un producto ni una inversión con rendimiento
          garantizado.
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold">Qué recibes al donar</h2>
        <ul className="mt-2 list-inside list-disc space-y-2 text-muted">
          <li>
            <strong>Desde ${PUBLIC_PROMISES.minDonation} MXN:</strong> badge
            digital verificado + nombre en el Muro Digital.
          </li>
          <li>
            <strong>Desde ${PUBLIC_PROMISES.certificateFrom} MXN:</strong> todo lo
            anterior + certificado digital + destacado Premium en el Muro.
          </li>
          <li>
            <strong>Desde ${PUBLIC_PROMISES.founderFrom} MXN:</strong> todo lo
            anterior + badge fundador + prioridad para mural conmemorativo en
            meta Fase 3.
          </li>
        </ul>
        <p className="mt-4 text-sm text-muted">{PUBLIC_PROMISES.muralNote}</p>

        <h2 className="mt-8 font-display text-xl font-semibold">Uso de fondos</h2>
        <p className="mt-2 text-muted leading-relaxed">
          Los fondos se distribuyen según lo publicado en la página de{" "}
          <Link href="/transparencia" className="text-accent">
            Transparencia
          </Link>
          . {PUBLIC_PROMISES.reportsNote}
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold">Reembolsos</h2>
        <p className="mt-2 text-muted leading-relaxed">
          Las donaciones no son reembolsables una vez procesadas, salvo error
          técnico demostrable. Contacto: contacto@semillaclimatica.com
        </p>

        <p className="mt-10 text-xs text-muted">
          Última actualización: mayo 2026
        </p>
      </div>
    </div>
  );
}
