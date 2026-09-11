import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "../../../components/CTASection";
import JsonLd from "../../../components/JsonLd";
import TrackOnMount from "../../../components/TrackOnMount";
import { getService, services } from "../../../lib/data/services";
import { serviceJsonLd } from "../../../lib/schema";
import { site } from "../../../lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} near you`,
    description: `${service.short} LEAKScan-IQ ${service.name.toLowerCase()} for homes and commercial buildings.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter((item) => service.related.includes(item.slug));

  return (
    <main>
      <TrackOnMount event="service_viewed" id={service.slug} />
      <JsonLd
        data={serviceJsonLd(
          service.name,
          service.summary,
          `${site.url}/services/${service.slug}`,
        )}
      />
      <header className="border-b border-line bg-[#f4f8fc]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-forest">Service</p>
          <h1 className="serif mt-3 text-4xl md:text-5xl">{service.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{service.summary}</p>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <section>
          <h2 className="font-medium">Who it is for</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{service.who}</p>
        </section>
        <section>
          <h2 className="font-medium">How we work</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{service.method}</p>
        </section>
        <section>
          <h2 className="font-medium">What you receive</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{service.outcome}</p>
        </section>
      </div>
      {related.length ? (
        <div className="mx-auto max-w-6xl px-5 pb-16">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Related</p>
          <ul className="mt-4 flex flex-wrap gap-4 text-sm">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="text-forest">
                  {item.name} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <CTASection
        title={`Book ${service.name.toLowerCase()}`}
        body="Share the city, property type, and what you are seeing. We confirm fee and access before the visit."
        primary="Book an inspection"
      />
    </main>
  );
}
