import Image from "next/image";
import { Section, Heading, Button, Photo } from "@/components/primitives";
import {
  BarShowcase,
  Reviews,
  SocialPreview,
  CtaBand,
  WhyTipsyList,
  FeaturedClients,
} from "@/components/sections";
import Faqs from "@/components/Faqs";
import { COPY, FAQS, INQUIRY_HREF } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section
        id="home-hero"
        className="home-hero relative isolate overflow-hidden text-warmwhite"
      >
        <div className="hero-photo absolute inset-0">
          <Image
            src="/media/setup-detail.jpg"
            alt="Two guests holding orange cocktails garnished with edible flowers"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>
        <div aria-hidden="true" className="hero-scrim absolute inset-0" />
        <div className="hero-copy relative mx-auto flex w-full max-w-[1600px] flex-col items-start justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-12 xl:px-20">
          <div className="grid w-fit max-w-full grid-cols-[minmax(0,max-content)]">
            <h1 className="text-[clamp(2.9rem,14.4vw,4.75rem)] leading-[1.12] tracking-[-0.025em] lg:text-[clamp(4.5rem,7.8vw,7.5rem)]">
              <span className="block text-balance">Enjoy your party.</span>
              <span className="mt-[0.12em] block text-balance lg:w-0 lg:min-w-full lg:whitespace-nowrap">We’ll handle the bar.</span>
            </h1>
            <p className="mb-8 mt-6 w-0 min-w-full text-base leading-relaxed text-cream sm:text-lg lg:mt-8">
              {COPY.home.hero}
            </p>
          </div>
          <Button href={INQUIRY_HREF} variant="light">
            Chat with us
          </Button>
        </div>
      </section>

      <div>
        <Section
          id="meet-the-founders"
          className="grid items-center gap-10 md:grid-cols-2 lg:gap-20"
        >
          <Photo
            src="/media/owners.webp"
            alt="Tipsy Blondes founders Taylor and Amber"
            className="aspect-[5/4] md:aspect-[4/5]"
            objectPosition="50% 30%"
          />
          <div>
            <Heading>
              Hi, we’re
              <br />
              Amber & Taylor.
            </Heading>
            <p className="mt-6 leading-relaxed text-ink-soft">
              {COPY.home.founders[0]}
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              {COPY.home.founders[1]}
            </p>
            <div className="mt-6">
              <Button href="/about">
                Get to know us
              </Button>
            </div>
          </div>
        </Section>
      </div>

      <FeaturedClients />

      <Section
        id="why-tipsy"
        className="grid gap-x-12 gap-y-5 xl:grid-cols-2 lg:gap-x-20"
      >
        <div>
          <Heading className="xl:text-6xl">
            Why book
            <br />
            Tipsy Blondes?
          </Heading>
          <p className="mt-4 leading-relaxed text-ink-soft">
            {COPY.home.why}
          </p>
        </div>
        <Photo
          src="/media/coupes-menu-sign.webp"
          alt="Two freshly prepared cocktails with a custom event menu"
          className="aspect-[5/4] xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:aspect-[4/5] xl:self-center"
          objectPosition="center 60%"
        />
        <div className="xl:col-start-1 xl:row-start-2">
          <WhyTipsyList compact />
          <div className="mt-5">
            <Button href="/pricing">Explore our packages</Button>
          </div>
        </div>
      </Section>

      <div>
        <Section id="our-bar">
          <BarShowcase />
        </Section>
      </div>

      <div className="bg-blush">
        <Section id="testimonials">
          <div className="mb-10 text-center">
            <Heading>What our clients say</Heading>
          </div>
          <Reviews limit={3} />
          <div className="mt-12 text-center">
            <Button href="/reviews">
              Read more reviews
            </Button>
          </div>
        </Section>
      </div>

      <div>
        <Section
          id="home-faq"
          className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] lg:gap-20"
        >
          <div>
            <Heading>
              Frequently asked
              <br />
              questions
            </Heading>
            <div className="mt-6">
              <Button href="/faq">
                View all FAQs
              </Button>
            </div>
          </div>
          <Faqs items={FAQS.slice(0, 5)} />
        </Section>
      </div>
      <div className="bg-cream">
        <SocialPreview />
      </div>
      <CtaBand />
    </>
  );
}
