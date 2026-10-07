// Single source of truth for site content. Copy is written for SEO/AEO and
// kept in a natural, human voice. No em dashes anywhere.

export const SITE = {
  name: "Tipsy Blondes OC",
  tagline: "Mobile Bartending",
  url: "https://tipsyblondesoc.com",
  area: "Orange County, San Diego, Temecula, and beyond",
  foundedYear: 2024,
  founders: ["Taylor Larson", "Amber Arrington"],
  award: "2x The Knot Best of Weddings winner",
  phone: "714-886-0470",
  phoneHref: "tel:+17148860470",
  email: "tipsyblondesoc@gmail.com",
  instagram: "https://instagram.com/tipsyblondesoc",
  instagramHandle: "@tipsyblondesoc",
  linktree: "https://linktr.ee/tipsyblondesoc",
  theKnot:
    "https://www.theknot.com/marketplace/tipsy-blondes-oc-costa-mesa-ca-2087124",
  googleForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSfbj9Wn6GkY1qHapqIL-YgkzG8vkeALQmSwMYF4FSi1z_q_fw/viewform",
  priceRange: "$$",
};

export const INQUIRY = {
  href: "/contact#inquiry",
  label: "Start your booking",
  softLabel: "Grab your spot",
};

export const HOME = {
  headline: "Your celebration,",
  headlineAccent: "our personal touch.",
  intro:
    "We’re Taylor & Amber. We bring fresh cocktails, a beautiful bar, and the kind of care we’d want at our own celebration.",
  aboutTitle: "Hi, we’re Taylor & Amber.",
  about:
    "Best friends, bartenders, and the girls behind Tipsy Blondes. We love getting to know the people on the other side of the bar, from your first ideas to your last dance.",
  personal:
    "Your favorite flavors. The little details. Making your guests feel welcome. We treat every event like our own, and we’d love to be there for whatever you celebrate next.",
  aboutPhoto: {
    src: "/media/owners-wide.webp",
    alt: "Taylor and Amber sharing a smile behind the bar at an event",
  },
};

export type NavLink = { href: string; label: string };
export const EXPLORE: NavLink[] = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#bars", label: "Our bars" },
  { href: "/menu", label: "Cocktails" },
  { href: "/gallery", label: "Gallery" },
];
export const NAV: NavLink[] = [
  { href: "/#about", label: "About Us" },
  { href: "/#reviews", label: "Client love" },
  ...EXPLORE,
  { href: "/pricing", label: "Pricing" },
  { href: INQUIRY.href, label: INQUIRY.label },
];

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
};
export const STRIP_PHOTOS: Photo[] = [
  {
    src: "/media/owners-bar.webp",
    alt: "Taylor and Amber at an event behind their white bar",
    position: "50% 40%",
  },
  {
    src: "/media/tray-five-drinks.webp",
    alt: "A tray of freshly made cocktails",
  },
  {
    src: "/media/champagne-tower.jpg",
    alt: "A bride pouring champagne at her reception",
    position: "50% 40%",
  },
  {
    src: "/media/cocktail-tajin.webp",
    alt: "A colorful cocktail with a dressed rim",
  },
  {
    src: "/media/owners-wide.webp",
    alt: "Taylor and Amber sharing a smile behind the bar",
    position: "50% 40%",
  },
  {
    src: "/media/coupes-sunflowers.webp",
    alt: "Two cocktails beside a vase of sunflowers",
  },
];

export const INCLUDED = [
  "Setup and breakdown",
  "Cocktail menu planning",
  "Professional bartenders",
  "Water dispensers",
  "Bar tools and ice chests",
  "Fresh garnishes",
  "Ice",
  "Cups",
  "Mixers",
  "Napkins",
  "General and liquor liability insurance",
];
export type Pkg = {
  name: string;
  startingPrice: number;
  priceIsPlaceholder: boolean;
  blurb: string;
  barIncluded: boolean;
};
export const PRICE_NOTE =
  "Placeholder price — final starting price to be confirmed";
export const PRICING_NOTE =
  "Every event is different. Your custom quote is based on service hours and guest count. We’ll confirm travel and any extras with your quote.";
export const PACKAGES: Pkg[] = [
  {
    name: "Pop-up Bar",
    startingPrice: 800,
    priceIsPlaceholder: true,
    barIncluded: false,
    blurb:
      "Have a bar at your venue? We bring the bartenders, fresh ingredients, and everything needed to serve. You provide the bar and alcohol.",
  },
  {
    name: "Tipsy",
    startingPrice: 800,
    priceIsPlaceholder: true,
    barIncluded: true,
    blurb:
      "Let us bring the bar, too. Everything in Pop-up Bar, with one of our bars for your celebration. You provide the alcohol.",
  },
];
export const BOOKING = [
  {
    n: 1,
    title: "Tell us what you’re celebrating",
    detail:
      "Share your date, location, guest count, and service hours. We’ll get to know your plans and put together a custom quote.",
  },
  {
    n: 2,
    title: "Make it yours",
    detail:
      "Confirm your booking with a signed agreement and retainer, then plan your drinks with us. We’ll send an alcohol shopping list for your event.",
  },
  {
    n: 3,
    title: "Enjoy every moment",
    detail:
      "You bring the alcohol. We handle setup, the drinks, and cleanup, with a warm welcome for every guest.",
  },
];

