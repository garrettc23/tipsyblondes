import type { Metadata } from "next";
import { COPY, INQUIRY_HREF } from "@/lib/content";
import { Section, Heading, Photo, Button } from "@/components/primitives";
import { CtaBand, WhyTipsyList } from "@/components/sections";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import AwardRecognition from "@/components/AwardRecognition";

export const metadata: Metadata = {
  title: "Meet Taylor & Amber",
  description:
    "Get to know Taylor Larson and Amber Arrington, the best friends behind Tipsy Blondes mobile bartending in Orange County.",
  alternates: { canonical: "https://tipsyblondesoc.com/about" },
};

export default function About() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Section className="grid items-center gap-10 md:grid-cols-2 lg:gap-20">
        <div>
          <Heading as="h1" size="xl" className="mt-5">
            Hi, we’re
            <br />
            Taylor & Amber.
          </Heading>
          <p className="mt-7 leading-relaxed text-ink-soft">
            {COPY.about.intro[0]}
          </p>
          <p className="mt-5 leading-relaxed text-ink-soft">
            {COPY.about.intro[1]}
          </p>
          <p className="mt-5 leading-relaxed text-ink-soft">
            {COPY.about.intro[2]}
          </p>
          <div className="mt-7">
            <Button href={INQUIRY_HREF}>
              Chat with us
            </Button>
          </div>
        </div>
        <div className="relative">
          <Photo
            src="/media/hero-owners.png"
            alt="Taylor and Amber standing together beside the Tipsy Blondes white bar"
            priority
            className="aspect-[4/5]"
            objectPosition="50% 30%"
          />
          <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
            <AwardRecognition />
          </div>
        </div>
      </Section>
      <div className="bg-blush">
        <Section id="personal-service" className="max-w-4xl! py-10! text-center sm:py-12!">
          <Heading>{COPY.about.personalHeading}</Heading>
          <p className="mx-auto mt-4 w-full leading-relaxed text-ink-soft">
            {COPY.about.personal}
          </p>
        </Section>
      </div>
      <Section id="why-book">
        <Heading className="mb-10 text-center">Why book Tipsy Blondes?</Heading>
        <WhyTipsyList />
      </Section>
      <CtaBand />
    </>
  );
}
