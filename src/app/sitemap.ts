import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Landing-page mode: only the home page is advertised. The interior routes
 * still exist in the codebase but are unlinked and disallowed in robots.ts.
 * Restoring them means listing them here again.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${site.url}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
