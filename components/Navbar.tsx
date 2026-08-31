"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { track } from "../lib/analytics";
import { navLinks, site } from "../lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="serif text-xl tracking-tight">{site.name}</span>
          <span className="hidden text-[11px] uppercase tracking-[0.18em] text-muted sm:inline">
            Inspection
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => track("book_inspection_click", { source: "navbar" })}
            className="rounded-sm bg-copper px-4 py-2 text-sm font-medium text-white hover:bg-copper-2"
          >
            Book inspection
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-3 border-t border-line px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => {
              track("book_inspection_click", { source: "navbar_mobile" });
              setOpen(false);
            }}
            className="font-medium text-copper"
          >
            Book inspection
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
