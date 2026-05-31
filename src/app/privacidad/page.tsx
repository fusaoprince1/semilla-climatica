import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
};

export default function PrivacidadPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-3xl font-bold">Aviso de privacidad</h1>
        <p className="mt-4 text-muted leading-relaxed">
          Semilla Climática respeta tu privacidad conforme a la LFPDPPP (México).
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold">Datos que recopilamos</h2>
        <ul className="mt-2 list-inside list-disc space-y-2 text-muted">
          <li>Nombre (para el Muro Digital y badge)</li>
          <li>Ciudad (opcional)</li>
          <li>Datos de pago — procesados únicamente por Mercado Pago, no los almacenamos</li>
        </ul>

        <h2 className="mt-8 font-display text-xl font-semibold">Para qué los usamos</h2>
        <ul className="mt-2 list-inside list-disc space-y-2 text-muted">
          <li>Mostrar tu nombre en el Muro Digital</li>
          <li>Generar tu badge y certificado verificados</li>
          <li>Reportes agregados de transparencia (sin datos personales identificables)</li>
        </ul>

        <h2 className="mt-8 font-display text-xl font-semibold">Compartir datos</h2>
        <p className="mt-2 text-muted leading-relaxed">
          No vendemos ni compartimos tus datos con terceros, excepto Mercado Pago
          para procesar el pago y proveedores técnicos del sitio (hosting).
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold">Tus derechos</h2>
        <p className="mt-2 text-muted leading-relaxed">
          Puedes solicitar acceso, rectificación o eliminación de tu nombre del
          muro escribiendo a contacto@semillaclimatica.com
        </p>

        <p className="mt-10 text-xs text-muted">Última actualización: mayo 2026</p>
      </div>
    </div>
  );
}
