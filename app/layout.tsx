import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/content";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Tipsy Blondes | Weddings & Event Bartending",
    template: "%s | Tipsy Blondes OC",
  },
  description: `Meet Taylor & Amber. Personal mobile bartending, fresh cocktails, and thoughtful service for celebrations across ${SITE.area}.`,
  keywords: [
    "Orange County mobile bartending",
    "wedding bartending service",
    "mobile bar hire",
    "dry bar service",
    "San Diego event bartenders",
    "Temecula wedding bartending",
  ],
  openGraph: {
    title: "Tipsy Blondes | Weddings & Event Bartending",
    description: `Mobile bartending with Taylor & Amber across ${SITE.area}.`,
    url: SITE.url,
    images: [
      {
        url: "/media/og.png",
        width: 1200,
        height: 630,
        alt: "Tipsy Blondes OC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tipsy Blondes | Weddings & Event Bartending",
    description: `Mobile bartending with Taylor & Amber across ${SITE.area}.`,
    images: ["/media/og.png"],
  },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-warmwhite focus:p-4"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
