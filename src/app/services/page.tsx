import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { services } from "@/content/services";
import { audiences } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Property maintenance, AC, plumbing, electrical, waterproofing, water filtration, fit-out, joinery, flooring, painting and landscaping services across Dubai.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }]} />

      <PageHeader
        eyebrow="Our services"
        title="One company. Every solution."
        description="Managing a property can involve multiple trades and contractors. Distinct Solutions provides a convenient single point of contact for a wide range of property maintenance requirements."
        crumbs={[{ name: "Services", href: "/services" }]}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={(index % 3) * 40}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface-subtle py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Ideal for"
            title="Who we work with"
            description="From plumbing and electrical repairs to AC maintenance, painting, flooring and general building works, we help coordinate the services your property requires."
          />

          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {audiences.map((audience, index) => (
              <Reveal as="li" key={audience.label} delay={(index % 3) * 40}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-line bg-white px-5 py-4">
                  <audience.icon
                    className="size-5 shrink-0 text-brand-deep"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-[0.9375rem] font-medium text-ink">
                    {audience.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <ProcessSteps />
      <CTASection />
    </>
  );
}
