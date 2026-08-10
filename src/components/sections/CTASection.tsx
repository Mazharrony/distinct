import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { AmbientBackdrop } from "@/components/ui/AmbientBackdrop";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { site, telLink, whatsappLink } from "@/content/site";

export function CTASection({
  title = "Get in touch today",
  description = "Whether you require a small repair, ongoing property maintenance or a complete renovation, our team is ready to help.",
  eyebrow = "Free consultation & quotation",
}: {
  title?: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
  <AmbientBackdrop preset="spread" />

      <Container className="relative py-16 lg:py-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="measure text-lg text-white/70">{description}</p>
          <p className="font-heading text-lg font-semibold text-white">
            {site.strapline}
          </p>

          <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href={telLink} variant="onDark" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              {site.phone.display}
            </ButtonLink>
            <ButtonLink
              href={whatsappLink()}
              size="lg"
              className="bg-brand-emerald text-heading hover:bg-brand-teal"
            >
              <WhatsAppIcon className="size-4" aria-hidden="true" />
              WhatsApp us
            </ButtonLink>
            <ButtonLink
              href="#contact"
              size="lg"
              className="border border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              Request a quote
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
