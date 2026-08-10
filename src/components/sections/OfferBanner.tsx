import { Container } from "@/components/ui/Container";
import { AmbientBackdrop } from "@/components/ui/AmbientBackdrop";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { offer } from "@/content/site";

export function OfferBanner() {
  return (
    <section id="offer" className="scroll-mt-24 py-14 lg:py-20">
      <Container>
        <Reveal>
          {/* Emerald edge-glow panel, as on the brochure */}
          <div className="glow-accent relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-center sm:px-12 sm:py-16">
  <AmbientBackdrop preset="center" />

            <div className="relative">
              <p className="font-heading text-xs font-semibold tracking-[0.28em] text-accent uppercase sm:text-sm">
                New customer special offer
              </p>

              <p className="mt-6 flex items-start justify-center gap-2">
                <span className="text-gradient-gold-animated font-heading text-7xl leading-none font-bold sm:text-8xl">
                  10%
                </span>
                <span className="text-gradient-gold-animated font-heading mt-2 text-3xl leading-none font-bold sm:text-4xl">
                  OFF
                </span>
              </p>

              {/* Gold plate under the figure, mirroring the brochure */}
              <span className="gradient-gold-animated mt-5 inline-block rounded-md px-8 py-2">
                <span className="font-heading text-2xl font-bold tracking-[0.14em] text-ink uppercase sm:text-3xl">
                  Labour
                </span>
              </span>

              <p className="font-heading mt-5 text-xl text-heading italic sm:text-2xl">
                on your first project
              </p>

              <p className="measure mx-auto mt-6 text-body">{offer.detail}</p>

              <ButtonLink href="#contact" size="lg" className="mt-8">
                Claim the offer
              </ButtonLink>

              <p className="mt-5 text-xs text-muted">{offer.terms}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
