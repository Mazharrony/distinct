import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { Faq } from "@/components/sections/Faq";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/sections/ServiceCard";
import {
  BreadcrumbSchema,
  FaqSchema,
  ServiceSchema,
} from "@/components/seo/JsonLd";
import { blurMap } from "@/content/blur";
import { getService, relatedServices, services } from "@/content/services";
import { site, telLink, whatsappLink } from "@/content/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.seo.title} | ${site.shortName}`,
      description: service.seo.description,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = relatedServices(service);

  return (
    <>
      <ServiceSchema service={service} />
      <FaqSchema faqs={service.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <PageHeader
        eyebrow={service.name}
        title={service.headline}
        description={service.intro}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg" variant="onDark">
            Request a quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(
              `Hello Distinct Solutions, I'd like to enquire about ${service.name.toLowerCase()}.`,
            )}
            size="lg"
            className="border border-white/25 bg-white/5 text-white hover:bg-white/15"
          >
            <WhatsAppIcon className="size-4" aria-hidden="true" />
            WhatsApp us
          </ButtonLink>
        </div>
      </PageHeader>

      {/* What we do */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <h2 className="font-heading text-2xl font-semibold text-heading sm:text-3xl">
                  What we cover
                </h2>
                <span className="rule-brand mt-4" aria-hidden="true" />
              </Reveal>

              <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {service.items.map((item, index) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={Math.min(index, 8) * 40}
                    className="flex items-start gap-3"
                  >
                    <Check
                      className="mt-0.5 size-5 shrink-0 text-accent"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                    <span className="text-[0.9375rem] text-body">{item}</span>
                  </Reveal>
                ))}
              </ul>

              {service.outro ? (
                <Reveal>
                  <p className="measure mt-8 text-body">{service.outro}</p>
                </Reveal>
              ) : null}
            </div>

            <Reveal>
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-surface-subtle lg:sticky lg:top-28">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurMap[service.image]}
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Quick contact strip */}
      <section className="bg-surface-subtle py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface-raised p-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-heading text-xl font-semibold text-heading">
                Need {service.name.toLowerCase()} in Dubai?
              </h2>
              <p className="mt-2 text-[0.9375rem] text-body">
                Tell us what you need and we will provide a clear quotation.
                New customers receive 10% off labour on their first project.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink href={telLink} variant="secondary">
                <Phone className="size-4 text-accent" aria-hidden="true" />
                {site.phone.display}
              </ButtonLink>
              <ButtonLink href="/contact">Get a quote</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <Container size="narrow">
          <Faq faqs={service.faqs} />
        </Container>
      </section>

      {/* Related */}
      {related.length ? (
        <section className="bg-surface-subtle py-16 lg:py-24">
          <Container>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <Reveal>
                <h2 className="font-heading text-2xl font-semibold text-heading sm:text-3xl">
                  Related services
                </h2>
                <span className="rule-brand mt-4" aria-hidden="true" />
              </Reveal>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                All services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal as="li" key={item.slug} delay={index * 60}>
                  <ServiceCard service={item} />
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CTASection />
    </>
  );
}
