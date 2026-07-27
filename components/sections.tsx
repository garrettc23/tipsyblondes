import Image from "next/image";
import {
  OCCASIONS,
  PACKAGES,
  INCLUDED,
  REVIEWS,
  COCKTAILS,
  COCKTAIL_CATEGORIES,
} from "@/lib/content";
import { Button, Eyebrow, Heading } from "@/components/primitives";

export function OccasionBand() {
  const loop = [...OCCASIONS, ...OCCASIONS];
  return (
    <div className="border-y border-brass/15 bg-warmwhite py-9">
      <p className="label text-center">The events we pour for</p>
      <div className="marquee mt-6">
        <div className="marquee-track">
          {loop.map((o, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="px-7 text-lg uppercase tracking-[0.2em] text-ink-soft sm:text-2xl">
                {o}
              </span>
              <span className="text-sm text-brass" aria-hidden>
                &#10022;
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PackageCard({
  name,
  price,
  blurb,
  popular,
}: {
  name: string;
  price: string;
  blurb: string;
  popular?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-sm border bg-warmwhite p-8 ${
        popular ? "border-brass card-shadow" : "border-brass/25"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-8 pill bg-brass px-4 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-warmwhite">
          Most Requested
        </span>
      )}
      <h3 className="text-2xl">{name}</h3>
      <p className="mt-2 font-serif text-5xl text-brass">{price}</p>
      <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{blurb}</p>
      <div className="mt-6">
        <Button href="/contact" variant={popular ? "solid" : "outline"}>
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export function Packages() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {PACKAGES.map((p) => (
        <PackageCard key={p.name} {...p} />
      ))}
    </div>
  );
}

/** Detailed package cards: price, description, and the full what's-included list. */
export function PricingPackages() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {PACKAGES.map((p) => (
        <div
          key={p.name}
          className={`relative flex flex-col rounded-sm border bg-warmwhite p-8 ${
            p.popular ? "border-brass card-shadow" : "border-brass/25"
          }`}
        >
          {p.popular && (
            <span className="absolute -top-3 left-8 pill bg-brass px-4 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-warmwhite">
              Most Requested
            </span>
          )}
          <h3 className="text-2xl">{p.name}</h3>
          <p className="mt-2 font-serif text-5xl text-brass">{p.price}</p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{p.blurb}</p>

          <div className="mt-6 border-t border-brass/15 pt-6">
            <p className="label mb-4">What is included</p>
            <ul className="space-y-2.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                  <svg
                    className="mt-0.5 shrink-0 text-brass"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button href="/contact" variant={p.popular ? "solid" : "outline"}>
              Contact Us
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ReviewCard({ quote, name }: { quote: string; name: string }) {
  return (
    <figure className="flex h-full flex-col rounded-sm border border-brass/20 bg-cream p-8">
      <div className="flex gap-1 text-brass" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-sm">
            &#9733;
          </span>
        ))}
      </div>
      <span className="mt-4 font-serif text-6xl leading-[0.4] text-brass/25" aria-hidden>
        &ldquo;
      </span>
      <blockquote className="mt-3 flex-1 font-serif text-lg leading-relaxed text-ink">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="h-px w-6 bg-brass" />
        <span className="text-xs uppercase tracking-[0.22em] text-brass">{name}</span>
      </figcaption>
    </figure>
  );
}

export function Reviews({ limit }: { limit?: number }) {
  const list = limit ? REVIEWS.slice(0, limit) : REVIEWS;
  return (
    <div className="grid items-stretch gap-6 md:grid-cols-3">
      {list.map((r) => (
        <ReviewCard key={r.name} {...r} />
      ))}
    </div>
  );
}

export function CocktailMenu() {
  return (
    <div className="space-y-14">
      {COCKTAIL_CATEGORIES.map((cat) => (
        <div key={cat}>
          <div className="mb-6 flex items-center gap-4">
            <h3 className="text-2xl">{cat}</h3>
            <span className="rule flex-1" />
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {COCKTAILS.filter((c) => c.category === cat).map((c) => (
              <li key={c.name}>
                <p className="font-serif text-2xl text-ink">{c.name}</p>
                <p className="mt-1.5 text-base italic leading-relaxed text-ink-soft">{c.spec}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function CtaBand() {
  return (
    <div className="relative overflow-hidden bg-ink">
      <Image
        src="/media/cta-cups.png"
        alt="Custom Tipsy Blondes OC event cups holding signature cocktails"
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "50% 63%" }}
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="script text-4xl text-blush">You look like you need a drink</p>
        <Heading className="mt-3 text-warmwhite" size="xl">
          Let us pour your date
        </Heading>
        <div className="mt-9">
          <Button href="/contact" variant="solid">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
