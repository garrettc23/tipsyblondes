import { GALLERY_MEDIA, SITE } from "@/lib/content";
import type { Metadata } from "next";
import { Section, Eyebrow, Heading } from "@/components/primitives";
import { CtaBand } from "@/components/sections";
import MediaGrid from "@/components/MediaGrid";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gallery",
  description: `See Taylor & Amber in action. Personal bartending for celebrations across ${SITE.area}.`,
  alternates: { canonical: "https://tipsyblondesoc.com/gallery" },
};

export default function Gallery() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />

      <Section className="pb-8 text-center">
        <Eyebrow>The gallery</Eyebrow>
        <Heading as="h1" className="mt-3" accent="action" size="xl">
          Tipsy Blondes in
        </Heading>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
          A look at our drinks and the people we celebrate with. Serving{" "}
          {SITE.area}. Use the player on any video to pause or skip ahead.
        </p>
      </Section>

      <Section className="pt-0">
        <MediaGrid items={GALLERY_MEDIA} />
      </Section>

      <CtaBand />
    </>
  );
}
