import { BadgePercent } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { offer } from "@/content/site";

export function OfferBanner() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="gradient-brand-animated rounded-3xl p-px">
          <div className="flex flex-col items-start gap-6 rounded-[calc(1.5rem-1px)] bg-white p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <span className="gradient-brand hidden size-12 shrink-0 items-center justify-center rounded-xl sm:flex">
                <BadgePercent
                  className="size-6 text-white"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <div>
                <p className="font-heading text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
                  New customer offer
                </p>
                <h2 className="font-heading mt-2 text-2xl font-semibold text-ink sm:text-3xl">
                  10% off labour on your first project
                </h2>
                <p className="mt-2 max-w-xl text-[0.9375rem] text-body">
                  {offer.detail} {offer.terms}
                </p>
              </div>
            </div>

            <ButtonLink href="/offer" size="lg" className="w-full shrink-0 sm:w-auto">
              Claim the offer
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
