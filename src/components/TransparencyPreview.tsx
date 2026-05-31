import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TRANSPARENCY_BREAKDOWN } from "@/lib/constants";
import SectionBackdrop from "@/components/SectionBackdrop";
import { SECTION_WALLPAPERS } from "@/lib/section-images";

export default function TransparencyPreview() {
  return (
    <SectionBackdrop
      wallpaper={SECTION_WALLPAPERS.transparency}
      overlay="soft"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Cada peso,{" "}
              <span className="gradient-text">cuenta y se ve</span>
            </h2>
            <p className="text-on-wallpaper-soft mt-4 text-lg leading-relaxed">
              La confianza es la base de todo. Publicamos exactamente cómo se
              distribuye cada donación — sin letra chica, sin sorpresas.
            </p>
            <Link
              href="/transparencia"
              className="mt-6 inline-flex items-center gap-2 text-accent transition hover:text-accent-hover"
            >
              Ver desglose completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="surface-glass rounded-2xl border border-border/80 p-6 sm:p-8">
            <p className="text-sm font-medium text-muted">
              Por cada $100 MXN donados
            </p>
            <div className="mt-6 space-y-4">
              {TRANSPARENCY_BREAKDOWN.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="font-semibold">{item.percent}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-light/80">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.percent}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionBackdrop>
  );
}
