import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site, telLink, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your enquiry has been received by Distinct Solutions & Technical Services.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="py-20 lg:py-32">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center">
          <span className="gradient-brand flex size-16 items-center justify-center rounded-2xl">
            <CheckCircle2
              className="size-8 text-white"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </span>

          <h1 className="mt-8 text-3xl font-bold text-heading sm:text-4xl">
            Thank you — your enquiry has been received
          </h1>
          <span className="rule-brand mt-6" aria-hidden="true" />

          <p className="measure mt-6 text-lg text-body">
            A member of our team will be in touch shortly to discuss your
            requirements and, where needed, arrange a site visit.
          </p>
          <p className="measure mt-4 text-body">
            If your enquiry is urgent, the quickest way to reach us is by phone
            or WhatsApp.
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href={telLink} size="lg">
              <Phone className="size-4" aria-hidden="true" />
              {site.phone.display}
            </ButtonLink>
            <ButtonLink href={whatsappLink()} variant="secondary" size="lg">
              <WhatsAppIcon className="size-4 text-accent" aria-hidden="true" />
              WhatsApp us
            </ButtonLink>
          </div>

          <ButtonLink href="/" variant="ghost" className="mt-8">
            Back to home
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
