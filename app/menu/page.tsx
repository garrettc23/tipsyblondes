import type { Metadata } from "next";
import { Section, Heading } from "@/components/primitives";
import { CocktailMenu, CtaBand } from "@/components/sections";
import { COPY } from "@/lib/content";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Custom Cocktail Menus",
  description:
    "Browse example cocktails from Tipsy Blondes. We create a custom menu for your event, including your favorite drinks and non-alcoholic options.",
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

      <Section className="pt-12! pb-8! text-center sm:pt-16!">
        <Heading as="h1" className="mt-3" size="xl">
          {COPY.menu.heading}
        </Heading>
        <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-ink-soft">
          {COPY.menu.intro}
        </p>
      </Section>

      <Section id="cocktail-menu" className="pt-4!">
        <CocktailMenu />
      </Section>

      <Section id="non-alcoholic-drinks" className="pt-0!">
        <div className="grid items-center gap-6 rounded-2xl bg-blush p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-12">
          <Heading className="text-balance">Non-alcoholic drinks</Heading>
          <p className="text-base leading-relaxed text-ink">
            {COPY.menu.nonAlcoholic}
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
