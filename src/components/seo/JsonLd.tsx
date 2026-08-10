import { site } from "@/content/site";
import { services, type Service } from "@/content/services";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is authored in this repo, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Site-wide business schema. Rendered once, in the root layout. */
export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": `${site.url}/#business`,
        name: site.name,
        alternateName: site.shortName,
        slogan: site.tagline,
        description: site.description,
        url: site.url,
        telephone: site.phone.dial,
        email: site.email,
        image: `${site.url}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location.city,
          addressCountry: "AE",
        },
        areaServed: {
          "@type": "City",
          name: site.location.city,
        },
        knowsLanguage: ["en"],
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            url: `${site.url}/services/${service.slug}`,
          },
        })),
      }}
    />
  );
}

export function ServiceSchema({ service }: { service: Service }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.seo.description,
        url: `${site.url}/services/${service.slug}`,
        serviceType: service.name,
        provider: { "@id": `${site.url}/#business` },
        areaServed: { "@type": "City", name: site.location.city },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.name,
          itemListElement: service.items.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item },
          })),
        },
      }}
    />
  );
}

export function FaqSchema({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  if (!faqs.length) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${site.url}${item.href}`,
        })),
      }}
    />
  );
}
