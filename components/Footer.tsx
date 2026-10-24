import Link from "@/components/PageLink";
import { COPY, SITE, FOOTER_NAV_GROUPS, INQUIRY_HREF } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 pt-14 pb-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-16">
        <div>
          <Link
            href="/"
            aria-label={`${SITE.name}: ${SITE.tagline}. Home`}
            className="inline-flex max-w-full flex-col items-center text-center"
          >
            <span className="font-serif text-4xl uppercase tracking-[0.02em]">
              {SITE.name}
            </span>
            <span className="mt-3 text-xs uppercase tracking-[0.16em]">
              {SITE.tagline}
            </span>
          </Link>
          <div className="max-w-xs">
            <p className="mt-6 text-pretty text-sm leading-relaxed text-ink-soft">
              {COPY.footer}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-ink-soft">
              Serving {SITE.serviceAreaDescription}.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6">
          {FOOTER_NAV_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="mb-5 text-2xl">{group.title}</h2>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-2 text-sm hover:text-brass"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h2 className="mb-5 text-2xl">Get in touch</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                href={INQUIRY_HREF}
                className="inline-block py-2 hover:text-brass"
              >
                Chat with us
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-block break-all py-2 hover:text-brass"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.phoneHref}
                className="inline-block py-2 hover:text-brass"
              >
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 hover:text-brass"
              >
                {SITE.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={SITE.theKnot}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 hover:text-brass"
              >
                Find us on The Knot
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
