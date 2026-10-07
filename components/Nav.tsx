"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // The Inquire pill already covers /contact, so drop the duplicate nav item.
  const links = NAV.filter((l) => l.href !== "/contact");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brass/15 bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Tipsy Blondes OC home">
          <Image
            src="/media/logo-mark.png"
            alt="Tipsy Blondes OC mobile bartending logo"
            width={520}
            height={198}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm tracking-wide transition-colors hover:text-brass ${
                    isActive(l.href) ? "text-brass" : "text-ink-soft"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="pill border border-brass px-6 py-2 text-xs uppercase tracking-[0.2em] text-brass transition-colors hover:bg-brass hover:text-warmwhite"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-1 flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute inset-x-0 top-full border-t border-brass/15 bg-cream shadow-[0_24px_28px_-22px_rgba(74,63,54,0.45)] md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-lg ${
                    isActive(l.href) ? "text-brass" : "text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="pill inline-block border border-brass px-6 py-2 text-xs uppercase tracking-[0.2em] text-brass"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
