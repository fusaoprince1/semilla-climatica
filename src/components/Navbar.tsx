"use client";

import Link from "next/link";
import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";

const links = [
  { href: "/#problema", label: "El problema" },
  { href: "/#plan", label: "Nuestro plan" },
  { href: "/transparencia", label: "Transparencia" },
  { href: "/muro", label: "Muro Digital" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 ring-1 ring-primary/40 transition group-hover:bg-primary/30">
            <Leaf className="h-5 w-5 text-accent" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            {SITE.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donar"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition hover:bg-accent-hover"
          >
            Donar
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted transition hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donar"
              className="rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-background"
              onClick={() => setOpen(false)}
            >
              Donar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
