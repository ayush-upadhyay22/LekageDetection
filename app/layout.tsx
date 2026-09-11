import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import FloatingContactButtons from "../components/FloatingContactButtons";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import { localBusinessJsonLd, websiteJsonLd } from "../lib/schema";
import { site } from "../lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "LEAKScan-IQ | Water Leakage Detection & Property Inspection",
    template: `%s | LEAKScan-IQ`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  applicationName: site.name,
  category: "property inspection",
  openGraph: {
    title: "LEAKScan-IQ | Water Leakage Detection & Property Inspection",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "LEAKScan-IQ — water leakage detection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEAKScan-IQ | Water Leakage Detection",
    description: site.description,
    images: ["/og.svg"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Navbar />
        {children}
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
