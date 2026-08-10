import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { AmbientBackdrop } from "@/components/ui/AmbientBackdrop";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { mailLink, site, telLink, whatsappLink } from "@/content/site";

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

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-line bg-ink py-16 lg:py-24"
    >
      <AmbientBackdrop preset="spread" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Free consultation & quotation"
          title="Get in touch today"
          description="Whether you require a small repair, ongoing property maintenance or a complete renovation, our team is ready to help."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <div className="rounded-3xl border border-line bg-surface-raised p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {channels.map((channel, index) => (
              <Reveal key={channel.label} delay={index * 70}>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-surface-raised p-5 transition-[border-color,box-shadow] hover:border-accent/50 hover:shadow-[0_0_30px_-14px_var(--color-accent)]"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/5 transition-colors group-hover:border-accent/70">
                    <channel.icon
                      className="size-5 text-accent"
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

            <Reveal delay={210}>
              <div className="rounded-2xl border border-line bg-surface-raised p-6">
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
                      <span className="block font-medium text-heading">
                        Hours
                      </span>
                      <span className="text-body">{site.hours}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
