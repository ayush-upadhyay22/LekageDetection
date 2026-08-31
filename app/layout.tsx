import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import FloatingContactButtons from "../components/FloatingContactButtons";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import { localBusinessJsonLd } from "../lib/schema";
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
    default: `${site.name} — Water leakage detection & property inspection`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — Find the source. Fix the cause. Protect the property.`,
    description: site.description,
    url: site.url,
    siteName: site.legalName,
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <JsonLd data={localBusinessJsonLd()} />
        <Navbar />
        {children}
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
