import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import { asset } from "../../lib/asset";

export const metadata: Metadata = {
  title: "About",
  description:
    "LEAKScan-IQ is a technology-first water leakage detection and property inspection practice. We find moisture sources and document building condition.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="An inspection company, not a waterproofing stall with a camera."
        body="LEAKScan-IQ exists to answer a narrow question: where is the moisture coming from, and what should you do next?"
      />
      <div className="mx-auto max-w-3xl space-y-6 px-5 py-16 text-base leading-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <Image
            src={asset("/brand/logo-mark.jpeg")}
            alt="LEAKScan-IQ mark"
            width={640}
            height={640}
            className="h-auto w-full border border-line bg-white object-contain p-6"
          />
          <Image
            src={asset("/brand/logo-wordmark.jpeg")}
            alt="LEAKScan-IQ wordmark"
            width={800}
            height={360}
            className="h-auto w-full border border-line bg-white object-contain p-6 sm:col-span-2"
          />
          <Image
            src={asset("/brand/logo-dark.jpeg")}
            alt="LEAKScan-IQ inspection identity"
            width={800}
            height={450}
            className="h-auto w-full border border-line object-cover sm:col-span-3"
          />
        </div>
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
