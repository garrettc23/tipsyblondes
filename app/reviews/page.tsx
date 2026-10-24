import type { Metadata } from "next";
import { Section, Button } from "@/components/primitives";
import { CtaBand, PageIntro, Reviews } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { COPY, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Read Tipsy Blondes client reviews about cocktail planning, friendly bartenders, and service at their weddings and parties.",
  alternates: { canonical: "https://tipsyblondesoc.com/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
      <PageIntro
        title="What our clients say"
        description={COPY.reviews}
      />
      <Section className="pt-4!">
        <Reviews tone="blush" />
        <div className="mt-12 text-center">
          <Button href={SITE.theKnot} external>
            Read more on The Knot
          </Button>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
