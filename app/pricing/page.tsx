import type { Metadata } from "next";
import { Section, Eyebrow, Heading, Button, ArchImage } from "@/components/primitives";
import { PricingPackages, CtaBand } from "@/components/sections";
import Faqs from "@/components/Faqs";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/components/JsonLd";
import { BOOKING } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing & Services",
  description:
    "Mobile bartending pricing for Orange County weddings and events. See what is included, our dry bar packages from $2,100, how you save about 25 percent, and how booking works.",
  alternates: { canonical: "https://tipsyblondesoc.com/pricing" },
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

      {/* Header + concept hero */}
      <Section className="grid items-center gap-8 pt-12 md:grid-cols-2 md:gap-12">
        <div>
          <Eyebrow>Pricing</Eyebrow>
          <Heading as="h1" className="mt-3" accent="25%" size="xl">
            Save around
          </Heading>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            Because you buy your own alcohol from a shopping list we build for your guest
            count, you skip the markup a traditional open bar charges. Most of our clients
            save about 25 percent, with full control of their budget and no surprise
            charges.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            You supply the alcohol, we supply everything else. Two straightforward
            packages and no hidden fees. Here is exactly what each one includes and costs.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <ArchImage
            src="/media/bar-arch-shelf.webp"
            alt="An elegant white Tipsy Blondes OC bar with an arched wood shelf and florals"
            variant="arch"
            priority
            className="h-full w-full"
          />
        </div>
      </Section>

      {/* Packages with what's included */}
      <div className="bg-warmwhite">
        <Section>
          <div className="text-center">
            <Eyebrow>The packages</Eyebrow>
            <Heading className="mt-3" accent="event">
              Priced for your
            </Heading>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
              Two packages, no liquor markup. The Pop Up brings the full service, and the
              Tipsy Blonde adds our signature white bar. Here is exactly what comes with each.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <PricingPackages />
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-ink-soft">
            Larger guest counts and add ons are quoted during planning, based on your event.
          </p>
        </Section>
      </div>

      {/* Booking process */}
      <div className="bg-warmwhite">
        <Section>
          <div className="text-center">
            <Eyebrow>The booking process</Eyebrow>
            <Heading className="mt-3" accent="showtime">
              From inquiry to
            </Heading>
          </div>
          <ol className="mx-auto mt-12 max-w-2xl space-y-8">
            {BOOKING.map((step) => (
              <li key={step.n} className="flex gap-6">
                <span className="font-serif text-3xl text-brass/70">
                  {String(step.n).padStart(2, "0")}
                </span>
                <div className="border-l border-brass/20 pl-6">
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-ink-soft">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <Button href="/contact">Reserve your date</Button>
          </div>
        </Section>
      </div>

      {/* FAQ */}
      <Section className="max-w-3xl!">
        <div className="text-center">
          <Eyebrow>Good to know</Eyebrow>
          <Heading className="mt-3" accent="questions">
            Frequently asked
          </Heading>
        </div>
        <div className="mt-10">
          <Faqs />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
