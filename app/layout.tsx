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
    default: "Tipsy Blondes OC | Mobile Bartending in Orange County",
    template: "%s | Tipsy Blondes OC",
  },
  description:
    "Tipsy Blondes OC is a mobile bartending service in Orange County for weddings and private events. You bring the alcohol, we bring the bar, the bartenders, and everything else.",
  keywords: [
    "Orange County mobile bartending",
    "wedding bartending service",
    "mobile bar hire",
    "dry bar service",
    "OC event bartenders",
  ],
  openGraph: {
    title: "Tipsy Blondes OC | Mobile Bartending in Orange County",
    description:
      "Mobile bartending for weddings and events across Orange County. You bring the alcohol, we handle the rest.",
    url: SITE.url,
    siteName: "Tipsy Blondes OC",
    images: [{ url: "/media/og.png", width: 1200, height: 630, alt: "Tipsy Blondes OC" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tipsy Blondes OC | Mobile Bartending in Orange County",
    description:
      "Mobile bartending for weddings and events across Orange County. You bring the alcohol, we handle the rest.",
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
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
