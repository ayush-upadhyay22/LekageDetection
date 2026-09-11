import Link from "next/link";
import { services } from "../lib/data/services";
import { locations } from "../lib/data/locations";
import { site } from "../lib/site";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-forest text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-9 w-9" />
            <p className="text-xl font-semibold">{site.name}</p>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-6 text-paper/70">{site.tagline}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-paper/50">Inspect</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-paper">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-paper/50">Cities</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            {locations.map((location) => (
              <li key={location.slug}>
                <Link href={`/locations/${location.slug}`} className="hover:text-paper">
                  {location.city}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/locations">All locations</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-paper/50">Visit</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.phoneDisplay}</li>
            <li>{site.hours}</li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/sample-report">Sample report</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-5 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} {site.legalName}. Inspection findings are professional
        observations, not a guarantee of every concealed defect.
      </p>
    </footer>
  );
}
