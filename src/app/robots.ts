import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Landing-page mode. The interior routes are kept in the codebase but held
 * back from search so a half-linked site does not get indexed. Delete these
 * disallow entries to bring the full site back.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/about",
        "/services",
        "/gallery",
        "/contact",
        "/offer",
        "/thank-you",
      ],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
