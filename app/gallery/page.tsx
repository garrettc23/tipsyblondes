import type { Metadata } from "next";
import { COPY, SITE } from "@/lib/content";
import { Section, Heading, Button } from "@/components/primitives";
import { CtaBand } from "@/components/sections";
import MediaGrid, { type MediaItem } from "@/components/MediaGrid";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See Tipsy Blondes in action. Photos and video from weddings and events across Orange County, from bar setups to signature cocktails.",
  alternates: { canonical: "https://tipsyblondesoc.com/gallery" },
};

// A curated mix of event photography and playable videos.
const MEDIA: MediaItem[] = [
  {
    type: "image",
    src: "/media/marg-signature-drinks.webp",
    alt: "A spicy mango margarita beside a custom signature drinks menu",
  },
  {
    type: "video",
    src: "/media/clip-1.mp4",
    poster: "/media/clip-1-poster.jpg",
    alt: "A Tipsy Blondes bartender crafting a cocktail at an event",
  },
  {
    type: "image",
    src: "/media/drink-garnish-hand.webp",
    alt: "A signature cocktail being garnished with a dried orange slice",
  },
  {
    type: "image",
    src: "/media/bar-the-bar-menu.jpg",
    alt: "The Tipsy Blondes bar with a shell logo and cocktail menu",
  },
  {
    type: "video",
    src: "/media/clip-2.mp4",
    poster: "/media/clip-2-poster.jpg",
    alt: "A signature cocktail being shaken behind the bar",
  },
  {
    type: "image",
    src: "/media/drink-tajin-bottles.webp",
    alt: "A tajin-rimmed cocktail with dried lime beside amber bottles",
  },
  {
    type: "image",
    src: "/media/floral-bar-menu-urn.webp",
    alt: "A blush floral arrangement and bar menu on a cocktail table",
  },
  {
    type: "video",
    src: "/media/clip-3.mp4",
    poster: "/media/clip-3-poster.jpg",
    alt: "Garnishing a fresh cocktail at a wedding bar",
  },
  {
    type: "image",
    src: "/media/cups-detail.webp",
    alt: "Custom printed event cups for signature cocktails",
  },
  {
    type: "video",
    src: "/media/clip-4.mp4",
    poster: "/media/clip-4-poster.jpg",
    alt: "Pouring a signature drink at a Tipsy Blondes event",
  },
  {
    type: "image",
    src: "/media/bar-wood-full.webp",
    alt: "Cocktail service at an outdoor Tipsy Blondes event",
  },
  {
    type: "image",
    src: "/media/drinks-lspace.webp",
    alt: "Signature Tipsy Blondes cocktails styled at a brand event",
  },
  {
    type: "video",
    src: "/media/clip-5.mp4",
    poster: "/media/clip-5-poster.jpg",
    alt: "A cocktail being finished with a garnish",
  },
  {
    type: "image",
    src: "/media/setup-detail.jpg",
    alt: "Guests holding signature martinis at an event",
  },
  {
    type: "video",
    src: "/media/clip-6.mp4",
    poster: "/media/clip-6-poster.jpg",
    alt: "Behind the bar at a Tipsy Blondes event",
  },
  {
    type: "image",
    src: "/media/bar-wood-orchard.jpg",
    alt: "Cocktails and a bar setup at an outdoor Tipsy Blondes event",
  },
  {
    type: "video",
    src: "/media/clip-7.mp4",
    poster: "/media/clip-7-poster.jpg",
    alt: "Mixing a signature cocktail for guests",
  },
  {
    type: "video",
    src: "/media/clip-8.mp4",
    poster: "/media/clip-8-poster.jpg",
    alt: "A quick pour behind the Tipsy Blondes bar",
  },
];

export default function Gallery() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />

      <Section className="pt-12! pb-8! text-center sm:pt-16!">
        <Heading as="h1" className="mt-3" size="xl">
          Tipsy Blondes in action
        </Heading>
        <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-ink-soft">
          {COPY.gallery}
        </p>
        <div className="mt-6">
          <Button href={SITE.instagram} external>
            Open Instagram<span className="sr-only"> in a new tab</span>
          </Button>
        </div>
      </Section>

      <Section id="event-gallery" className="pt-4!">
        <MediaGrid items={MEDIA} />
      </Section>

      <CtaBand />
    </>
  );
}
