// Single source of truth for site content. Copy is written for SEO/AEO and
// kept in a natural, human voice. No em dashes anywhere.

export const SITE = {
  name: "Tipsy Blondes",
  tagline: "Mobile Bar and Bartending",
  description:
    "Mobile bartending with Amber and Taylor in Orange County, Los Angeles, San Diego, and Palm Springs. Custom cocktail menus for weddings, parties, and brand events.",
  url: "https://tipsyblondes.vercel.app",
  area: "Orange County, California",
  serviceAreas: ["Orange County", "Los Angeles", "San Diego", "Palm Springs"],
  serviceAreaDescription: "Orange County, Los Angeles, San Diego, Palm Springs, and surrounding areas",
  foundedYear: 2024,
  founders: ["Taylor Larson", "Amber Arrington"],
  award: "Two-time Best of Weddings",
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
};

export type NavLink = { href: string; label: string };

export const INQUIRY_HREF = "/contact";

export const NAV: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Bar & Packages" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
];

export const FOOTER_NAV_GROUPS = [
  {
    title: "Explore",
    links: [
      ...NAV.filter((link) => ["/", "/menu", "/about"].includes(link.href)),
      { href: "/reviews", label: "Reviews" },
    ],
  },
  {
    title: "Your event",
    links: NAV.filter((link) =>
      ["/pricing", "/gallery", "/faq"].includes(link.href),
    ),
  },
];

export const PUBLIC_PAGES = [
  "/",
  "/pricing",
  "/menu",
  "/gallery",
  "/about",
  "/faq",
  "/reviews",
  "/contact",
];

export const BAR = {
  name: "Our white bar",
  description:
    "White panels and a warm wood top give us a simple starting point for your event. We’ll work with your colors and cocktail menu so the bar feels at home with the rest of your celebration.",
  image: "/media/bar-tipsy-blondes.jpg",
  alt: "Tipsy Blondes white bar with a wood top, brass lamps, and fresh greenery",
};

// Descriptive labels for the local review, not final product names. The two
// additional photographed setups need the client's ownership/availability check.
export const BAR_SETUPS = [
  {
    name: "White panel bar",
    image: BAR.image,
    alt: BAR.alt,
    objectPosition: "50% 65%",
    description: "White panels, a warm wood counter, and brass lamps.",
    confirmed: true,
  },
  {
    name: "Natural wood bar",
    image: "/media/bar-wood-orchard.jpg",
    alt: "A natural wood bar with decorative panels at an outdoor event",
    objectPosition: "50% 85%",
    description: "Natural wood with decorative panels and a light countertop.",
    confirmed: false,
  },
  {
    name: "White bar with arched shelving",
    image: "/media/bar-arch-shelf.webp",
    alt: "A white bar with geometric panels and arched wood shelves behind it",
    objectPosition: "50% 65%",
    description: "Geometric white panels paired with arched wood shelving.",
    confirmed: false,
  },
];

// Client relationships named in Taylor's voice memo. Add further brands only
// after their event and permission to feature them are confirmed.
export const FEATURED_CLIENTS = [
  {
    name: "DermFx", website: "https://www.dermfx.com/",
    logo: "/media/clients/dermfx.svg", logoWidth: 282, logoHeight: 176,
    logoViewBox: "0 0 282 176", displayWidth: 180, displayScale: 0.9,
  },
  // Brand identity confirmed by the client via dosedaily.co.
  {
    name: "Dose", website: "https://dosedaily.co/",
    logo: "/media/clients/dose.svg", logoWidth: 100, logoHeight: 33,
    logoViewBox: "0 0 100 33", displayWidth: 140, displayScale: 0.7,
  },
  {
    name: "LSPACE", website: "https://www.lspace.com/",
    logo: "/media/clients/lspace.svg", logoWidth: 115, logoHeight: 24,
    logoViewBox: "0 1 115 22", displayWidth: 185, displayScale: 0.95,
  },
  {
    name: "Swirl Boutique", website: "https://swirlboutique.com/",
    logo: "/media/clients/swirl-boutique.png", logoWidth: 480, logoHeight: 320,
    logoViewBox: "32 53 419 198", displayWidth: 215, displayScale: 1,
  },
];

export type SocialTile = { src: string; alt: string; postUrl?: string };
// Curated from the public Tipsy Blondes profile; each thumbnail matches its post.
export const SOCIAL_TILES: SocialTile[] = [
  {
    src: "/media/social-cocktail-menu.jpg",
    alt: "Citrus-garnished cocktails beside flowers and bar supplies",
    postUrl: "https://www.instagram.com/tipsyblondesoc/reel/DRQL8gxkuFR/",
  },
  {
    src: "/media/social-amber-taylor.jpg",
    alt: "Amber and Taylor together behind the bar",
    postUrl: "https://www.instagram.com/tipsyblondesoc/reel/DPS0OHADtdO/",
  },
  {
    src: "/media/setup-detail.jpg",
    alt: "Wedding guests holding orange cocktails",
    postUrl: "https://www.instagram.com/tipsyblondesoc/p/DPIYNAAEXRy/",
  },
  {
    src: "/media/champagne-tower.jpg",
    alt: "A bride pouring champagne into a tower of glasses",
    postUrl: "https://www.instagram.com/tipsyblondesoc/p/DQs8JAqEcnd/",
  },
];

