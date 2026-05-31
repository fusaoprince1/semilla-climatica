import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PUBLIC_PROMISES } from "@/lib/perks";
import { TRANSPARENCY_BREAKDOWN } from "@/lib/constants";
import { getFundStats } from "@/lib/donors";
import FundProgress from "@/components/FundProgress";

export const metadata: Metadata = {
  title: "Transparencia",
  description:
    "Cada peso cuenta y se ve. Conoce exactamente cómo Semilla Climática distribuye las donaciones.",
};

export default async function TransparenciaPage() {
  const stats = await getFundStats();

  return (
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Transparencia total
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            La confianza es nuestra moneda. Publicamos cómo se usa cada peso,
            con reportes trimestrales y metas públicas.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">
              Distribución por donación
            </h2>
            <p className="mt-2 text-sm text-muted">
              Por cada $100 MXN donados
            </p>
            <div className="mt-6 space-y-5">
              {TRANSPARENCY_BREAKDOWN.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{item.label}</span>
                    <span className="font-display font-bold">{item.percent}%</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-surface-light">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${item.percent}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-muted">
                    ${item.percent} MXN de cada $100
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <FundProgress stats={stats} />

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">
                Qué significa cada partida
              </h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-accent">Fondo de inversión (40%)</dt>
                  <dd className="mt-1 text-muted">
                    Capital que crece con el tiempo para generar ingresos
                    permanentes y financiar acciones a largo plazo.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-accent">Acciones climáticas (30%)</dt>
                  <dd className="mt-1 text-muted">
                    Compra e implementación de tecnología existente: solar,
                    reforestación, captura de CO₂.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-accent">Operación y equipo (20%)</dt>
                  <dd className="mt-1 text-muted">
                    Salarios, infraestructura web, legal y operación del
                    proyecto — de forma transparente.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-accent">Reserva de emergencia (10%)</dt>
                  <dd className="mt-1 text-muted">
                    Colchón para imprevistos y oportunidades climáticas urgentes.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold">
            Reportes trimestrales
          </h2>
          <p className="mt-2 text-muted">
            Publicaremos reportes detallados cada trimestre con ingresos,
            gastos, acciones realizadas y balance del fondo.{" "}
            {PUBLIC_PROMISES.reportsNote}
          </p>
          <p className="mt-4 text-sm text-muted italic">
            Próximo reporte: pendiente de meta inicial
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/donar"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-background transition hover:bg-accent-hover"
          >
            Donar ahora
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
