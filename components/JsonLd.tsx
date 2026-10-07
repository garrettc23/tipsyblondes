import { SITE, PACKAGES, FAQS } from "@/lib/content";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Structured data for search and answer engines
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: `Mobile bartending for weddings and private events across ${SITE.area}. You provide the alcohol; we provide personal bartending service.`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/media/og.png`,
    logo: `${SITE.url}/media/logo.png`,
    priceRange: SITE.priceRange,
    award: "The Knot Best of Weddings (2x winner)",
    foundingDate: String(SITE.foundedYear),
    founder: SITE.founders.map((name) => ({ "@type": "Person", name })),
    areaServed: [
      "Orange County, California",
      "San Diego, California",
      "Temecula, California",
    ].map((name) => ({ "@type": "Place", name })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: [SITE.instagram, SITE.linktree, SITE.theKnot],
    makesOffer: PACKAGES.filter((p) => !p.priceIsPlaceholder).map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.startingPrice,
      priceCurrency: "USD",
      category: "Mobile Bartending",
    })),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}
