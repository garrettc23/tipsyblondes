import Image from "next/image";
import {
  PACKAGES,
  INCLUDED,
  REVIEWS,
  FEATURED_REVIEWS,
  COCKTAILS,
  BARS,
  BOOKING,
  INQUIRY,
  PRICE_NOTE,
} from "@/lib/content";
import { Button, Eyebrow, Heading } from "@/components/primitives";

export function PricingPackages() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {PACKAGES.map((pkg) => (
        <article
          key={pkg.name}
          className="flex flex-col rounded-2xl border border-blush bg-warmwhite p-7 sm:p-10"
        >
          <p className="label">
            {pkg.barIncluded ? "We bring the bar" : "You have the bar"}
          </p>
          <h2 className="mt-4 text-4xl">{pkg.name}</h2>
          <p className="mt-6 text-sm text-ink-soft">
            Starting at{" "}
            <span className="ml-1 font-serif text-5xl text-ink">
              ${pkg.startingPrice.toLocaleString("en-US")}
            </span>
          </p>
          {pkg.priceIsPlaceholder && (
            <p className="mt-3 text-xs leading-relaxed text-ink-soft">
              {PRICE_NOTE}
            </p>
          )}
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            {pkg.blurb}
          </p>
          <p className="my-6 border-y border-blush py-4 text-sm font-medium">
            {pkg.barIncluded
              ? "Physical bar included"
              : "Physical bar not included"}
          </p>
          <div className="mt-auto">
            <Button href={INQUIRY.href}>{INQUIRY.label}</Button>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Inclusions() {
  return (
    <ul className="mt-8 grid gap-x-10 gap-y-3 text-sm text-ink-soft sm:grid-cols-2 lg:grid-cols-3">
      {INCLUDED.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="text-brass">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Reviews() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {FEATURED_REVIEWS.map((name) =>
        REVIEWS.find((review) => review.name === name),
      )
        .filter((review) => review !== undefined)
        .map((review) => (
          <figure
            key={review.name}
            className="flex flex-col rounded-2xl border border-blush bg-warmwhite p-7 sm:p-8"
          >
            <span
              aria-hidden
              className="font-serif text-6xl leading-none text-blush-deep"
            >
              “
            </span>
            <blockquote className="flex-1 text-base leading-[1.8] text-ink-soft">
              {review.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-blush pt-5 font-serif text-2xl">
              {review.name}
            </figcaption>
          </figure>
        ))}
    </div>
  );
}

export function HowItWorks() {
  return (
    <ol className="mt-10 grid gap-8 md:grid-cols-3">
      {BOOKING.map((step) => (
        <li key={step.n} className="border-t border-blush pt-6">
          <span className="font-serif text-3xl text-brass">0{step.n}</span>
          <h3 className="mt-4 text-2xl">{step.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            {step.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function BarGallery() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-3">
      {BARS.map((bar) => (
        <figure key={bar.name}>
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-t-[5rem] border border-blush bg-warmwhite">
            {bar.photo && !bar.photoIsPlaceholder ? (
              <Image
                src={bar.photo.src}
                alt={bar.photo.alt}
                fill
                sizes="(max-width: 640px) 90vw, 33vw"
                className="object-cover"
              />
            ) : (
              <div className="px-6 text-center">
                <span
                  aria-hidden
                  className="block font-serif text-4xl text-blush-deep"
                >
                  ✧
                </span>
                <p className="mt-3 text-sm text-ink-soft">Photo coming soon</p>
                <p className="mt-1 text-xs text-ink-soft">
                  Awaiting a confirmed photo
                </p>
              </div>
            )}
          </div>
          <figcaption className="mt-5 text-center font-serif text-2xl">
            {bar.name} <span className="text-ink-soft">· {bar.size}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function CocktailMenu() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {COCKTAILS.map((photo) => (
        <figure key={photo.src}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 90vw, 33vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-5 font-serif text-2xl">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function CtaBand({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={
        compact
          ? "border-y border-blush bg-blush/40"
          : "border-t border-blush bg-blush/50"
      }
      aria-label="Start your booking"
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-7 px-6 text-center sm:px-8 ${compact ? "py-10 md:flex-row md:justify-between md:text-left" : "py-16 sm:py-20"}`}
      >
        <div>
          <Eyebrow>We’d love to celebrate with you</Eyebrow>
          <Heading className="mt-3" accent={compact ? undefined : "together."}>
            {compact ? "Have a date in mind?" : "Let’s make it yours,"}
          </Heading>
          {!compact && (
            <p className="mt-5 text-base text-ink-soft">
              Tell us a little about your plans. We’ll take it from there.
            </p>
          )}
        </div>
        <Button href={INQUIRY.href}>
          {INQUIRY.softLabel} <span aria-hidden>↗</span>
        </Button>
      </div>
    </section>
  );
}
