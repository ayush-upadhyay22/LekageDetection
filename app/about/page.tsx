import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aperture is a technology-first property inspection practice focused on finding moisture sources and documenting building condition.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="An inspection company, not a waterproofing stall with a camera."
        body="Aperture exists to answer a narrow question: where is the moisture coming from, and what should you do next?"
      />
      <div className="mx-auto max-w-3xl space-y-6 px-5 py-16 text-base leading-8">
        <p>
          Homeowners, societies, and facility managers are often sold a coating
          before anyone maps the path of the water. We start the other way around:
          observe, measure, interpret, write it down.
        </p>
        <p>
          Inspectors work with moisture meters, thermal cameras, and acoustic
          equipment when the case benefits. Those tools have limits, which we
          state in the report. We do not invent certifications, awards, or
          detection rates.
        </p>
        <p>
          If you need us to stand in a room with a builder, architect, or insurer
          and talk through the file, that is part of the practice.
        </p>
        <p>
          <Link href="/contact" className="text-forest">
            Book a visit
          </Link>{" "}
          or read a{" "}
          <Link href="/sample-report" className="text-forest">
            sample report
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
