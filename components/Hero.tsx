import BookLink from "./BookLink";
import HeroScan from "./HeroScan";
import { locations } from "../lib/data/locations";
import { site } from "../lib/site";

const trust = [
  "Non-invasive inspection",
  "Detailed inspection report",
  "Experienced inspectors",
  "Transparent pricing",
];

export default function Hero() {
  return (
    <section className="bg-forest text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-scan">{site.tagline}</p>
          <h1 className="serif mt-5 text-4xl leading-tight md:text-6xl">
            Know exactly where the leak is.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-paper/75 md:text-lg">
            LEAKScan-IQ delivers water leakage detection, dampness inspection, and
            property diagnostics with thermal, moisture, and acoustic methods — plus
            a written report.
          </p>
          <p className="mt-4 text-sm text-paper/55">
            Currently visiting {locations.map((item) => item.city).join(", ")}.
          </p>
          <div className="mt-8">
            <BookLink
              source="hero_primary"
              className="inline-flex h-12 items-center justify-center bg-copper px-6 text-sm font-medium text-white hover:bg-copper-2"
            >
              Book an inspection
            </BookLink>
          </div>
        </div>
        <HeroScan />
      </div>
      <TrustBar items={trust} />
    </section>
  );
}

export function TrustBar({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-t border-white/10 bg-white/5 sm:grid-cols-4">
      {items.map((item) => (
        <li
          key={item}
          className="px-5 py-4 text-center text-[11px] uppercase tracking-[0.16em] text-paper/70"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
