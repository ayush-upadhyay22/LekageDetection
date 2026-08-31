import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import ServiceCard from "../../components/ServiceCard";
import { services } from "../../lib/data/services";

export const metadata: Metadata = {
  title: "Inspection services",
  description:
    "Water leakage detection, dampness and seepage inspection, thermal and acoustic methods, property and construction quality reviews.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="Inspection, not a bundled repair pitch."
        body="Each service can stand alone or combine on site. Start with the symptom you actually have."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </main>
  );
}
