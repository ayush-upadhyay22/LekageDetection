import type { Metadata } from "next";
import LocationGrid from "../../components/LocationGrid";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
  title: "Water leakage detection near you",
  description:
    "LEAKScan-IQ water leakage detection in Indore, Bhopal, Ahmedabad, and Mumbai. Find dampness and seepage inspection near you.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Locations"
        title="Inspection services near you"
        body="Select a city for local context, common property problems, and a booking path. More cities can be added from the same template."
      />
      <div className="mx-auto max-w-6xl px-5 py-16">
        <LocationGrid />
      </div>
    </main>
  );
}
