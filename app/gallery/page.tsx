import type { Metadata } from "next";
import { Section, Eyebrow, Heading } from "@/components/primitives";
import { CtaBand } from "@/components/sections";
import MediaGrid, { type MediaItem } from "@/components/MediaGrid";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See Tipsy Blondes OC in action. Photos and video from weddings and events across Orange County, from bar setups to signature cocktails.",
  alternates: { canonical: "https://tipsyblondesoc.com/gallery" },
};

// Every unique photo and video, duplicates removed. Tap a video to pause or skip.
const MEDIA: MediaItem[] = [
  { type: "video", src: "/media/clip-1.mp4", alt: "A Tipsy Blondes OC bartender crafting a cocktail at an event" },
  { type: "image", src: "/media/tray-five-drinks.webp", alt: "A wood tray of five signature Tipsy Blondes OC cocktails with dried citrus" },
  { type: "image", src: "/media/owners-bar.webp", alt: "Tipsy Blondes OC founders beside their signature white bar" },
  { type: "video", src: "/media/clip-2.mp4", alt: "A signature cocktail being shaken behind the bar" },
  { type: "image", src: "/media/marg-brick-wall.webp", alt: "A tajin-rimmed margarita with lime held against a white brick wall" },
  { type: "image", src: "/media/bar-tipsy-blondes.jpg", alt: "The signature white Tipsy Blondes OC bar with a printed drinks menu" },
  { type: "video", src: "/media/clip-3.mp4", alt: "Garnishing a fresh cocktail at a wedding bar" },
  { type: "image", src: "/media/coupes-sunflowers.webp", alt: "Two coupe cocktails with sugared rims beside sunflowers" },
  { type: "image", src: "/media/drink-garnish-hand.webp", alt: "A signature cocktail being garnished with a dried orange slice" },
  { type: "video", src: "/media/clip-4.mp4", alt: "Pouring a signature drink at a Tipsy Blondes OC event" },
  { type: "image", src: "/media/bar-arch-shelf.webp", alt: "An elegant white bar with an arched wood shelf, glassware, and florals" },
  { type: "image", src: "/media/coupes-menu-sign.webp", alt: "Two coupe cocktails in front of a signature cocktail menu" },
  { type: "video", src: "/media/clip-5.mp4", alt: "A cocktail being finished with a garnish" },
  { type: "image", src: "/media/cocktail-tajin.webp", alt: "A signature margarita with a chili-salt rim" },
  { type: "image", src: "/media/champagne-tower.jpg", alt: "A bride pouring a champagne tower at a wedding reception" },
  { type: "video", src: "/media/clip-6.mp4", alt: "Behind the bar at a Tipsy Blondes OC event" },
  { type: "image", src: "/media/marg-signature-drinks.webp", alt: "A spicy mango margarita beside a custom signature drinks menu" },
  { type: "image", src: "/media/mirror-need-a-drink.jpg", alt: "Two cocktails garnished with dried citrus on a gold mirror tray" },
  { type: "video", src: "/media/clip-7.mp4", alt: "Mixing a signature cocktail for guests" },
  { type: "image", src: "/media/floral-bar-menu-urn.webp", alt: "A blush floral arrangement and bar menu on a cocktail table" },
  { type: "image", src: "/media/bar-the-bar-menu.jpg", alt: "The Tipsy Blondes OC bar with a shell logo and cocktail menu" },
  { type: "video", src: "/media/clip-8.mp4", alt: "A quick pour behind the Tipsy Blondes OC bar" },
  { type: "image", src: "/media/drink-tajin-bottles.webp", alt: "A tajin-rimmed cocktail with dried lime beside amber bottles" },
  { type: "image", src: "/media/bar-wood-full.webp", alt: "Cocktail service at an outdoor Tipsy Blondes OC event" },
  { type: "image", src: "/media/cups-detail.webp", alt: "Custom printed event cups for signature cocktails" },
  { type: "image", src: "/media/setup-detail.jpg", alt: "Guests holding signature martinis at an event" },
  { type: "image", src: "/media/drinks-lspace.webp", alt: "Signature Tipsy Blondes OC cocktails styled at a brand event" },
  { type: "image", src: "/media/owners-wide.webp", alt: "Tipsy Blondes OC founders Taylor Larson and Amber Arrington toasting behind their floral event bar" },
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

      <Section className="pb-8 text-center">
        <Eyebrow>The gallery</Eyebrow>
        <Heading as="h1" className="mt-3" accent="action" size="xl">
          Tipsy Blondes in
        </Heading>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
          A look at our bars, our drinks, and the moments in between from Orange County
          weddings and events. Use the player on any video to pause or skip ahead.
        </p>
      </Section>

      <Section className="pt-0">
        <MediaGrid items={MEDIA} />
      </Section>

      <CtaBand />
    </>
  );
}
