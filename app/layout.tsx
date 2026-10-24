import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Lora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/content";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: "500",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Tipsy Blondes | Mobile Bartending in Orange County",
    template: "%s | Tipsy Blondes",
  },
  description: SITE.description,
  keywords: [
    "Orange County mobile bartending",
    "wedding bartending service",
    "mobile bar hire",
    "dry bar service",
    "OC event bartenders",
  ],
  openGraph: {
    title: "Tipsy Blondes | Mobile Bar and Bartending",
    description: SITE.description,
    url: SITE.url,
    images: [
      {
        url: "/media/tipsy-blondes-social.png",
        width: 1200,
        height: 630,
        alt: "Tipsy Blondes — Mobile Bar and Bartending",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tipsy Blondes | Mobile Bar and Bartending",
    description: SITE.description,
    images: [{ url: "/media/tipsy-blondes-social.png", alt: "Tipsy Blondes — Mobile Bar and Bartending" }],
  },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema()} />
        <Nav />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
