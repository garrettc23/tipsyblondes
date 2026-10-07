import type { Metadata } from "next";
import { Section, Eyebrow, Heading } from "@/components/primitives";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Start your booking",
  description: `Celebrate with Taylor & Amber across ${SITE.area}. Share your event details for availability and a custom bartending quote.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function Contact() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Inquire", path: "/contact" },
        ])}
      />
      <Section id="inquiry" className="pb-8! text-center">
        <Eyebrow>Let’s celebrate</Eyebrow>
        <Heading as="h1" className="mt-4" accent="booking." size="xl">
          Start your
        </Heading>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
          Tell us your date, location, guest count, and a little about your
          plans. We’ll get back to you with availability and a custom quote.
        </p>
        <p className="mt-4 text-sm text-ink-soft">{SITE.area}</p>
      </Section>
      <Section className="max-w-4xl! pt-0!">
        <div className="mb-4 flex justify-end">
          <a
            href={SITE.googleForm}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-sm text-brass underline underline-offset-4"
          >
            Open the form in a new tab ↗
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-blush bg-warmwhite">
          <iframe
            src={`${SITE.googleForm}?embedded=true`}
            title="Tipsy Blondes event inquiry form"
            className="h-[1900px] w-full sm:h-[1650px]"
          >
            Loading the inquiry form.
          </iframe>
        </div>
        <p className="mt-5 text-center text-sm leading-relaxed text-ink-soft">
          Form not loading?{" "}
          <a
            href={SITE.googleForm}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brass underline underline-offset-4"
          >
            Open it directly
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-brass underline underline-offset-4"
          >
            {SITE.email}
          </a>
          .
        </p>
        <div className="mt-10 border-t border-blush pt-8 text-center">
          <p className="font-serif text-2xl">A quick question first?</p>
          <a
            href={SITE.phoneHref}
            className="mt-3 inline-block py-2 text-sm text-brass underline underline-offset-4"
          >
            Call or text {SITE.phone}
          </a>
        </div>
      </Section>
    </>
  );
}
