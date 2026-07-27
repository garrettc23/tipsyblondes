import Link from "next/link";
import Image from "next/image";
import { SITE, NAV } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-brass/20 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-14 pt-10 sm:px-8 md:grid-cols-3">
        <div>
          <Image
            src="/media/logo-mark.png"
            alt="Tipsy Blondes OC logo"
            width={520}
            height={198}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Mobile bartending for weddings and events across {SITE.area}. You bring the
            alcohol, we bring the rest.
          </p>
        </div>

        <div>
          <p className="label mb-4">Explore</p>
          <ul className="space-y-2">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-ink-soft hover:text-brass">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label mb-4">Get in touch</p>
          <ul className="space-y-2 text-sm text-ink-soft">
            <li>
              <a href={SITE.phoneHref} className="hover:text-brass">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-brass">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.instagram} className="hover:text-brass" target="_blank" rel="noopener noreferrer">
                {SITE.instagramHandle}
              </a>
            </li>
            <li>
              <a href={SITE.linktree} className="hover:text-brass" target="_blank" rel="noopener noreferrer">
                Linktree
              </a>
            </li>
            <li>
              <a href={SITE.theKnot} className="hover:text-brass" target="_blank" rel="noopener noreferrer">
                The Knot
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brass/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-ink-soft sm:flex-row sm:px-8">
          <p>
            &copy; 2026 {SITE.name}. Serving {SITE.area}.
          </p>
          <p className="script text-base">Feeling Tipsy?</p>
        </div>
      </div>
    </footer>
  );
}
