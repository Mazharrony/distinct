import type { Metadata } from "next";
import { ArrowRight, BadgePercent, Check, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { services } from "@/content/services";
import { offer, site, telLink, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "10% Off Labour — New Customer Offer",
  description:
    "New customers receive 10% off labour costs on their first service or project with Distinct Solutions & Technical Services in Dubai. Terms and conditions apply.",
  alternates: { canonical: "/offer" },
};

const terms = [
  "Available to new customers only, on your first booked service or project.",
  "The discount applies to labour costs and does not apply to materials, products or third-party charges.",
  "Mention the offer when you request your quotation — it cannot be applied after a quotation has been accepted.",
  "Cannot be combined with any other offer or promotion.",
  "Distinct Solutions & Technical Services reserves the right to amend or withdraw this offer at any time.",
];

export default function OfferPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "New customer offer", href: "/offer" }]} />

      <PageHeader
        eyebrow="Welcome to Distinct Solutions"
        title="10% off labour on your first project"
        description={offer.detail}
        crumbs={[{ name: "New customer offer", href: "/offer" }]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg" variant="onDark">
            Claim the offer
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(
              "Hello Distinct Solutions, I'd like to claim the 10% off labour new customer offer.",
            )}
            size="lg"
            className="bg-brand-emerald text-heading hover:bg-brand-teal"
          >
            <WhatsAppIcon className="size-4" aria-hidden="true" />
            WhatsApp us
          </ButtonLink>
        </div>
        <p className="mt-5 text-sm text-white/50">{offer.terms}</p>
      </PageHeader>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <span className="gradient-brand flex size-12 items-center justify-center rounded-xl">
                <BadgePercent
                  className="size-6 text-white"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <h2 className="font-heading mt-6 text-2xl font-semibold text-heading sm:text-3xl">
                Applies across every service we offer
              </h2>
              <span className="rule-brand mt-4" aria-hidden="true" />
              <p className="measure mt-5 text-body">
                Whether it is a single repair or a complete villa renovation,
                new customers receive 10% off the labour element of their first
                project.
              </p>

              <ul className="mt-8 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.slug} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className="text-[0.9375rem] text-body">
                      {service.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg">
                  Request your quote
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href={telLink} variant="secondary" size="lg">
                  <Phone className="size-4 text-accent" aria-hidden="true" />
                  {site.phone.display}
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-surface-subtle p-8">
              <h2 className="font-heading text-xl font-semibold text-heading">
                Terms & conditions
              </h2>
              <ol className="mt-6 flex flex-col gap-4">
                {terms.map((term, index) => (
                  <li key={term} className="flex gap-4">
                    <span className="font-heading text-sm font-semibold text-accent tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-body">
                      {term}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <ProcessSteps />
    </>
  );
}
