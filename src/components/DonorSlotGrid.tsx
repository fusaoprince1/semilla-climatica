import Link from "next/link";
import { Crown, Leaf, Share2 } from "lucide-react";
import type { Donor } from "@/lib/donors";
import PlaceholderDonorCard from "@/components/PlaceholderDonorCard";
import type { DisplaySlot } from "@/lib/display-donors";
import { formatDonorDate } from "@/lib/dates";

function RealDonorCard({
  donor,
  compact,
}: {
  donor: Donor;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/badge/${donor.id}`}
      className={`block shrink-0 rounded-xl border p-4 transition hover:scale-[1.02] ${
        compact ? "w-[calc(50%-6px)] min-w-[160px] sm:w-[calc(25%-9px)]" : ""
      } ${
        donor.founder
          ? "border-accent/40 bg-accent/5 ring-1 ring-accent/20 hover:ring-accent/40"
          : "border-border bg-surface hover:border-primary/40"
      }`}
    >
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
        {formatDonorDate(donor.date)}
      </p>
      <p className="mt-3 flex items-center gap-1 text-xs text-primary-light">
        <Share2 className="h-3 w-3" />
        Ver badge
      </p>
    </Link>
  );
}

type Props = {
  slots: DisplaySlot[];
  horizontal?: boolean;
};

export default function DonorSlotGrid({ slots, horizontal }: Props) {
  if (horizontal) {
    return (
      <div className="mt-12 -mx-4 px-4">
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
          {slots.map((slot, i) =>
            slot === "placeholder" ? (
              <PlaceholderDonorCard key={`ph-${i}`} compact />
            ) : (
              <RealDonorCard key={slot.id} donor={slot} compact />
            )
          )}
        </div>
        <p className="text-center text-xs text-muted">
          {slots.some((s) => s !== "placeholder")
            ? "Los 8 donantes más recientes · Desliza →"
            : "Desliza para ver más →"}
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {slots.map((slot, i) =>
        slot === "placeholder" ? (
          <PlaceholderDonorCard key={`ph-${i}`} />
        ) : (
          <RealDonorCard key={slot.id} donor={slot} />
        )
      )}
    </div>
  );
}
