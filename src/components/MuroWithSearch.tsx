"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Donor } from "@/lib/donors";
import DonorGrid from "@/components/DonorGrid";

export default function MuroWithSearch({ donors }: { donors: Donor[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return donors;
    return donors.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.city?.toLowerCase().includes(q)
    );
  }, [donors, query]);

  return (
    <>
      {donors.length > 6 && (
        <div className="relative mt-8">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca tu nombre..."
            className="w-full rounded-xl border border-border bg-surface py-3 pl-11 pr-4 text-foreground outline-none transition focus:border-accent/50"
          />
        </div>
      )}

      {query && filtered.length === 0 ? (
        <p className="mt-8 text-center text-muted">
          No encontramos &quot;{query}&quot;. Revisa la ortografía o dona para
          aparecer aquí.
        </p>
      ) : (
        <DonorGrid donors={filtered} />
      )}
    </>
  );
}
