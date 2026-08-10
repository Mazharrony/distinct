import type { Metadata } from "next";
import { BadgePercent, Clock, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { mailLink, offer, site, telLink, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Distinct Solutions & Technical Services in Dubai for a free consultation and quotation. Call +971 55 422 7211, WhatsApp us or send an enquiry.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Call us",
    value: site.phone.display,
    href: telLink,
    icon: Phone,
    note: "Fastest way to reach us",
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Message us directly",
    href: whatsappLink(),
    icon: WhatsAppIcon,
    note: "Send photos of the work",
    external: true,
  },
  {
    label: "Email",
    value: site.email,
    href: mailLink,
    icon: Mail,
    note: "We reply within one working day",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", href: "/contact" }]} />

      <PageHeader
        eyebrow="Free consultation & quotation"
        title="Get in touch today"
        description="Whether you require a small repair, ongoing property maintenance or a complete renovation, our team is ready to help."
        crumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            {/* Form */}
            <div>
              <Reveal>
                <h2 className="font-heading text-2xl font-semibold text-heading sm:text-3xl">
                  Send us an enquiry
                </h2>
                <span className="rule-brand mt-4" aria-hidden="true" />
                <p className="measure mt-5 text-body">
                  Tell us a little about your property and what you need. We
                  will come back to you with next steps and, where required,
                  arrange a site visit.
                </p>
              </Reveal>

              <Reveal delay={80} className="mt-10">
                <ContactForm />
              </Reveal>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <ul className="flex flex-col gap-3">
                {channels.map((channel, index) => (
                  <Reveal as="li" key={channel.label} delay={index * 70}>
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-surface-raised p-5 transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-md"
                    >
                      <span className="gradient-brand flex size-11 shrink-0 items-center justify-center rounded-xl">
                        <channel.icon
                          className="size-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block truncate font-medium text-heading">
                          {channel.value}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted">
                          {channel.note}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ul>

              <div className="rounded-2xl border border-line bg-surface-subtle p-6">
                <ul className="flex flex-col gap-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 size-5 shrink-0 text-accent"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block font-medium text-heading">
                        Where we work
                      </span>
                      <span className="text-body">
                        {site.location.display} — residential and commercial
                        properties across the emirate.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 size-5 shrink-0 text-accent"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block font-medium text-heading">Hours</span>
                      <span className="text-body">{site.hours}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="gradient-brand-animated rounded-2xl p-px">
                <div className="rounded-[calc(1rem-1px)] bg-ink p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <BadgePercent
                      className="size-5 text-brand-emerald"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                  <h2 className="font-heading mt-4 text-lg font-semibold text-white">
                    New customer offer
                  </h2>
                  <p className="mt-2 text-sm text-white/70">{offer.detail}</p>
                  <p className="mt-3 text-xs text-white/50">{offer.terms}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
