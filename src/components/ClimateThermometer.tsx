"use client";

import { useCallback, useRef, useState } from "react";
import { AlertTriangle, MapPin, Thermometer } from "lucide-react";
import SectionBackdrop from "@/components/SectionBackdrop";
import { SECTION_WALLPAPERS } from "@/lib/section-images";
import {
  CURRENT_GLOBAL_TEMP,
  CURRENT_MEXICO_TEMP,
  STATUS_COLORS,
  STATUS_LABELS,
  TEMPERATURE_SCENARIOS,
  TEMP_MAX,
  TEMP_MIN,
  getNearestScenario,
  percentToTemp,
  tempToPercent,
} from "@/lib/temperature-scenarios";

function formatTemp(value: number): string {
  return `+${value.toFixed(1)}°C`;
}

export default function ClimateThermometer() {
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [selectedTemp, setSelectedTemp] = useState(CURRENT_GLOBAL_TEMP);

  const scenario = getNearestScenario(selectedTemp);
  const fillPercent = tempToPercent(selectedTemp);
  const statusColor = STATUS_COLORS[scenario.status];

  const updateFromPointer = useCallback((clientY: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const relativeY = clientY - rect.top;
    const percent = 100 - (relativeY / rect.height) * 100;
    const rawTemp = percentToTemp(percent);
    const snapped = getNearestScenario(rawTemp);
    setSelectedTemp(snapped.celsius);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updateFromPointer(e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromPointer(e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <SectionBackdrop
      id="termometro"
      wallpaper={SECTION_WALLPAPERS.thermometer}
      overlay="heavy"
      brightImage="subtle"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-danger/40 bg-danger/10 px-4 py-1.5 text-sm font-medium text-danger">
            <AlertTriangle className="h-4 w-4" />
            Urgencia climática
          </div>
          <h2 className="text-on-wallpaper font-display text-3xl font-bold sm:text-4xl">
            ¿Qué tan caliente está la Tierra?
          </h2>
          <p className="text-on-wallpaper mx-auto mt-4 max-w-xl text-lg font-medium leading-relaxed sm:text-xl">
            Arrastra el termómetro o toca una temperatura. Cada grado cambia
            todo — y México se calienta más rápido que el planeta.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-14">
          {/* Termómetro interactivo */}
          <div className="mx-auto flex w-full max-w-xs flex-col items-center lg:mx-0">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-on-wallpaper-soft">
              <Thermometer className="h-4 w-4 text-accent" />
              Sobre niveles preindustriales (1850)
            </div>

            <div className="relative flex items-stretch gap-4">
              {/* Escala de grados */}
              <div className="relative flex h-[420px] flex-col justify-between py-1 text-xs font-medium text-muted">
                {[4.0, 3.0, 2.6, 2.0, 1.9, 1.5, 1.4, 1.0, 0.8].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTemp(t)}
                    className={`text-right transition hover:text-foreground ${
                      Math.abs(selectedTemp - t) < 0.05
                        ? "font-bold text-accent"
                        : t === CURRENT_GLOBAL_TEMP || t === CURRENT_MEXICO_TEMP
                          ? "text-accent/80"
                          : ""
                    }`}
                    aria-label={`Ver escenario ${formatTemp(t)}`}
                  >
                    {formatTemp(t)}
                  </button>
                ))}
              </div>

              {/* Tubo del termómetro */}
              <div
                ref={trackRef}
                className="relative h-[420px] w-14 cursor-pointer touch-none select-none"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                role="slider"
                aria-valuemin={TEMP_MIN}
                aria-valuemax={TEMP_MAX}
                aria-valuenow={selectedTemp}
                aria-label="Termómetro de calentamiento global"
              >
                {/* Tubo exterior */}
                <div className="absolute inset-x-2 top-0 bottom-16 rounded-full border-2 border-border/80 bg-background/60 backdrop-blur-sm">
                  {/* Gradiente de fondo */}
                  <div
                    className="absolute inset-x-1 top-1 bottom-1 rounded-full opacity-30"
                    style={{
                      background:
                        "linear-gradient(to top, #2E7D5A 0%, #F4A024 45%, #E65100 70%, #E53935 100%)",
                    }}
                  />
                  {/* Nivel de mercurio */}
                  <div
                    className="absolute inset-x-1 bottom-1 rounded-full transition-[height] duration-200 ease-out"
                    style={{
                      height: `${fillPercent}%`,
                      background:
                        selectedTemp >= 3
                          ? "linear-gradient(to top, #E53935, #FF1744)"
                          : selectedTemp >= 2
                            ? "linear-gradient(to top, #E65100, #E53935)"
                            : selectedTemp >= 1.5
                              ? "linear-gradient(to top, #F4A024, #E65100)"
                              : "linear-gradient(to top, #2E7D5A, #F4A024)",
                      boxShadow: `0 0 20px ${statusColor}66`,
                    }}
                  />
                </div>

                {/* Bulbo */}
                <div
                  className="absolute inset-x-0 bottom-0 mx-auto h-16 w-16 rounded-full border-2 border-border/80 transition-colors duration-200"
                  style={{
                    background: statusColor,
                    boxShadow: `0 0 24px ${statusColor}88`,
                  }}
                />

                {/* Marcador posición actual global */}
                <div
                  className="pointer-events-none absolute right-0 left-0 flex items-center"
                  style={{ bottom: `calc(${tempToPercent(CURRENT_GLOBAL_TEMP)}% + 64px)` }}
                >
                  <div className="h-0.5 flex-1 bg-accent/60" />
                  <span className="ml-2 whitespace-nowrap rounded bg-accent/20 px-1.5 py-0.5 text-[10px] font-bold text-accent">
                    HOY
                  </span>
                </div>

                {/* Handle arrastrable */}
                <div
                  className="pointer-events-none absolute right-[-6px] left-[-6px] flex items-center transition-[bottom] duration-200 ease-out"
                  style={{ bottom: `calc(${fillPercent}% + 56px)` }}
                >
                  <div
                    className="h-5 w-full rounded-full border-2 border-white/90 shadow-lg"
                    style={{ background: statusColor }}
                  />
                </div>

                {/* Marcadores clicables en el tubo */}
                {TEMPERATURE_SCENARIOS.map((s) => (
                  <button
                    key={s.celsius}
                    type="button"
                    className="absolute right-[-28px] z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface text-[9px] font-bold transition hover:scale-110 hover:border-accent"
                    style={{
                      bottom: `calc(${tempToPercent(s.celsius)}% + 58px)`,
                      color:
                        Math.abs(selectedTemp - s.celsius) < 0.05
                          ? statusColor
                          : undefined,
                      borderColor:
                        Math.abs(selectedTemp - s.celsius) < 0.05
                          ? statusColor
                          : undefined,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTemp(s.celsius);
                    }}
                    aria-label={s.label}
                    title={s.label}
                  >
                    •
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-muted">
              Arrastra · Toca la escala · O pulsa los puntos del termómetro
            </p>
          </div>

          {/* Panel de detalle */}
          <div
            className="card-glow surface-glass rounded-2xl border p-6 transition sm:p-8"
            style={{ borderColor: `${statusColor}55` }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="font-display text-5xl font-bold sm:text-6xl"
                style={{ color: statusColor }}
              >
                {formatTemp(scenario.celsius)}
              </span>
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                style={{
                  background: `${statusColor}22`,
                  color: statusColor,
                }}
              >
                {STATUS_LABELS[scenario.status]}
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
              {scenario.headline}
            </h3>

            {scenario.celsius === CURRENT_GLOBAL_TEMP && (
              <div className="mt-4 flex items-start gap-2 rounded-xl border border-accent/30 bg-accent/10 p-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-foreground">
                  <strong className="text-accent">México está en +{CURRENT_MEXICO_TEMP}°C</strong>{" "}
                  — 0.5°C más caliente que el promedio global. Toca +1.9°C en el
                  termómetro para ver qué significa aquí.
                </p>
              </div>
            )}

            <ul className="mt-6 space-y-3">
              {scenario.impacts.map((impact) => (
                <li
                  key={impact}
                  className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: statusColor }}
                  />
                  {impact}
                </li>
              ))}
            </ul>

            {scenario.mexicoNote && (
              <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-light">
                  En México
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {scenario.mexicoNote}
                </p>
              </div>
            )}

            <p className="mt-6 text-xs text-muted/70">
              Fuente: {scenario.source}
            </p>

            {/* Chips de acceso rápido */}
            <div className="mt-6 flex flex-wrap gap-2">
              {TEMPERATURE_SCENARIOS.map((s) => (
                <button
                  key={s.celsius}
                  type="button"
                  onClick={() => setSelectedTemp(s.celsius)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    Math.abs(selectedTemp - s.celsius) < 0.05
                      ? "border-accent bg-accent/20 text-accent"
                      : "border-border text-muted hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {s.label}
                  {s.celsius === CURRENT_GLOBAL_TEMP && " · Hoy"}
                  {s.celsius === CURRENT_MEXICO_TEMP && " · MX"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-on-wallpaper-soft mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed">
          Las corporaciones de combustibles fósiles rompieron sus promesas de
          net zero. Los gobiernos incumplen París.{" "}
          <strong className="text-accent">
            Cada grado que sube el termómetro cuesta vidas.
          </strong>{" "}
          Por eso Semilla Climática.
        </p>
      </div>
    </SectionBackdrop>
  );
}