export type Bar = {
  name: string;
  size: string;
  photo: Photo | null;
  photoIsPlaceholder: boolean;
};
// Exact sizes cannot be verified from the existing photos. Replace these slots
// with client-confirmed photos, then set photoIsPlaceholder to false.
export const BARS: Bar[] = [
  {
    name: "Signature white",
    size: "6 ft",
    photo: null,
    photoIsPlaceholder: true,
  },
  { name: "White", size: "4 ft", photo: null, photoIsPlaceholder: true },
  { name: "Wooden", size: "4 ft", photo: null, photoIsPlaceholder: true },
];
// Photo-led inspiration only. Do not add recipes or ingredient lists here.
export const COCKTAILS: Photo[] = [
  {
    src: "/media/cocktail-tajin.webp",
    alt: "A vibrant cocktail with a chili-salt rim",
    caption: "A little spice",
  },
  {
    src: "/media/tray-five-drinks.webp",
    alt: "A tray of five fresh cocktails ready for guests",
    caption: "Made for your people",
  },
  {
    src: "/media/coupes-sunflowers.webp",
    alt: "Two coupe cocktails beside sunflowers",
    caption: "Something to cheers to",
  },
];

export type Review = { quote: string; name: string; location?: string };

export const REVIEWS: Review[] = [
  {
    quote:
      "Tipsy Blondes OC really made my event one of a kind. Their personalized menu was the perfect addition and my guests loved the variety of drinks. These girls are the best to work with, and they make you feel like you are their number one priority.",
    name: "Alli",
  },
  {
    quote:
      "The booking process was so smooth and they answered all my questions before I even asked. I worried about long lines during cocktail hour, but there was never a wait. Our guests raved about the drinks. I highly recommend hiring Tipsy Blondes OC.",
    name: "Ryan H.",
  },
  {
    quote:
      "They were quick to respond and helped me choose the perfect cocktail menu for my big day. Professional yet so personable, and the drinks were beautifully crafted. They handled a high volume crowd with ease and kept everything running smoothly all night.",
    name: "Brit A.",
  },
  {
    quote:
      "Tipsy Blondes were amazing. They kept the party going all night and all of our guests had nothing but great things to say. Sweetest girls ever.",
    name: "Talia B.",
  },
];

export const FEATURED_REVIEWS = ["Alli", "Ryan H.", "Brit A."];

export type Faq = { q: string; a: string };
export const FAQS: Faq[] = [
  {
    q: "What is a dry bar service?",
    a: "You provide the alcohol; we take care of the bartending, mixers, ice, garnishes, tools, and cups. The Tipsy package includes a physical bar. With Pop-up Bar, you provide the bar.",
  },
  {
    q: "Do you provide the alcohol?",
    a: "No. You purchase your own alcohol using a shopping list we build around your guest count and menu.",
  },
  {
    q: "What areas do you serve?",
    a: `We serve ${SITE.area}. Tell us your location and we’ll confirm travel details in your custom quote.`,
  },
  {
    q: "How much does mobile bartending cost?",
    a:
      PRICING_NOTE +
      " The starting prices shown above are placeholders pending confirmation.",
  },
  {
    q: "How do I book Tipsy Blondes?",
    a: "Start with our inquiry form. After we confirm availability and your quote, a signed service agreement and booking retainer reserve your date. The retainer is a payment toward your booking, not an additional starting price.",
  },
  {
    q: "How far in advance should I book?",
    a: "Reach out once you have a date in mind so we can check availability together.",
  },
];

export type MediaItem = { type: "image" | "video"; src: string; alt: string };
export const GALLERY_MEDIA: MediaItem[] = [
  {
    type: "image",
    src: "/media/owners.webp",
    alt: "Taylor and Amber together behind the bar",
  },
  {
    type: "video",
    src: "/media/clip-1.mp4",
    alt: "Cocktail service at a Tipsy Blondes event",
  },
  {
    type: "image",
    src: "/media/drink-garnish-hand.webp",
    alt: "A freshly made cocktail with a dried citrus garnish",
  },
  {
    type: "image",
    src: "/media/drink-tajin-bottles.webp",
    alt: "A cocktail beside amber bottles",
  },
  {
    type: "video",
    src: "/media/clip-2.mp4",
    alt: "Behind the scenes with Tipsy Blondes",
  },
  {
    type: "image",
    src: "/media/cups-detail.webp",
    alt: "Personalized event cups",
  },
  {
    type: "image",
    src: "/media/bar-wood-full.webp",
    alt: "A wooden bar set up for an outdoor celebration",
  },
  {
    type: "image",
    src: "/media/drinks-lspace.webp",
    alt: "Cocktails at a brand event",
  },
  {
    type: "image",
    src: "/media/setup-detail.jpg",
    alt: "Guests holding cocktails at an event",
  },
  {
    type: "image",
    src: "/media/champagne-tower.jpg",
    alt: "A bride pouring a champagne tower",
  },
  {
    type: "video",
    src: "/media/clip-5.mp4",
    alt: "Preparing fresh garnishes before an event",
  },
  {
    type: "video",
    src: "/media/clip-6.mp4",
    alt: "Tipsy Blondes event service",
  },
  {
    type: "video",
    src: "/media/clip-7.mp4",
    alt: "A celebration with Tipsy Blondes",
  },
];
