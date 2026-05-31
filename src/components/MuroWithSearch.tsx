"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Calendar, Leaf } from "lucide-react";
import type { Donor } from "@/lib/donors";
import { buildMuroBrowseSlots, filterDonors } from "@/lib/display-donors";
import { MURO_VISIBLE_SLOTS } from "@/lib/stats-policy";
import DonorSlotGrid from "@/components/DonorSlotGrid";

export default function MuroWithSearch({ donors }: { donors: Donor[] }) {
  const [query, setQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const isSearching = query.trim().length > 0 || dateFilter.length > 0;

  const visibleDonors: Donor[] = useMemo(() => {
    if (isSearching) {
      return filterDonors(donors, query, dateFilter);
    }
    return buildMuroBrowseSlots(donors);
  }, [donors, query, dateFilter, isSearching]);

  return (
    <>
      <div className="mt-8 rounded-xl border border-border bg-surface p-4 sm:p-5">
        <p className="text-sm text-muted leading-relaxed">
          Siempre los {MURO_VISIBLE_SLOTS} donantes más recientes. Si no ves tu
          nombre, búscalo por{" "}
          <span className="text-foreground">nombre</span> o{" "}
          <span className="text-foreground">fecha</span> — aunque ya no esté en
          esta lista.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nombre..."
              className="w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-foreground outline-none transition focus:border-accent/50"
            />
          </div>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-foreground outline-none transition focus:border-accent/50"
            />
          </div>
        </div>

        {isSearching && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setDateFilter("");
            }}
            className="mt-3 text-xs text-accent hover:text-accent-hover"
          >
            Limpiar búsqueda
          </button>
        )}
      </div>

      {isSearching && visibleDonors.length === 0 ? (
        <p className="mt-8 text-center text-muted">
          No encontramos coincidencias. Verifica nombre y fecha, o{" "}
          <Link href="/donar" className="text-accent">
            dona para aparecer aquí
          </Link>
          .
        </p>
      ) : !isSearching && visibleDonors.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
          <Leaf className="mx-auto h-10 w-10 text-primary-light" />
          <p className="mt-4 font-display text-lg font-semibold">
            Aún no hay donantes en el muro
          </p>
          <Link
            href="/donar"
            className="mt-6 inline-flex rounded-full bg-accent px-8 py-3 font-semibold text-background"
          >
            Sé el primero
          </Link>
        </div>
      ) : (
        <div
          className={
            isSearching
              ? "mt-8"
              : "mt-8 max-h-[720px] overflow-y-auto rounded-xl border border-border/50 p-2 pr-3"
          }
        >
          <DonorSlotGrid slots={visibleDonors} />
          {!isSearching && visibleDonors.length > 4 && (
            <p className="pb-2 pt-4 text-center text-xs text-muted">
              Desplázate para ver los {Math.min(visibleDonors.length, MURO_VISIBLE_SLOTS)}{" "}
              más recientes ↓
            </p>
          )}
        </div>
      )}
    </>
  );
}
