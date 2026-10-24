"use client";

import Link from "@/components/PageLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { INQUIRY_HREF, NAV, SITE } from "@/lib/content";

const navigationLinks = [...NAV, { href: INQUIRY_HREF, label: "Chat with us" }];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = header.current;
    if (!element) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const updateScroll = () => {
      const offset = element.offsetHeight - (desktop.matches ? 68 : 64);
      element.style.setProperty(
        "--header-visible-height",
        `${Math.max(desktop.matches ? 68 : 64, element.offsetHeight - window.scrollY)}px`,
      );
      setCompact(window.scrollY > (desktop.matches ? offset : 8));
    };
    const updateHeight = () => {
      const pinnedHeight = desktop.matches ? 68 : 64;
      element.style.setProperty(
        "--header-scroll-offset",
        `${Math.max(0, element.offsetHeight - pinnedHeight)}px`,
      );
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${pinnedHeight}px`,
      );
      updateScroll();
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScroll);
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header
      ref={header}
      className="site-header sticky z-50 shrink-0 border-b border-brass/15 bg-warmwhite"
    >
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-center px-14 py-6 sm:px-20 lg:pb-5 lg:pt-8">
        <Link
          href="/"
          aria-label={`${SITE.name}: ${SITE.tagline}. Home`}
          onClick={() => setOpen(false)}
          className={`text-center ${compact ? "invisible" : ""}`}
          inert={compact}
        >
          <span className="block whitespace-nowrap font-serif text-[clamp(1.5rem,8vw,2.6rem)] uppercase leading-none tracking-[0.035em] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
            {SITE.name}
          </span>
          <span className="mt-3 block whitespace-nowrap text-[clamp(10px,2.8vw,12px)] uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.2em] lg:tracking-[0.24em]">
            {SITE.tagline}
          </span>
        </Link>
        <button
          ref={toggle}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className={`menu-toggle right-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors hover:text-brass sm:right-10 lg:hidden ${compact ? "fixed top-2" : "absolute top-1/2 -translate-y-1/2"}`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden
          >
            <path className="menu-line menu-line-top" d="M3 7h18" />
            <path className="menu-line menu-line-middle" d="M3 12h18" />
            <path className="menu-line menu-line-bottom" d="M3 17h18" />
          </svg>
        </button>
      </div>
      <nav
        aria-label="Main navigation"
        className="hidden h-[67px] items-center justify-center gap-4 lg:flex"
      >
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={
              pathname === link.href.split("#")[0] ? "page" : undefined
            }
            className={`flex min-h-11 items-center rounded-xl px-3 py-2 text-base tracking-[0.03em] decoration-1 underline-offset-8 transition-colors duration-200 hover:underline ${pathname === link.href.split("#")[0] ? "text-brass underline decoration-brass" : "hover:text-ink-strong"}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        className="mobile-menu absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-visible-height,var(--site-header-height)))] overflow-y-auto overscroll-contain rounded-b-2xl border-b border-brass/15 bg-warmwhite px-6 pb-7 pt-3 shadow-lg lg:hidden"
      >
        {navigationLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={
              pathname === link.href.split("#")[0] ? "page" : undefined
            }
            onClick={() => setOpen(false)}
            style={{ animationDelay: `${index * 25}ms` }}
            className={`mobile-menu-link block rounded-xl px-4 py-3 font-serif text-3xl decoration-1 underline-offset-8 transition-colors duration-200 hover:underline ${pathname === link.href.split("#")[0] ? "text-brass underline decoration-brass" : "hover:text-ink-strong"}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
