"use client";

import Link from "next/link";
import { Crown, Leaf, Share2 } from "lucide-react";
import type { Donor } from "@/lib/donors";

type Props = {
  donors: Donor[];
  linkToBadge?: boolean;
};

export default function DonorGrid({ donors, linkToBadge = true }: Props) {
  if (donors.length === 0) {
    return (
      <div className="mt-12 rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
        <Leaf className="mx-auto h-10 w-10 text-primary-light" />
        <p className="mt-4 font-display text-lg font-semibold">
          Sé el primero en el Muro Digital
        </p>
        <p className="mt-2 text-sm text-muted">
          Tu nombre aparecerá aquí en cuanto completes tu donación.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {donors.map((donor) => {
        const card = (
          <>
            <div className="flex items-start justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
                {donor.founder ? (
                  <Crown className="h-4 w-4 text-accent" />
                ) : (
                  <Leaf className="h-4 w-4 text-primary-light" />
                )}
              </div>
              {donor.founder && (
                <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent">
                  FUNDADOR
                </span>
              )}
            </div>
            <p className="mt-3 font-display font-semibold">{donor.name}</p>
            <p className="mt-1 text-sm text-accent">
              ${donor.amount.toLocaleString("es-MX")} MXN
            </p>
            <p className="mt-2 text-xs text-muted">
              {donor.city ? `${donor.city} · ` : ""}
              {new Date(donor.date).toLocaleDateString("es-MX", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            {linkToBadge && (
              <p className="mt-3 flex items-center gap-1 text-xs text-primary-light">
                <Share2 className="h-3 w-3" />
                Ver y compartir badge
              </p>
            )}
          </>
        );

        if (linkToBadge) {
          return (
            <Link
              key={donor.id}
              href={`/badge/${donor.id}`}
              className={`block rounded-xl border p-4 transition hover:scale-[1.02] ${
                donor.founder
                  ? "border-accent/40 bg-accent/5 ring-1 ring-accent/20 hover:ring-accent/40"
                  : "border-border bg-surface hover:border-primary/40"
              }`}
            >
              {card}
            </Link>
          );
        }

        return (
          <div
            key={donor.id}
            className={`rounded-xl border p-4 ${
              donor.founder
                ? "border-accent/40 bg-accent/5 ring-1 ring-accent/20"
                : "border-border bg-surface"
            }`}
          >
            {card}
          </div>
        );
      })}
    </div>
  );
}
