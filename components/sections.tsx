import Image from "next/image";
import {
  BAR_SETUPS,
  WHY_TIPSY,
  REVIEWS,
  COCKTAILS,
  COCKTAIL_CATEGORIES,
  SOCIAL_TILES,
  SITE,
  INQUIRY_HREF,
  COPY,
  FEATURED_CLIENTS,
} from "@/lib/content";
import { Button, Heading, Photo, Section } from "@/components/primitives";

export function BarOptions() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {BAR_SETUPS.map((bar) => (
        <article key={bar.name} className="text-center">
          <Photo
            src={bar.image}
            alt={bar.alt}
            className="aspect-[4/5]"
            sizes="(max-width: 768px) 100vw, 33vw"
            objectPosition={bar.objectPosition}
          />
          <h3 className="mt-5 text-3xl leading-tight">{bar.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{bar.description}</p>
        </article>
      ))}
    </div>
  );
}

export function BarShowcase() {
  return (
    <div>
      <div className="mb-10 flex flex-col items-center gap-6 text-center">
        <div>
          <Heading>Three looks for your bar</Heading>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-soft">
            A look at the bar setups from our events. Tell us which style you
            have in mind when we plan your celebration.
          </p>
        </div>
        <div className="shrink-0"><Button href="/pricing">Explore our packages</Button></div>
      </div>
      <BarOptions />
    </div>
  );
}

export function WhyTipsyList({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`grid gap-x-12 ${compact ? "gap-y-4" : "gap-y-7 md:grid-cols-2"}`}>
      {WHY_TIPSY.map((item, index) => (
        <li key={item.title} className="flex gap-5">
          <span className="shrink-0 font-accent text-[1.75rem] font-medium leading-tight text-brass" aria-hidden>
            0{index + 1}
          </span>
          <div>
            <h3 className="font-accent text-[1.75rem] leading-tight">{item.title}</h3>
            <p className={`${compact ? "mt-2 leading-normal" : "mt-3 leading-relaxed"} text-[0.9375rem] text-ink-soft`}>
              {item.detail}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Reviews({ limit, tone = "ivory" }: { limit?: number; tone?: "ivory" | "blush" }) {
  const list = limit ? REVIEWS.slice(0, limit) : REVIEWS;
  return (
    <div
      className={`grid gap-6 ${limit === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}
    >
      {list.map((review) => (
        <figure
          key={review.name}
          className={`flex flex-col rounded-2xl p-7 sm:p-8 ${tone === "blush" ? "bg-blush" : "bg-warmwhite"}`}
        >
          <span
            className="mb-5 font-serif text-5xl leading-none text-brass"
            aria-hidden
          >
            “
          </span>
          <blockquote className="flex-1 font-accent text-[22px] font-medium leading-[1.55] text-ink-strong sm:text-2xl">
            {review.quote}
          </blockquote>
          <figcaption className="mt-8 text-base font-normal tracking-normal text-ink-soft">
            {review.name}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function FeaturedClients() {
  return (
    <Section id="featured-clients" className="pt-0!">
      <div className="rounded-2xl bg-blush px-6 py-10 sm:px-10 sm:py-12">
        <Heading className="text-center">A few brands we’ve poured for</Heading>
        <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-2 items-center gap-6 lg:grid-cols-4 lg:gap-10">
          {FEATURED_CLIENTS.filter((client) => client.logo).map((client) => (
            <li key={client.name}>
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${client.name} website (opens in a new tab)`}
                className="group flex min-h-28 items-center justify-center rounded-xl sm:min-h-36"
              >
                <svg
                  viewBox={client.logoViewBox}
                  aria-hidden="true"
                  className="h-auto shrink-0 text-black transition-colors duration-200 group-hover:text-[#aaa6a3] group-focus-visible:text-[#aaa6a3]"
                  style={{ width: `${client.displayScale * 100}%`, maxWidth: client.displayWidth }}
                >
                  <defs>
                    <filter id={`client-logo-${client.name.replaceAll(" ", "-")}`} colorInterpolationFilters="sRGB">
                      {/* Remove white image backgrounds while preserving the source artwork's alpha. */}
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -3 -3 -3 0 8.4"
                        result="ink"
                      />
                      <feComposite in="ink" in2="SourceAlpha" operator="in" result="artwork" />
                      <feFlood floodColor="currentColor" result="color" />
                      <feComposite in="color" in2="artwork" operator="in" />
                    </filter>
                  </defs>
                  <image
                    href={client.logo}
                    width={client.logoWidth}
                    height={client.logoHeight}
                    filter={`url(#client-logo-${client.name.replaceAll(" ", "-")})`}
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function CocktailMenu() {
  return (
    <div className="space-y-16 text-center">
      {COCKTAIL_CATEGORIES.map((category) => (
        <section key={category}>
          <div className="mb-8 border-b border-brass-soft pb-5">
            <h2 className="text-4xl">{category}</h2>
          </div>
          <ul className="grid gap-x-16 gap-y-8 sm:grid-cols-2">
            {COCKTAILS.filter((c) => c.category === category).map((c) => (
              <li key={c.name}>
                <h3 className="text-2xl">{c.name}</h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                  {c.spec}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function SocialPreview() {
  return (
    <Section id="behind-the-bar">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <Heading>A look at our events</Heading>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/gallery">View the Gallery</Button>
          <Button variant="outline" href={SITE.instagram} external>
            Open Instagram
          </Button>
        </div>
      </div>
      <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {SOCIAL_TILES.map((tile) => (
          <a
            key={tile.src}
            href={tile.postUrl || SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${tile.alt}. Open Instagram ${tile.postUrl ? "post" : "profile"} in a new tab`}
            className="relative block"
          >
            <Photo
              src={tile.src}
              alt={tile.alt}
              className="aspect-[4/5]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </a>
        ))}
      </div>
    </Section>
  );
}

export function CtaBand() {
  return (
    <section
      id="closing-inquiry"
      className="relative isolate overflow-hidden bg-ink text-warmwhite"
    >
      <Image
        src="/media/cta-cups.png"
        alt="Tipsy Blondes signature cocktails in custom event cups"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[50%_65%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/60" />
      <div className="mx-auto flex min-h-[380px] max-w-4xl flex-col items-center justify-center px-6 py-12 text-center sm:px-10 sm:py-16">
        <Heading className="text-balance">Let’s talk about your event.</Heading>
        <p className="mt-5 w-full text-base leading-relaxed text-cream sm:text-lg">
          {COPY.closing}
        </p>
        <div className="mt-7">
          <Button href={INQUIRY_HREF} variant="light">
            Chat with us
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Section className="max-w-4xl! pb-12! text-center">
      <Heading as="h1" size="xl">
        {title}
      </Heading>
      <p className="mx-auto mt-6 w-full leading-relaxed text-ink-soft">
        {description}
      </p>
    </Section>
  );
}
