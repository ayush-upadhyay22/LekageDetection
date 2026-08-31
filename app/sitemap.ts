import type { MetadataRoute } from "next";
import { posts } from "../lib/data/blog";
import { locations } from "../lib/data/locations";
import { services } from "../lib/data/services";
import { site } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/locations",
    "/blog",
    "/about",
    "/contact",
    "/sample-report",
    "/faq",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: new Date(),
    })),
    ...locations.map((location) => ({
      url: `${site.url}/locations/${location.slug}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
