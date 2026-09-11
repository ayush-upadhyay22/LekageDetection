import { site } from "./site";
import { locations } from "./data/locations";

export function stringifyJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: site.name,
    alternateName: ["LEAK Scan IQ", "LeakScan IQ", "LEAKScan IQ"],
    description: site.description,
    url: site.url,
    image: `${site.url}/brand/logo-dark.jpeg`,
    logo: `${site.url}/brand/logo-mark.jpeg`,
    telephone: site.phoneTel,
    email: site.email,
    priceRange: "₹₹",
    areaServed: locations.map((location) => ({
      "@type": "City",
      name: location.city,
    })),
    openingHours: "Mo-Sa 09:00-19:00",
    knowsAbout: [
      "Water leakage detection",
      "Dampness inspection",
      "Seepage detection",
      "Thermal inspection",
      "Property inspection",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
  };
}

export function serviceJsonLd(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    brand: site.name,
    provider: {
      "@type": "LocalBusiness",
      name: site.legalName,
      url: site.url,
    },
    areaServed: "IN",
    url,
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.legalName, logo: `${site.url}/brand/logo-mark.jpeg` },
    url,
  };
}
