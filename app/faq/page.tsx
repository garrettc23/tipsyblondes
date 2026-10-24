import type { Metadata } from "next";
import { Section } from "@/components/primitives";
import { CtaBand, PageIntro } from "@/components/sections";
import Faqs from "@/components/Faqs";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/JsonLd";
import { COPY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about Tipsy Blondes insurance, alcohol, service areas, custom quotes, and booking your mobile bar.",
  alternates: { canonical: "https://tipsyblondesoc.com/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd data={faqSchema()} />
      <PageIntro
        title="Frequently asked questions"
        description={COPY.faq}
      />
      <Section className="max-w-4xl! pt-4!">
        <Faqs />
      </Section>
      <CtaBand />
    </>
  );
}
