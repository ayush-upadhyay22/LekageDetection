import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfter from "../components/BeforeAfter";
import BookLink from "../components/BookLink";
import CTASection from "../components/CTASection";
import FAQAccordion from "../components/FAQAccordion";
import Hero from "../components/Hero";
import InspectionChecklist from "../components/InspectionChecklist";
import JsonLd from "../components/JsonLd";
import LeadForm from "../components/LeadForm";
import LocationGrid from "../components/LocationGrid";
import ProcessSteps from "../components/ProcessSteps";
import ReportPreview from "../components/ReportPreview";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import SourceDiagram from "../components/SourceDiagram";
import TechnologyGrid from "../components/TechnologyGrid";
import { faqs } from "../lib/data/faqs";
import { services } from "../lib/data/services";
import { faqJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Aperture — Water leakage detection & property inspection",
  },
  description:
    "Technology-first water leakage detection, dampness inspection, and property diagnostics. Find the source. Fix the cause. Protect the property.",
  alternates: { canonical: "/" },
};

const trustPoints = [
  {
    title: "Experienced inspection team",
    body: "Visits are run by people who read buildings — wet rooms, slabs, and plumbing — not only camera screens.",
  },
  {
    title: "Technology-assisted diagnostics",
    body: "Thermal, moisture, and acoustic tools are used when they add information. Visual construction sense still leads.",
  },
  {
    title: "Structured process and reporting",
    body: "Every visit follows book → inspect → locate → report. You leave with a file, not a hallway conversation.",
  },
  {
    title: "Homes, societies, and commercial floors",
    body: "Flats, villas, offices, hotels, warehouses, and campuses — scoped to the rooms that matter.",
  },
];

export default function Home() {
  return (
    <main>
      <JsonLd data={faqJsonLd([...faqs])} />
      <Hero />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="The problem"
            title="The leak you see may not be the source."
            body="A damp patch is often the last stop on a longer path. Breaking tiles at the stain can miss a concealed pipe, a terrace joint, or the bathroom above — and the same repair starts over after the next shower or monsoon."
          />
          <div className="mt-10">
            <SourceDiagram />
          </div>
          <BookLink
            source="problem_cta"
            className="mt-10 inline-flex bg-forest px-5 py-3 text-sm font-medium text-paper"
          >
            Find the source before you break the wall
          </BookLink>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Process"
            title="Four steps. One written file."
            body="You schedule a visit, we inspect with the methods the case needs, we mark suspected sources, and you receive the documentation."
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Technology"
            title="Diagnostics that stay scientifically honest."
            body="We use instruments to reduce guesswork. We will not tell you a camera can see through concrete."
          />
          <div className="mt-10">
            <TechnologyGrid />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading eyebrow="Services" title="What we inspect." />
            <Link href="/services" className="hidden text-sm font-medium text-forest md:inline">
              All services →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
          <SectionHeading
            eyebrow="Scope"
            title="What do we inspect?"
            body="Expand a category. The visit is scoped to your brief — a bathroom leak does not require a full-building survey unless you ask for one."
          />
          <InspectionChecklist />
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <SectionHeading
            eyebrow="The file you keep"
            title="Don't just find the problem. Get it documented."
            body="Photographs, moisture readings, thermal frames when captured, severity tags, and recommended next steps — written so a contractor or society can act."
          />
          <ReportPreview />
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Sequence"
            title="From recurring stain to a documented zone."
            body="We do not promise that every leak is found on the first visit. We do promise a clear record of what the evidence supports."
          />
          <div className="mt-10">
            <BeforeAfter />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="How we work"
            title="Inspection you can brief a contractor with."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {trustPoints.map((item) => (
              <article key={item.title} className="border border-line p-6">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Coverage"
            title="Inspection services near you"
            body="Choose a city to see local context, common property problems, and a booking path. If your city is not listed, request a visit anyway."
          />
          <div className="mt-10">
            <LocationGrid />
          </div>
        </div>
      </section>

      <CTASection
        title="Can't find where the water is coming from?"
        body="Stop guessing. Get the property inspected before starting unnecessary demolition or repairs."
        primary="Talk to an inspection expert"
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading eyebrow="Questions" title="Straight answers." />
          <div className="mt-10">
            <FAQAccordion />
          </div>
          <Link href="/faq" className="mt-8 inline-block text-sm font-medium text-forest">
            Full FAQ →
          </Link>
        </div>
      </section>

      <section className="bg-[#ece8e0]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-forest">Book</p>
            <h2 className="serif mt-3 text-4xl">Request an inspection</h2>
            <p className="mt-4 max-w-md text-muted">
              Five short steps. We reply with scope and fee before we travel.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
