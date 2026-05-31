"use client";

import { useMemo, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { DONATION_TIERS } from "@/lib/constants";
import { getTierInfo } from "@/lib/perks";

type Frequency = "once" | "monthly";

export default function DonateForm() {
  const [selected, setSelected] = useState(20);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const amount = custom ? parseInt(custom, 10) || 0 : selected;
  const tierInfo = useMemo(
    () => (amount >= 20 ? getTierInfo(amount) : null),
    [amount]
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (amount < 20) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, name, city, frequency }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "No se pudo iniciar el pago.");
        setLoading(false);
        return;
      }

      window.location.href = data.initPoint;
    } catch {
      setError("Error de conexión. Revisa tu internet e intenta de nuevo.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
      <div className="flex rounded-full border border-border bg-surface p-1">
        {(["once", "monthly"] as Frequency[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            className={`flex-1 rounded-full py-2.5 text-sm font-medium transition ${
              frequency === f
                ? "bg-primary text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            {f === "once" ? "Única vez" : "Mensual"}
          </button>
        ))}
      </div>

      {frequency === "monthly" && (
        <p className="mt-3 rounded-lg border border-accent/20 bg-accent/5 px-4 py-2 text-center text-xs text-muted">
          Donación mensual disponible pronto. Por ahora elige &quot;Única
          vez&quot;.
        </p>
      )}

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {DONATION_TIERS.map((t) => (
          <button
            key={t.amount}
            type="button"
            onClick={() => {
              setSelected(t.amount);
              setCustom("");
            }}
            className={`relative rounded-xl border p-4 text-left transition ${
              selected === t.amount && !custom
                ? "border-accent bg-accent/10 ring-1 ring-accent/40"
                : "border-border bg-surface hover:border-primary/40"
            }`}
          >
            {t.popular && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-background">
                POPULAR
              </span>
            )}
            <p className="font-display text-xl font-bold">${t.amount}</p>
            <p className="mt-1 text-xs text-muted">{t.label}</p>
          </button>
        ))}
      </div>

      <div className="mt-4">
        <label htmlFor="custom" className="text-sm text-muted">
          Otro monto (mínimo $20)
        </label>
        <div className="relative mt-2">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
            $
          </span>
          <input
            id="custom"
            type="number"
            min={20}
            placeholder="20"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="w-full rounded-xl border border-border bg-surface py-3 pl-8 pr-4 text-foreground outline-none transition focus:border-accent/50"
          />
        </div>
      </div>

      {tierInfo && (
        <div className="mt-6 rounded-xl border border-border bg-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Recibes — {tierInfo.label}
          </p>
          <p className="mt-2 text-sm font-medium">{tierInfo.description}</p>
          <ul className="mt-3 space-y-2">
            {tierInfo.perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2 text-sm text-muted">
                <Check className="h-4 w-4 shrink-0 text-accent" />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <label htmlFor="name" className="text-sm text-muted">
          Tu nombre (para el Muro Digital)
        </label>
        <input
          id="name"
          type="text"
          required
          minLength={2}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="María G."
          className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent/50"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="city" className="text-sm text-muted">
          Tu ciudad (opcional)
        </label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="CDMX, Guadalajara, Monterrey..."
          className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent/50"
        />
      </div>

      {error && (
        <p className="mt-4 rounded-lg border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={amount < 20 || loading || frequency === "monthly"}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 text-base font-semibold text-background transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Conectando con Mercado Pago…
          </>
        ) : (
          <>
            Donar ${amount || "—"} MXN{" "}
            {frequency === "monthly" ? "al mes" : ""}
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-muted">
        Pagos seguros vía Mercado Pago · Badge y Muro al confirmarse el pago
      </p>
    </form>
  );
}
