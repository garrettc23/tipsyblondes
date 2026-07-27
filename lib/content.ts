// Single source of truth for site content. Copy is written for SEO/AEO and
// kept in a natural, human voice. No em dashes anywhere.

export const SITE = {
  name: "Tipsy Blondes OC",
  tagline: "Mobile Bartending",
  url: "https://tipsyblondesoc.com",
  area: "Orange County, California",
  foundedYear: 2024,
  founders: ["Taylor Larson", "Amber Arrington"],
  award: "2x The Knot Best of Weddings winner",
  phone: "714-886-0470",
  phoneHref: "tel:+17148860470",
  email: "tipsyblondesoc@gmail.com",
  instagram: "https://instagram.com/tipsyblondesoc",
  instagramHandle: "@tipsyblondesoc",
  linktree: "https://linktr.ee/tipsyblondesoc",
  theKnot: "https://www.theknot.com/marketplace/tipsy-blondes-oc-costa-mesa-ca-2087124",
  googleForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSfbj9Wn6GkY1qHapqIL-YgkzG8vkeALQmSwMYF4FSi1z_q_fw/viewform",
  priceRange: "$$",
};

export type NavLink = { href: string; label: string };

export const NAV: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const OCCASIONS = [
  "Weddings",
  "Birthdays",
  "Bridal Showers",
  "Baby Showers",
  "Corporate Events",
  "Graduations",
  "Holiday Parties",
];

export const INCLUDED = [
  "Setup and breakdown",
  "Signature cocktail menu planning",
  "Professional bartenders",
  "Water dispensers",
  "Bar tools and ice chests",
  "Fresh garnishes",
  "Ice",
  "Cups",
  "Mixers",
  "Napkins",
  "General and liquor liability insurance",
  "Travel",
];

export type Pkg = {
  name: string;
  price: string;
  blurb: string;
  popular?: boolean;
};

export const PACKAGES: Pkg[] = [
  {
    name: "Pop Up Bar Package",
    price: "$2,100",
    blurb:
      "Everything you need to pour a beautiful bar. Our full setup, professional bartenders, and a signature menu planned around your event.",
  },
  {
    name: "Tipsy Blonde Package",
    price: "$2,400",
    blurb:
      "Our most requested experience. The full pop up bar plus an elevated touch, dialed in with you during menu planning so every detail fits your day.",
    popular: true,
  },
];

export type BookingStep = { n: number; title: string; detail: string };

export const BOOKING: BookingStep[] = [
  {
    n: 1,
    title: "Reserve your date",
    detail:
      "An $800 retainer confirms your booking and we send over your service agreement.",
  },
  {
    n: 2,
    title: "Plan your menu",
    detail:
      "We schedule a menu planning meeting and hand you a detailed alcohol shopping list built for your guest count.",
  },
  {
    n: 3,
    title: "Settle the balance",
    detail: "The remaining balance is due one month before your event.",
  },
  {
    n: 4,
    title: "Confirm the alcohol",
    detail: "We confirm your alcohol purchases three days before the event.",
  },
  {
    n: 5,
    title: "Showtime",
    detail: "We arrive, set up, and pour. You get to actually enjoy your party.",
  },
];

export type Cocktail = {
  name: string;
  spec: string;
  category: "Margaritas & Palomas" | "Vodka & Gin" | "Timeless";
};

export const COCKTAILS: Cocktail[] = [
  {
    name: "Jalapeno Cucumber Margarita",
    spec: "Tequila, triple sec, lime juice, jalapeno-cucumber infused agave",
    category: "Margaritas & Palomas",
  },
  {
    name: "Prickly Pear Margarita",
    spec: "Tequila, triple sec, lime juice, prickly pear puree",
    category: "Margaritas & Palomas",
  },
  {
    name: "Guava Margarita",
    spec: "Tequila, guava, triple sec, fresh lime juice",
    category: "Margaritas & Palomas",
  },
  {
    name: "Coconut Aperol Margarita",
    spec: "Tequila, Aperol, fresh lime juice, cream of coconut",
    category: "Margaritas & Palomas",
  },
  {
    name: "Ranch Water Margarita",
    spec: "Tequila, fresh lime juice, agave, topped with Topo Chico",
    category: "Margaritas & Palomas",
  },
  {
    name: "Hot Honey Paloma",
    spec: "Tequila, hot honey, grapefruit juice, cranberry, fresh lime",
    category: "Margaritas & Palomas",
  },
  {
    name: "Paloma",
    spec: "Tequila, grapefruit juice, agave, lime, topped with Squirt",
    category: "Margaritas & Palomas",
  },
  {
    name: "Coconut Mojito",
    spec: "Light rum, fresh lime, simple syrup, muddled mint, coconut milk",
    category: "Vodka & Gin",
  },
  {
    name: "Coconut Moscow Mule",
    spec: "Vodka, cream of coconut, fresh lime, ginger beer",
    category: "Vodka & Gin",
  },
  {
    name: "Strawberry Lemon Drop",
    spec: "Vodka, fresh lemon, orange liqueur, strawberry drizzle",
    category: "Vodka & Gin",
  },
  {
    name: "Golden Shore",
    spec: "Vodka, pineapple juice, fresh lime, sparkling water",
    category: "Vodka & Gin",
  },
  {
    name: "White Linen",
    spec: "Gin, St. Germain elderflower, simple syrup, fresh lemon, cucumber, club soda",
    category: "Vodka & Gin",
  },
  {
    name: "Lavender Lace",
    spec: "Empress 1908 gin, fresh lemon, simple syrup, tonic",
    category: "Vodka & Gin",
  },
  {
    name: "Old Fashioned",
    spec: "Bourbon, simple syrup, cherry and orange bitters, maraschino cherries",
    category: "Timeless",
  },
  {
    name: "Lemon Drop Martini",
    spec: "Vodka, fresh lemon juice, orange liqueur, sugared rim",
    category: "Timeless",
  },
  {
    name: "Mother of Pearl Margarita",
    spec: "Tequila, guava nectar, triple sec, fresh lime juice",
    category: "Timeless",
  },
];

export const COCKTAIL_CATEGORIES: Cocktail["category"][] = [
  "Margaritas & Palomas",
  "Vodka & Gin",
  "Timeless",
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

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What is a dry bar service?",
    a: "A dry bar means we bring the full bar and you bring the alcohol. We provide setup, professional bartenders, mixers, ice, garnishes, tools, cups, and liability insurance. You buy the liquor yourself using a shopping list we build for your guest count and menu, which usually saves about 25 percent compared to a marked up open bar.",
  },
  {
    q: "Do you provide the alcohol?",
    a: "No. You purchase your own alcohol from a custom shopping list we send you. This keeps you in control of your budget and skips the liquor markup that comes with a traditional open bar.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Orange County and the surrounding Southern California area. Travel is included in every package.",
  },
  {
    q: "How much does mobile bartending cost?",
    a: "Our packages start at $2,100 for the Pop Up Bar and $2,400 for the Tipsy Blonde package. Every event gets a custom quote based on your guest count and menu.",
  },
  {
    q: "How do I book Tipsy Blondes OC?",
    a: "An $800 retainer and a signed service agreement lock in your date. From there we plan your menu, send your alcohol shopping list, and collect the balance one month before your event.",
  },
  {
    q: "How far in advance should I book?",
    a: "As early as you can. Weekend dates and wedding season fill up quickly, so reach out once you have a date in mind.",
  },
];
