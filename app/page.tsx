import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, Heading, Button } from "@/components/primitives";
import GalleryStrip from "@/components/GalleryStrip";
import {
  Reviews,
  CtaBand,
  HowItWorks,
  BarGallery,
  CocktailMenu,
} from "@/components/sections";
import { HOME, INQUIRY, SITE } from "@/lib/content";

export default function Home() {
  return (
    <>
      <GalleryStrip />
      <Section className="hero-intro text-center">
        <Eyebrow>Mobile bartending, with love</Eyebrow>
        <h1 className="mx-auto mt-5 max-w-3xl text-[2.9rem] leading-[1.05] sm:text-6xl lg:text-[4.6rem]">
          {HOME.headline}
          <br />
          <span className="italic text-brass">{HOME.headlineAccent}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
          {HOME.intro}
        </p>
        <div className="mt-7">
          <Button href={INQUIRY.href}>
            {INQUIRY.label} <span aria-hidden>↗</span>
          </Button>
        </div>
        <p className="mt-5 text-xs leading-relaxed tracking-wide text-ink-soft">
          {SITE.area}
        </p>
      </Section>

      <div className="bg-warmwhite">
        <Section
          id="about"
          className="grid items-center gap-9 md:grid-cols-[1.1fr_1fr] md:gap-16"
        >
          <div className="relative aspect-[5/4] overflow-hidden rounded-t-[6rem] rounded-b-xl sm:rounded-t-[8rem]">
            <Image
              src={HOME.aboutPhoto.src}
              alt={HOME.aboutPhoto.alt}
              fill
              sizes="(max-width: 768px) 90vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "50% 45%" }}
            />
          </div>
          <div>
            <Eyebrow>About Us</Eyebrow>
            <Heading className="mt-4">{HOME.aboutTitle}</Heading>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              {HOME.about}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {HOME.personal}
            </p>
            <p className="mt-7 font-serif text-2xl italic text-brass">
              Here’s to the first of many celebrations.
            </p>
          </div>
        </Section>
      </div>

      <Section id="reviews">
        <div className="mb-9 text-center">
          <Eyebrow>Client love</Eyebrow>
          <Heading className="mt-3" accent="company.">
            You’re in good
          </Heading>
        </div>
        <Reviews />
      </Section>
      <CtaBand compact />

      <Section id="how-it-works">
        <Eyebrow>How it works</Eyebrow>
        <Heading className="mt-3" accent="celebrating.">
          We pour. You keep
        </Heading>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
          Fresh ingredients, a menu planned with you, and people who care about
          your day. You supply the alcohol; we take care of the service.
        </p>
        <HowItWorks />
        <div className="mt-8">
          <Link
            href="/pricing"
            className="text-sm text-brass underline underline-offset-4"
          >
            Explore packages & pricing <span aria-hidden>↗</span>
          </Link>
        </div>
      </Section>

      <div className="bg-warmwhite">
        <Section id="bars">
          <div className="text-center">
            <Eyebrow>Meet the bars</Eyebrow>
            <Heading className="mt-3" accent="your day.">
              A little style for
            </Heading>
          </div>
          <BarGallery />
        </Section>
      </div>

      <Section id="cocktails">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Freshly made, just for you</Eyebrow>
            <Heading className="mt-3" accent="good taste.">
              You bring the
            </Heading>
          </div>
          <Link
            href="/menu"
            className="shrink-0 text-sm text-brass underline underline-offset-4"
          >
            A taste of our cocktails ↗
          </Link>
        </div>
        <CocktailMenu />
      </Section>
      <CtaBand />
    </>
  );
}
