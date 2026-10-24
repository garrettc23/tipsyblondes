import type { Metadata } from "next";
import { Section, Heading, Button } from "@/components/primitives";
import { BarOptions, CtaBand, PageIntro } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import {
  BOOKING, COPY, INCLUDED, INQUIRY_HREF, PACKAGES, PACKAGE_ADD_ONS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Bar & Packages",
  description:
    "Explore the Pop Up Bar and Tipsy Blonde packages, our white mobile bar, and included bartending services. Alcohol is excluded from all packages.",
  alternates: { canonical: "https://tipsyblondesoc.com/pricing" },
};

function InclusionMark({ included = true }: { included?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 size-4 shrink-0 text-brass sm:mt-1"
    >
      <path d={included ? "M2 8l4 6L14 2" : "M2 2l12 12M14 2L2 14"} />
    </svg>
  );
}

export default function Packages() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Bar & Packages", path: "/pricing" },
        ])}
      />
      <PageIntro title="Explore our packages" description={COPY.services.intro} />

      <Section id="packages" className="pt-0!">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {PACKAGES.map((pkg) => (
            <article key={pkg.name} className="flex flex-col rounded-2xl bg-blush p-6 sm:p-8 lg:p-10">
              <h2 className="text-3xl leading-tight sm:text-4xl">{pkg.name}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">{pkg.summary}</p>
              <p className="mt-6 flex-1 leading-relaxed text-ink-soft">{pkg.description}</p>
              <ul className="mt-8 space-y-3 text-sm sm:text-base">
                <li className="flex gap-3">
                  <InclusionMark included={pkg.includesBar} />
                  <span><span className="sr-only">{pkg.includesBar ? "Included: " : "Not included: "}</span>Bar included</span>
                </li>
                {["Custom cocktail menu planning", "Bartenders, ingredients, and service supplies", "Setup and breakdown", "Alcohol shopping list", "General and liquor liability insurance"].map((item) => (
                  <li key={item} className="flex gap-3"><InclusionMark />{item}</li>
                ))}
              </ul>
              <div className="mt-8"><Button href={INQUIRY_HREF}>Request a quote</Button></div>
            </article>
          ))}
        </div>
        <p id="supplying-alcohol" className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-ink-soft">
          {COPY.services.packageAlcohol}
        </p>
      </Section>

      <Section id="bar-setups" className="pt-0! text-center">
        <Heading>Find the look for your bar</Heading>
        <p className="mx-auto mb-10 mt-5 max-w-3xl leading-relaxed text-ink-soft">
          These setups show how the bar can fit into your celebration. Share the
          style you like when you inquire, and we’ll talk through your venue and setup.
        </p>
        <BarOptions />
      </Section>

      <div className="bg-blush">
        <Section id="service" className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Heading>Included in both packages</Heading>
            <p className="mt-5 leading-relaxed text-ink-soft">
              We prepare the ingredients, bring the supplies, and take care of
              the bar throughout your event. You can spend the evening with your guests.
            </p>
          </div>
          <ul className="grid gap-3 xl:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl bg-warmwhite p-4 text-sm">
                <span className="text-brass" aria-hidden="true">✓</span>{item}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {PACKAGE_ADD_ONS.length > 0 && (
        <Section id="add-ons">
          <Heading>Add-ons for your event</Heading>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {PACKAGE_ADD_ONS.map((addOn) => (
              <article key={addOn.name} className="rounded-2xl bg-warmwhite p-7">
                <h3 className="text-3xl">{addOn.name}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{addOn.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8"><Button href={INQUIRY_HREF}>Ask about add-ons</Button></div>
        </Section>
      )}

      <Section id="booking-steps" className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Heading className="mt-4">How do I book my event?</Heading>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">{COPY.services.booking}</p>
        </div>
        <ol className="space-y-4">
          {BOOKING.map((step) => (
            <li key={step.n} className="flex gap-5 rounded-2xl bg-blush p-6 text-ink-strong">
              <span className="pt-1 text-sm font-medium">0{step.n}</span>
              <div>
                <h3 className="font-accent text-2xl font-medium">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand />
    </>
  );
}
