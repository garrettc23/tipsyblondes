import type { Metadata } from "next";
import { Section, Eyebrow, Heading } from "@/components/primitives";
import { CocktailMenu, CtaBand } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cocktails",
  description: `Fresh cocktails and personal menu planning for weddings and events across ${SITE.area}. A little inspiration for your celebration.`,
  alternates: { canonical: `${SITE.url}/menu` },
};
export default function Menu() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cocktails", path: "/menu" },
        ])}
      />
      <Section className="pb-8! text-center">
        <Eyebrow>A taste of Tipsy Blondes</Eyebrow>
        <Heading as="h1" className="mt-4" accent="you." size="xl">
          Fresh drinks, planned with
        </Heading>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
          A little inspiration from past celebrations. We’ll get to know your
          favorite flavors and plan a menu that feels like you, with fresh
          ingredients and thoughtful details.
        </p>
      </Section>
      <Section className="pt-5!">
        <CocktailMenu />
        <p className="mx-auto mt-10 max-w-lg text-center text-base leading-relaxed text-ink-soft">
          Mocktails, a welcome drink, or something just for the two of you. Tell
          us what you have in mind when you inquire.
        </p>
      </Section>
      <CtaBand />
    </>
  );
}