export const WHY_TIPSY = [
  {
    title: "Personal service",
    detail: "Ask questions, share ideas, and plan with people who care about your celebration."
  },
  {
    title: "Fresh ingredients, prepared in-house",
    detail: "We prepare fresh juices and ingredients before your guests arrive. You’ll taste the care in every drink."
  },
  {
    title: "A bar that fits your plans",
    detail: "For weddings, parties, and brand events, we tailor the menu and setup to your guests and budget, with clear inclusions."
  },
  {
    title: "Keep cocktail hour moving",
    detail: "Worried about long lines? We organize the bar to help guests get their drinks and get back to the party."
  }
];

// Narrative copy grounded in the client voice memo and written feedback.
export const COPY = {
  home: {
    hero: "Your guests should feel looked after, and so should you. We’re Amber and Taylor, the best friends behind Tipsy Blondes. We bring fresh ingredients and a cocktail menu made for your occasion, with a warm welcome for everyone who comes up to the bar.",
    founders: [
      "We’re Amber Arrington and Taylor Larson, best friends and the owners of Tipsy Blondes. We started our mobile bartending business in 2024, and many of the people who book us have already met us at a party or heard about us from a friend. That means a lot to us.",
      "We want you to feel that same connection when you work with us. Tell us what you love to drink and what you’re planning. We’ll help you put the bar together, welcome your guests at the bar, and take care of service while you enjoy the occasion."
    ],
    why: "You’ve brought everyone together. We’ll take care of the drinks."
  },
  about: {
    intro: [
      "We’re Taylor Larson and Amber Arrington, best friends and business partners. We started Tipsy Blondes in 2024, and today we bring our mobile bar to weddings, private parties, and brand events from our home base in Orange County.",
      "A lot of our bookings start with someone who has already spent an evening with us. They’ve been a guest at a wedding we worked, or a friend has passed along our name. Knowing that someone enjoyed having us there enough to recommend us is a huge compliment. That’s the kind of business we want to keep building: one where you’re happy to pass our name to a friend.",
      "Planning a bar can feel like a lot when you’re already organizing an event. Bring us your ideas, even if they’re only half-formed. We’ll help you choose the drinks and work out the setup, with fresh ingredients we prepare ourselves and service planned around your guests."
    ],
    personalHeading: "We’ll take care of your people.",
    personal: "You’ve brought your favorite people together. We’ll make them feel at home at the bar, whether they’re ordering their usual or asking us to suggest something new. With the drinks taken care of, you can catch up with friends and enjoy the celebration you planned."
  },
  services: {
    intro: "Choose bartending for a bar you already have, or let us bring our white bar along. Both packages include a custom cocktail menu and the supplies for service. We’ll help you choose what works for your venue and guests.",
    packageAlcohol: "With either package, we’ll create a shopping list that shows exactly what alcohol to buy and how much, tailored to your menu and guest count.",
    alcohol: "You buy the alcohol, and we give you a shopping list based on your menu and guest count. We bring the bartenders and supplies, prepare the ingredients, and handle setup and breakdown. You can leave the bar to us once the party starts.",
    venue: "If your venue already has a bar, we can work with it. Tell us what’s there and we’ll plan the service around your space.",
    booking: "Start by sending us your event details. We’ll talk through what you need and put together a quote. Once you’re ready to book, here’s how we get everything in place."
  },
  menu: {
    heading: "Example cocktails for your custom menu",
    intro: "These examples show what your bar could serve. Your menu will be fully custom, tailored to what you and your guests love to drink and the party you want to host. We’ll work with you to choose every cocktail and non-alcoholic option.",
    nonAlcoholic: "We make non-alcoholic drinks, too. Whether you want mocktails alongside your cocktails or an entirely alcohol-free menu, we’ll help you choose drinks for the occasion. Tell us what you and your guests like when we plan your menu."
  },
  gallery: "Here’s a look at the drinks we’ve made, the bars we’ve set up, and the people who have invited us to be part of their celebrations. Have a look around and see what catches your eye for your own event.",
  contact: "Tell us a little about the occasion, your date, and where you’re hosting. If you already have a favorite cocktail or a few ideas, we’d love to hear them. If you’re still figuring things out, that’s a good place to start, too.",
  faq: "You may be wondering who buys the alcohol, what we bring, or how to reserve your date. We’ve answered those questions here. If yours is more specific to your plans, send it our way.",
  reviews: "Our clients have told us about the questions we helped answer, the drinks their guests loved, and the relief of seeing cocktail hour run smoothly. Here are their words.",
  closing: "Have a date in mind? Tell us what you’re celebrating and what you’d love to serve. We’ll help you work out the bar so you can look forward to the party.",
  footer: "Fresh cocktails and personal service from Amber and Taylor."
};

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

