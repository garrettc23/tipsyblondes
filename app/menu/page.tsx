import type { Metadata } from "next";
import { Section, Eyebrow, Heading, Button } from "@/components/primitives";
import { CocktailMenu, CtaBand } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Signature Cocktail Menu",
  description:
    "Explore Tipsy Blondes OC signature cocktails. Fresh margaritas, palomas, martinis, and classics, all custom planned for your Orange County wedding or event.",
  alternates: { canonical: "https://tipsyblondesoc.com/menu" },
};

export default function Menu() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
        ])}
      />

      <Section className="pb-6 text-center">
        <Eyebrow>Signature cocktails</Eyebrow>
        <Heading as="h1" className="mt-3" accent="you" size="xl">
          Fresh drinks, planned with
        </Heading>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
          These are favorites from past events. Your final menu is built with you during
          planning, so you can pull from this list or dream up something new. We use fresh
          juice and quality ingredients, always.
        </p>
      </Section>

      <Section className="pt-4">
        <CocktailMenu />
      </Section>

      <div className="bg-warmwhite">
        <Section className="max-w-2xl! text-center">
          <p className="script text-3xl text-ink-soft">Something for everyone</p>
          <Heading className="mt-2" accent="request">
            Zero proof options on
          </Heading>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
            Want mocktails, a welcome drink, or a his and hers pairing? We build those in
            too. Tell us your vision and we will shape the menu around it.
          </p>
          <div className="mt-8">
            <Button href="/contact">Plan your menu</Button>
          </div>
        </Section>
      </div>

      <CtaBand />
    </>
  );
}
