import type { Metadata } from "next";
import { Section, Eyebrow, Heading } from "@/components/primitives";
import {
  PricingPackages,
  Inclusions,
  HowItWorks,
  CtaBand,
} from "@/components/sections";
import Faqs from "@/components/Faqs";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/components/JsonLd";
import { PRICING_NOTE, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description: `Personal bartending for celebrations across ${SITE.area}. Explore our packages and inquire for a quote based on your hours and guest count.`,
  alternates: { canonical: `${SITE.url}/pricing` },
};

export default function Pricing() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <Section className="pb-8! text-center">
        <Eyebrow>Packages & pricing</Eyebrow>
        <Heading as="h1" className="mt-4" accent="your celebration." size="xl">
          A bar plan for
        </Heading>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
          {PRICING_NOTE}
        </p>
      </Section>
      <Section className="pt-5!">
        <PricingPackages />
        <p className="mt-6 text-center text-sm text-ink-soft">
          You provide the alcohol. We’ll help with the shopping list.
        </p>
      </Section>
      <div className="bg-warmwhite">
        <Section>
          <Eyebrow>With either package</Eyebrow>
          <Heading className="mt-3" accent="little details.">
            We take care of the
          </Heading>
          <Inclusions />
        </Section>
      </div>
      <Section>
        <Eyebrow>From hello to last call</Eyebrow>
        <Heading className="mt-3" accent="works.">
          Here’s how it
        </Heading>
        <HowItWorks />
      </Section>
      <div className="bg-warmwhite">
        <Section className="max-w-3xl!">
          <Eyebrow>Good to know</Eyebrow>
          <Heading className="mt-3" accent="questions.">
            A few common
          </Heading>
          <div className="mt-8">
            <Faqs />
          </div>
        </Section>
      </div>
      <CtaBand />
    </>
  );
}
