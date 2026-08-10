import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site, telLink } from "@/content/site";

export default function NotFound() {
  return (
    <section className="py-20 lg:py-32">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center">
          <p className="font-heading text-6xl font-bold text-gradient-brand">
            404
          </p>
          <h1 className="mt-6 text-3xl font-bold text-ink sm:text-4xl">
            We couldn&apos;t find that page
          </h1>
          <span className="rule-brand mt-6" aria-hidden="true" />
          <p className="measure mt-6 text-lg text-body">
            The page may have moved, or the link may be out of date. You can
            browse our services, or get in touch and we will point you in the
            right direction.
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/services" size="lg">
              View our services
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={telLink} variant="secondary" size="lg">
              <Phone className="size-4 text-brand-deep" aria-hidden="true" />
              {site.phone.display}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
