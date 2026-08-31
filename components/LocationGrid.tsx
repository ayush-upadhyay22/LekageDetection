"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { locations } from "../lib/data/locations";

export default function LocationGrid() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return locations;
    return locations.filter((location) =>
      [location.city, location.state, ...location.localities]
        .join(" ")
        .toLowerCase()
        .includes(value),
    );
  }, [query]);

  return (
    <div>
      <label className="grid max-w-md gap-2 text-sm">
        Search a city
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Indore, Bhopal, Ahmedabad, Mumbai…"
          className="h-12 border border-line bg-white px-3"
        />
      </label>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((location) => (
          <Link
            key={location.slug}
            href={`/locations/${location.slug}`}
            className="border border-line bg-white p-5 transition-colors hover:border-forest"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-muted">{location.state}</p>
            <p className="serif mt-2 text-2xl">{location.city}</p>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{location.blurb}</p>
          </Link>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-muted">
          No listed city matches yet. Request an inspection and mention your location —
          coverage is expanding.
        </p>
      ) : null}
    </div>
  );
}
