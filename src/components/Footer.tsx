import Link from "next/link";
import { Leaf } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                <Leaf className="h-4 w-4 text-accent" />
              </div>
              <span className="font-display text-lg font-semibold">
                {SITE.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted leading-relaxed">
              {SITE.description}
            </p>
            <p className="mt-4 text-sm text-muted">Hecho en México 🇲🇽</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/donar", label: "Donar" },
                { href: "/transparencia", label: "Transparencia" },
                { href: "/muro", label: "Muro Digital" },
                { href: "/#plan", label: "Nuestro plan" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Aviso de privacidad (próximamente)</li>
              <li>Términos de donación (próximamente)</li>
              <li>contacto@semillaclimatica.mx</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
