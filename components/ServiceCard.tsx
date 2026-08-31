import Link from "next/link";
import ServiceIcon from "./ServiceIcon";
import type { Service } from "../lib/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white p-5">
      <ServiceIcon slug={service.slug} />
      <h3 className="font-medium">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{service.short}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 text-sm font-medium text-forest"
      >
        Explore service →
      </Link>
    </article>
  );
}
