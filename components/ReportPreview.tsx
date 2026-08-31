"use client";

import Link from "next/link";
import { track } from "../lib/analytics";

export default function ReportPreview() {
  return (
    <div className="border border-line bg-white shadow-[0_24px_80px_rgba(22,26,24,0.08)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3 text-xs uppercase tracking-[0.16em] text-muted">
        <span>Aperture · Inspection file</span>
        <span>AP-1842</span>
      </div>
      <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
        <div className="p-5">
          <p className="text-xs text-muted">Property</p>
          <p className="mt-1 font-medium">3BHK apartment · Indore</p>
          <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-muted">Date</dt>
              <dd>12 Aug 2026</dd>
            </div>
            <div>
              <dt className="text-muted">Focus</dt>
              <dd>Bathroom / ceiling below</dd>
            </div>
            <div>
              <dt className="text-muted">Moisture, wet wall</dt>
              <dd>18–24% (adjacent dry: 8%)</dd>
            </div>
            <div>
              <dt className="text-muted">Severity</dt>
              <dd className="text-copper">Active — investigate</dd>
            </div>
          </dl>
          <p className="mt-5 text-sm leading-6 text-muted">
            Observation: stain aligns with the shower wall of the unit above.
            Thermal frame shows a cooler band at the floor-wall junction. Acoustic
            check of the visible supply was quiet; concealed line remains a
            candidate.
          </p>
        </div>
        <div className="border-t border-line bg-[#0d1614] p-5 text-paper md:border-l md:border-t-0">
          <p className="text-xs uppercase tracking-[0.16em] text-paper/50">Thermal frame</p>
          <div className="mt-3 h-40 bg-[linear-gradient(90deg,#1b4a42,#2f8f78,#c45c26)] opacity-90" />
          <p className="mt-3 text-xs leading-5 text-paper/70">
            Cooler band marked. Not a through-wall image. Inspector: R. Mehta
          </p>
          <p className="mt-4 text-sm">
            Recommendation: targeted opening at junction after society access to
            the upper bathroom.
          </p>
        </div>
      </div>
      <div className="border-t border-line px-5 py-4">
        <Link
          href="/sample-report"
          onClick={() => track("report_sample_opened", { source: "preview" })}
          className="text-sm font-medium text-forest"
        >
          See sample inspection report →
        </Link>
      </div>
    </div>
  );
}