export type ServicePackage = {
  name: string;
  summary: string;
  description: string;
  includesBar: boolean;
};

export const PACKAGES: ServicePackage[] = [
  {
    name: "Tipsy Blonde Package",
    summary: "Our white bar, with full bartending service",
    description:
      "Everything in the Pop Up Bar Package, with our white bar included. We’ll bring it to your venue, set it up for your event, and take it down afterward. We’ll plan your custom cocktail menu together, and you provide the alcohol.",
    includesBar: true,
  },
  {
    name: "Pop Up Bar Package",
    summary: "For events with a bar already in place",
    description:
      "Have a bar at your venue? We’ll bring the bartenders, supplies, and ingredients, and plan a custom cocktail menu with you. You provide the bar and alcohol; we handle setup, service, and breakdown.",
    includesBar: false,
  },
];

export type PackageAddOn = { name: string; description: string };
// Populate only with client-confirmed add-ons; no speculative offers in the UI.
export const PACKAGE_ADD_ONS: PackageAddOn[] = [];

export type BookingStep = { n: number; title: string; detail: string };

export const BOOKING: BookingStep[] = [
  {
    n: 1,
    title: "Reserve your date",
    detail:
      "A retainer and signed service agreement reserve your date.",
  },
  {
    n: 2,
    title: "Plan your menu",
    detail:
      "We’ll meet to choose your cocktails and give you an alcohol shopping list based on the menu and how many guests are coming.",
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
    detail:
      "We’ll arrive to set up the bar and get ready for your guests. Once service starts, you can leave the drinks to us.",
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

export type Faq = { id: string; q: string; a: string; draft?: boolean };

export const FAQS: Faq[] = [
  {
    id: "event-types",
    q: "Does Tipsy Blondes bartend for private parties and business events?",
    a: "Yes. We bartend for weddings and private celebrations, as well as company parties and brand events. Whether you’re hosting friends or welcoming clients, we’ll plan the drinks and bar setup around your guests and the occasion.",
  },
  {
    id: "insurance",
    q: "Is Tipsy Blondes insured?",
    a: "Yes. Tipsy Blondes carries general and liquor liability insurance. If your venue needs insurance documentation, let us know during planning.",
  },
  {
    id: "non-alcoholic",
    draft: true,
    q: "Does Tipsy Blondes serve non-alcoholic drinks?",
    a: "Yes. We serve non-alcoholic drinks and can include mocktails in your custom menu or plan an entirely alcohol-free event. Let us know what your guests enjoy, and we’ll work through the flavors and options with you. Guests who aren’t drinking alcohol can order from the bar along with everyone else.",
  },
  {
    id: "alcohol",
    q: "Does Tipsy Blondes provide the alcohol?",
    a: "No. We are a dry bar service, which means you purchase the alcohol. We help you with a shopping list based on your guest count and menu, then bring the bartenders, mixers, ice, garnishes, and bar tools.",
  },
  {
    id: "areas",
    q: "What areas does Tipsy Blondes serve?",
    a: "We serve Orange County, Los Angeles, San Diego, Palm Springs, and surrounding areas. We’re based in Orange County and travel to your venue. Include the location in your inquiry so we can work out travel and setup details for your event.",
  },
  {
    id: "custom-menu",
    q: "Can I customize the cocktail menu?",
    a: "Yes. We create a custom menu for your event. The cocktails on our menu page are examples to help you get started. Tell us your favorite drinks, flavors you like, and anything you’d rather leave out. We’ll help you choose cocktails and non-alcoholic options for your guests.",
  },
  {
    id: "cost",
    q: "How much does Tipsy Blondes charge?",
    a: "We price each event individually. Send us your date, venue, approximate guest count, and the service you’re looking for. We’ll talk through what you need and send you a quote with the details of what’s included.",
  },
  {
    id: "booking",
    q: "How do I book Tipsy Blondes?",
    a: "Start with our inquiry form. Once we have planned your service, an $800 retainer and signed agreement reserve your date. The remaining balance is due one month before your event.",
  },
  {
    id: "timing",
    q: "When should I book Tipsy Blondes?",
    a: "Reach out when you have a date in mind, even if the rest is still taking shape. We can check availability and start talking through the bar while you work on the other details.",
  },
];
