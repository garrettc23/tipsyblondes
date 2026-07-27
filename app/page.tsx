import Image from "next/image";
import { Section, Eyebrow, Heading, Button, ArchImage } from "@/components/primitives";
import GalleryStrip from "@/components/GalleryStrip";
import { OccasionBand, Reviews, CtaBand } from "@/components/sections";
import { INCLUDED, COCKTAILS, SITE } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="grid items-center gap-10 pt-10 md:grid-cols-2 md:pt-16">
        <div className="text-center md:text-left">
          <h1 className="sr-only">
            Tipsy Blondes OC, mobile bartending for weddings and events in Orange County
          </h1>
          <Eyebrow>Orange County Mobile Bartending</Eyebrow>
          <p
            aria-hidden
            className="mt-5 font-serif text-[3.25rem] leading-[1.02] tracking-[0.005em] text-ink sm:text-6xl lg:text-[4.5rem]"
          >
            Tipsy Blondes <span className="text-brass">OC</span>
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.4em] text-ink-soft sm:text-sm">
            Mobile Bartending
          </p>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft md:mx-0">
            A mobile bar for weddings and events across {SITE.area}. You bring the alcohol,
            we bring the bartenders, the bar, and everything in between.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button href="/contact">Contact Us</Button>
            <Button href="/gallery" variant="outline">
              View the Gallery
            </Button>
          </div>
          <a
            href={SITE.theKnot}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-4 transition-opacity hover:opacity-80"
          >
            <Image
              src="/media/knot-award.webp"
              alt="The Knot Best of Weddings award badge"
              width={80}
              height={80}
              className="h-20 w-20 shrink-0"
            />
            <span className="text-left text-base leading-snug text-ink-soft">
              <span className="block font-serif text-xl text-ink">2x Best of Weddings winner</span>
              on The Knot
            </span>
          </a>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md">
          <ArchImage
            src="/media/hero-owners.png"
            alt="Tipsy Blondes OC founders Taylor and Amber beside their signature bar"
            variant="arch-full"
            objectPosition="50% 30%"
            priority
            className="h-full w-full"
          />
        </div>
      </Section>

      <OccasionBand />

      {/* Designed to pour beautifully */}
      <Section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <ArchImage
            src="/media/mirror-need-a-drink.jpg"
            alt="Two signature cocktails garnished with dried citrus on a gold mirror tray"
            variant="arch"
            className="h-full w-full"
          />
        </div>
        <div>
          <Eyebrow>The dry bar difference</Eyebrow>
          <Heading className="mt-3" accent="beautifully">
            Designed to pour
          </Heading>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            We are a dry bar, which means we handle everything except the alcohol. You buy
            your own liquor from a shopping list we build around your guest count and menu.
            Most couples save about 25 percent compared to a traditional open bar, and you
            stay in full control of your budget.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            From setup to the last pour, our team keeps the drinks flowing and the line
            short so you can actually enjoy your own party.
          </p>
          <div className="mt-7">
            <Button href="/pricing" variant="outline">
              How it works
            </Button>
          </div>
        </div>
      </Section>

      {/* What's included strip */}
      <div className="bg-warmwhite">
        <Section>
          <div className="text-center">
            <Eyebrow>Every package includes</Eyebrow>
            <Heading className="mt-3" accent="rest">
              You bring the alcohol, we bring the
            </Heading>
          </div>
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-3 text-sm text-ink-soft sm:grid-cols-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Signature cocktail teaser */}
      <Section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="order-2 md:order-1">
          <Eyebrow>The menu</Eyebrow>
          <Heading className="mt-3" accent="cocktails">
            Fresh, custom
          </Heading>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Every menu is planned with you. Fresh juice, quality ingredients, and drinks
            that fit your theme. A few favorites from past events:
          </p>
          <ul className="mt-6 space-y-5">
            {COCKTAILS.slice(0, 4).map((c) => (
              <li key={c.name}>
                <p className="font-serif text-2xl text-ink">{c.name}</p>
                <p className="mt-1 text-base italic text-ink-soft">{c.spec}</p>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Button href="/menu" variant="outline">
              See the full menu
            </Button>
          </div>
        </div>
        <div className="relative order-1 mx-auto aspect-[4/5] w-full max-w-sm md:order-2">
          <ArchImage
            src="/media/cocktail-tajin.webp"
            alt="A signature Tipsy Blondes OC margarita with a chili-salt rim"
            variant="arch"
            objectPosition="50% 40%"
            className="h-full w-full"
          />
        </div>
      </Section>

      {/* The girls behind the bar */}
      <div className="bg-warmwhite">
        <Section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <ArchImage
              src="/media/owners.webp"
              alt="Tipsy Blondes OC founders Taylor and Amber behind the bar"
              variant="circle"
              objectPosition="50% 32%"
              className="h-full w-full"
            />
          </div>
          <div>
            <Eyebrow>Since 2024</Eyebrow>
            <Heading className="mt-3" accent="bar">
              The girls behind the
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Tipsy Blondes OC is a woman-owned bar service founded by best friends Taylor
              Larson and Amber Arrington. What started as two friends who love a good party
              became a mobile bartending team known for beautiful bars, thoughtful menus,
              and service that makes you feel like the only guest that matters.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              We treat your event like our own, right down to the last garnish.
            </p>
          </div>
        </Section>
      </div>

      {/* Our bar */}
      <Section>
        <div className="text-center">
          <Eyebrow>Our setup</Eyebrow>
          <Heading className="mt-3" accent="white bar">
            Our signature
          </Heading>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            Our clean white bar with a warm wood top and the martini mark is a statement
            piece at any event. Styled with brushed brass lamps, fresh garnishes, and a menu
            built around your day, it slips right into your celebration.
          </p>
        </div>
        <figure className="mx-auto mt-12 max-w-md">
          <div className="relative aspect-[4/5] w-full">
            <ArchImage
              src="/media/bar-tipsy-blondes.jpg"
              alt="The signature white Tipsy Blondes OC bar with the martini logo"
              variant="arch"
              objectPosition="50% 60%"
              className="h-full w-full"
            />
          </div>
        </figure>
      </Section>

      {/* Reviews */}
      <div className="bg-warmwhite">
        <Section>
          <div className="text-center">
            <Eyebrow>Testimonials</Eyebrow>
            <Heading className="mt-3" accent="us">
              What clients say about
            </Heading>
          </div>
          <div className="mt-12">
            <Reviews limit={3} />
          </div>
        </Section>
      </div>

      {/* Gallery teaser */}
      <Section>
        <GalleryStrip
          items={[
            { src: "/media/marg-brick-wall.webp", alt: "A tajin-rimmed margarita held against a white brick wall" },
            { src: "/media/tray-five-drinks.webp", alt: "A tray of five signature cocktails with dried citrus" },
            { src: "/media/coupes-menu-sign.webp", alt: "Two coupe cocktails in front of a signature cocktail menu" },
            { src: "/media/champagne-tower.jpg", alt: "A bride pouring a champagne tower at a reception" },
            { src: "/media/coupes-sunflowers.webp", alt: "Two coupe cocktails beside sunflowers" },
          ]}
        />
      </Section>

      <CtaBand />
    </>
  );
}
