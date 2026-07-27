import type { Metadata } from "next";
import { Section, Eyebrow, Heading } from "@/components/primitives";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & Inquire",
  description:
    "Book Tipsy Blondes OC for your Orange County wedding or event. Share your date and details and we will get right back to you with a custom quote.",
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
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Section className="pb-12! text-center">
        <Eyebrow>Contact Us</Eyebrow>
        <Heading as="h1" className="mt-3" accent="bar" size="xl">
          Let us plan your
        </Heading>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
          Tell us about your event and we will get back to you with a custom quote. The more
          detail you share about your date, guest count, and vision, the faster we can help.
        </p>
      </Section>

      {/* Contact details */}
      <Section className="pt-0!">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-sm border border-brass/20 bg-warmwhite p-6 text-center transition-colors hover:border-brass"
            >
              <p className="label">{c.label}</p>
              <p className="mt-4 font-serif text-lg text-ink">{c.value}</p>
            </a>
          ))}
        </div>
      </Section>

      {/* Embedded inquiry form with graceful fallback */}
      <div className="bg-warmwhite">
        <Section>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <Eyebrow>Inquiry form</Eyebrow>
              <h2 className="mt-2 text-2xl">Start your booking</h2>
            </div>
            <a
              href={SITE.googleForm}
              target="_blank"
              rel="noopener noreferrer"
              className="pill border border-brass px-6 py-2 text-xs uppercase tracking-[0.2em] text-brass transition-colors hover:bg-brass hover:text-warmwhite"
            >
              Open in a new tab
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-sm border border-brass/20 bg-cream">
            <iframe
              src={FORM_EMBED}
              title="Tipsy Blondes OC event inquiry form"
              className="h-[1500px] w-full"
              loading="lazy"
            >
              Loading the inquiry form. If it does not appear, use the button above to open
              it in a new tab.
            </iframe>
          </div>

          <p className="mt-4 text-center text-sm text-ink-soft">
            Trouble seeing the form? Use the button above, or email us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-brass hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </Section>
      </div>
    </>
  );
}
