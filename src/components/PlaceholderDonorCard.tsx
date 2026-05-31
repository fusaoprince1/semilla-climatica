import Link from "next/link";
import { Leaf } from "lucide-react";

export default function PlaceholderDonorCard({ compact }: { compact?: boolean }) {
  return (
    <Link
      href="/donar"
      className={`flex shrink-0 flex-col rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4 transition hover:border-accent/40 hover:bg-primary/10 ${
        compact ? "w-[calc(50%-6px)] min-w-[160px] sm:w-[calc(25%-9px)]" : ""
      }`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
        <Leaf className="h-4 w-4 text-muted" />
      </div>
      <p className="mt-3 font-display text-sm font-medium text-muted">
        Tu nombre aquí
      </p>
      <p className="mt-1 text-xs text-muted/80">Desde $20 MXN</p>
      <p className="mt-2 text-[10px] text-accent">Sé el próximo →</p>
    </Link>
  );
}
