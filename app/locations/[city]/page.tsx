import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTASection from "../../../components/CTASection";
import FAQAccordion from "../../../components/FAQAccordion";
import JsonLd from "../../../components/JsonLd";
import LeadForm from "../../../components/LeadForm";
import ProcessSteps from "../../../components/ProcessSteps";
import TechnologyGrid from "../../../components/TechnologyGrid";
import TrackOnMount from "../../../components/TrackOnMount";
import { faqs } from "../../../lib/data/faqs";
import { getLocation, locations } from "../../../lib/data/locations";
import { serviceJsonLd } from "../../../lib/schema";
import { site } from "../../../lib/site";

export function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) return {};
  return {
    title: `Water Leakage Detection in ${location.city}`,
    description: `LEAKScan-IQ water leakage detection, dampness inspection, and seepage detection in ${location.city}, ${location.state}. Book a non-invasive inspection.`,
    alternates: { canonical: `/locations/${location.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) notFound();

  const localFaqs = faqs.slice(0, 6);

  return (
    <main>
      <TrackOnMount event="location_viewed" id={location.slug} />
      <JsonLd
        data={serviceJsonLd(
          `Water leakage detection in ${location.city}`,
          location.blurb,
          `${site.url}/locations/${location.slug}`,
        )}
      />
      <header className="border-b border-line bg-forest text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-scan">
            {location.city}, {location.state}
          </p>
          <h1 className="serif mt-3 text-4xl md:text-5xl">
            Water leakage detection in {location.city}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-paper/75">{location.blurb}</p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="serif text-3xl">Common local problems</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {location.problems.map((problem) => (
            <li key={problem} className="border border-line bg-white p-5 text-sm leading-6">
              {problem}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="serif text-3xl">How an {location.city} visit works</h2>
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="serif text-3xl">Methods we may use</h2>
        <div className="mt-10">
          <TechnologyGrid />
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="serif text-3xl">Localities we are often asked about</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {location.localities.map((item) => (
              <li key={item} className="border border-line px-3 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="serif text-3xl">Questions</h2>
        <div className="mt-8">
          <FAQAccordion items={localFaqs} />
        </div>
      </section>

      <section className="bg-[#f4f8fc]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 className="serif text-3xl">Request an inspection in {location.city}</h2>
            <p className="mt-4 text-muted">
              Mention the locality if you know it. We confirm travel and fee before we come.
            </p>
          </div>
          <LeadForm compact />
        </div>
      </section>

      <CTASection
        title={`Talk to an inspector about ${location.city}`}
        body="A short call is often enough to decide whether a focused leak visit or a wider property inspection is the right brief."
        primary="Talk to an inspection expert"
      />
    </main>
  );
}
