import type { Metadata } from "next";
import Link from "next/link";
import TrackOnMount from "../../components/TrackOnMount";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
  title: "Sample inspection report",
  description:
    "See how LEAKScan-IQ documents property information, observations, moisture readings, thermal frames, and recommendations.",
  alternates: { canonical: "/sample-report" },
};

export default function SampleReportPage() {
  return (
    <main>
      <TrackOnMount event="report_sample_opened" id="page" />
      <PageHeader
        eyebrow="Sample report"
        title="A file you can hand to a contractor or society."
        body="This is an illustrative layout. Live reports use your property details, photographs from the visit, and only the methods that were actually used."
      />
      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="border border-line bg-white">
          <div className="flex items-center justify-between border-b border-line px-6 py-4 text-xs uppercase tracking-[0.16em] text-muted">
            <span>LEAKScan-IQ inspection file</span>
            <span>Sample · not a live case</span>
          </div>
          <div className="grid gap-8 p-6 md:grid-cols-2">
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-muted">Property</dt>
                <dd>Apartment, 2nd floor · Indore</dd>
              </div>
              <div>
                <dt className="text-muted">Inspection date</dt>
                <dd>12 August 2026</dd>
              </div>
              <div>
                <dt className="text-muted">Areas</dt>
                <dd>Master bathroom, ceiling of living room, accessible plumbing</dd>
              </div>
              <div>
                <dt className="text-muted">Inspector</dt>
                <dd>Field inspector (sample)</dd>
              </div>
            </dl>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Severity</p>
              <p className="mt-2 text-copper">Active moisture — further investigation recommended</p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Moisture on the living-room ceiling is higher than adjacent dry plaster.
                Pattern is consistent with the shower wall of the bathroom above, subject
                to access.
              </p>
            </div>
          </div>
          <div className="grid border-t border-line md:grid-cols-2">
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Photograph</p>
              <div className="mt-3 h-40 bg-[#d6e2f0]" />
              <p className="mt-2 text-xs text-muted">Ceiling stain, living room</p>
            </div>
            <div className="border-t border-line bg-forest p-6 text-paper md:border-l md:border-t-0">
              <p className="text-xs uppercase tracking-[0.16em] text-paper/50">Thermal frame</p>
              <div className="mt-3 h-40 bg-[linear-gradient(90deg,#0A3D7A,#4DA3FF_40%,#ffffff)]" />
              <p className="mt-3 text-xs text-paper/70">
                Cooler band at slab-wall junction. Surface temperature only.
              </p>
            </div>
          </div>
          <div className="border-t border-line p-6 text-sm leading-7">
            <p className="font-medium">Recommendations</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
              <li>Obtain access to the bathroom above before opening the stained ceiling.</li>
              <li>Review shower wall and floor junctions; avoid full-room retiling until the path is clearer.</li>
              <li>Re-check moisture after any isolation test the plumber performs.</li>
            </ol>
          </div>
        </div>
        <Link href="/contact" className="mt-10 inline-flex bg-copper px-5 py-3 text-sm font-medium text-white">
          Book an inspection
        </Link>
      </div>
    </main>
  );
}
