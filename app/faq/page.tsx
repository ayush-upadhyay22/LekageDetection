import type { Metadata } from "next";
import FAQAccordion from "../../components/FAQAccordion";
import JsonLd from "../../components/JsonLd";
import PageHeader from "../../components/PageHeader";
import { faqs } from "../../lib/data/faqs";
import { faqJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Water leakage detection FAQ",
  description:
    "LEAKScan-IQ answers: how water leakage detection works, hidden leaks without breaking walls, thermal imaging limits, reports, timing, and fees.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <main>
      <JsonLd data={faqJsonLd([...faqs])} />
      <PageHeader
        eyebrow="FAQ"
        title="What people ask before they book."
        body="If your question is about a specific city or property type, send it with the booking form."
      />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <FAQAccordion />
      </div>
    </main>
  );
}
