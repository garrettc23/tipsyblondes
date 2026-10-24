import type { Metadata } from "next";
import { Section, Heading, Button } from "@/components/primitives";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { COPY, SITE } from "@/lib/content";
import ContactScrollReset from "@/components/ContactScrollReset";

export const metadata: Metadata = {
  title: "Contact & Inquire",
  description:
    "Book Tipsy Blondes in Orange County, Los Angeles, San Diego, Palm Springs, and surrounding areas. Share your date and event details to get started.",
  alternates: { canonical: "https://tipsyblondesoc.com/contact" },
};

const FORM_EMBED = `${SITE.googleForm}?embedded=true`;

const CONTACTS = [
  { label: "Call or text", value: SITE.phone, href: SITE.phoneHref },
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Instagram", value: SITE.instagramHandle, href: SITE.instagram },
  { label: "Everything else", value: "Linktree", href: SITE.linktree },
];

export default function Contact() {
  return (
    <>
      <ContactScrollReset />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Section className="pb-12! text-center">
        <Heading as="h1" className="mt-3" size="xl">
          Tell us about your event
        </Heading>
        <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-ink-soft">
          {COPY.contact}
        </p>
      </Section>

      {/* Contact details */}
      <Section className="pt-0!">
        <div id="contact-options" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="min-w-0 rounded-2xl bg-blush px-4 py-6 text-center text-ink-strong transition-colors hover:bg-warmwhite"
            >
              <p className="text-base font-medium">{c.label}</p>
              <p className="mt-4 whitespace-nowrap font-serif text-[22px] font-semibold leading-snug">
                {c.value}
              </p>
            </a>
          ))}
        </div>
      </Section>

      {/* Embedded inquiry form with graceful fallback */}
      <div className="bg-warmwhite">
        <Section id="inquiry">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="mt-2 text-2xl">Tell us what you’re planning</h2>
            </div>
            <Button href={SITE.googleForm} external>
              Request a quote
            </Button>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-brass/20 bg-cream">
            <iframe
              src={FORM_EMBED}
              title="Tipsy Blondes event inquiry form"
              className="h-[1500px] w-full"
              loading="lazy"
            >
              Loading the inquiry form. If it does not appear, use the button
              above to open it in a new tab.
            </iframe>
          </div>

        </Section>
      </div>
    </>
  );
}
