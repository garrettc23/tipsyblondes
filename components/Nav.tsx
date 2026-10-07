"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EXPLORE, INQUIRY } from "@/lib/content";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const desktopToggle = useRef<HTMLButtonElement>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);
  const close = () => {
    setMobileOpen(false);
    setExploreOpen(false);
  };

  useEffect(() => {
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) {
        setMobileOpen(false);
        setExploreOpen(false);
      }
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (mobileOpen) mobileToggle.current?.focus();
      else if (exploreOpen) desktopToggle.current?.focus();
      setMobileOpen(false);
      setExploreOpen(false);
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [mobileOpen, exploreOpen]);

  return (
    <header
      ref={header}
      className="site-header"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          close();
      }}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          onClick={close}
          aria-label="Tipsy Blondes home"
          className="shrink-0"
        >
          <Image
            src="/media/logo-mark.png"
            alt="Tipsy Blondes OC"
            width={520}
            height={198}
            className="h-11 w-auto sm:h-14"
            priority
          />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#about" onClick={close} className="nav-link">
            About Us
          </Link>
          <div className="relative">
            <button
              ref={desktopToggle}
              type="button"
              className="nav-link flex items-center gap-2"
              aria-expanded={exploreOpen}
              aria-controls="explore-menu"
              onClick={() => setExploreOpen(!exploreOpen)}
            >
              Explore{" "}
              <span aria-hidden className="text-xs">
                ⌄
              </span>
            </button>
            {exploreOpen && (
              <ul
                id="explore-menu"
                className="absolute left-1/2 top-full mt-4 w-52 -translate-x-1/2 rounded-xl border border-blush bg-warmwhite p-2 shadow-lg"
              >
                {EXPLORE.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block rounded-lg px-4 py-3 text-sm hover:bg-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link href="/pricing" onClick={close} className="nav-link">
            Pricing
          </Link>
          <Link href={INQUIRY.href} onClick={close} className="nav-booking">
            {INQUIRY.label} <span aria-hidden>↗</span>
          </Link>
        </div>
        <button
          ref={mobileToggle}
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center md:hidden"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
          >
            <path
              d={
                mobileOpen ? "M6 6l12 12M18 6L6 18" : "M3 7h18M3 12h18M3 17h18"
              }
            />
          </svg>
        </button>
      </nav>
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="max-h-[70dvh] overflow-y-auto border-t border-blush bg-warmwhite px-6 pb-5 md:hidden"
        >
          <Link href="/#about" onClick={close} className="mobile-link">
            About Us
          </Link>
          <button
            type="button"
            className="mobile-link flex w-full items-center justify-between"
            aria-expanded={exploreOpen}
            aria-controls="mobile-explore"
            onClick={() => setExploreOpen(!exploreOpen)}
          >
            Explore <span aria-hidden>{exploreOpen ? "−" : "+"}</span>
          </button>
          {exploreOpen && (
            <ul id="mobile-explore" className="border-l border-blush pl-5">
              {EXPLORE.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="mobile-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Link href="/pricing" onClick={close} className="mobile-link">
            Pricing
          </Link>
          <Link
            href={INQUIRY.href}
            onClick={close}
            className="nav-booking mt-3 inline-flex"
          >
            {INQUIRY.label} <span aria-hidden>↗</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
