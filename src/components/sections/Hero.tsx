import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { AmbientBackdrop } from "@/components/ui/AmbientBackdrop";
import { ButtonLink } from "@/components/ui/Button";
import { blurMap } from "@/content/blur";
import { site, trustPoints, whatsappLink } from "@/content/site";

const HERO_IMAGE = "/gallery/open-plan-kitchen-living-fit-out.jpeg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurMap[HERO_IMAGE]}
          /* Dimmed and slightly desaturated so daylight photography sits inside
             the dark canvas instead of punching a bright hole in it. */
          className="settle-in object-cover brightness-[0.55] saturate-[0.85]"
        />
        {/* Scrim: solid behind the headline, easing off to the right so the
            work still reads. Text sits entirely in the dark half. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink from-28% via-ink/85 to-ink/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/50"
        />
        {/* Sits above the scrim so the colour reads on the photography */}
        <AmbientBackdrop preset="hero" />
      </div>

      <Container className="relative py-20 sm:py-24 lg:py-32">
        {/* Load-in stagger: 80ms apart, top to bottom. */}
        <div className="max-w-2xl">
          <p
            style={{ "--rise-delay": "80ms" } as React.CSSProperties}
            className="rise-in font-heading inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-2 pr-4 pl-3 text-xs font-medium tracking-[0.14em] text-white uppercase backdrop-blur-sm"
          >
            {/* Sized independently of the label so the flag actually reads */}
            <span aria-hidden="true" className="text-xl leading-none">
              🇬🇧
            </span>
            British-run · Dubai based
          </p>

          <h1
            style={{ "--rise-delay": "160ms" } as React.CSSProperties}
            className="rise-in mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            One company.{" "}
            <span className="text-gradient-brand-animated">Every solution.</span>
          </h1>

          <p
            style={{ "--rise-delay": "240ms" } as React.CSSProperties}
            className="rise-in mt-6 max-w-xl text-lg text-white/75 sm:text-xl"
          >
            Property maintenance, technical services, renovation and interior
            fit-out across Dubai — delivered to British professional standards
            with a workmanship guarantee.
          </p>

          <div
            style={{ "--rise-delay": "320ms" } as React.CSSProperties}
            className="rise-in mt-9 flex flex-col gap-3 sm:flex-row"
          >
            {/* WhatsApp carries the green; the quote button takes the dark
                treatment. Its border is load-bearing — ink on the hero measures
                1.02:1, so without it the button would be invisible. */}
            <ButtonLink href={whatsappLink()} size="lg">
              <WhatsAppIcon className="size-4" aria-hidden="true" />
              WhatsApp us
            </ButtonLink>
            <ButtonLink
              href="#contact"
              size="lg"
              className="border border-white/30 bg-ink/60 text-white backdrop-blur-sm hover:border-white/50 hover:bg-ink/80"
            >
              Get a free quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <p
            style={{ "--rise-delay": "400ms" } as React.CSSProperties}
            className="rise-in mt-6 text-sm text-white/60"
          >
            Or call{" "}
            <a
              href={`tel:${site.phone.dial}`}
              className="font-medium text-white underline decoration-accent decoration-2 underline-offset-4 tabular-nums transition-colors hover:text-brand-teal"
            >
              {site.phone.display}
            </a>
          </p>
        </div>
      </Container>

      {/* Trust strip — credentials, so gold rather than emerald */}
      <div className="relative border-t border-line bg-ink/85 backdrop-blur-sm">
        <Container>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 lg:grid-cols-4">
            {trustPoints.map((point, index) => (
              <li
                key={point.label}
                style={
                  {
                    "--rise-delay": `${480 + index * 60}ms`,
                  } as React.CSSProperties
                }
                className="rise-in flex items-center gap-3"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                  <point.icon
                    className="size-4 text-gold"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-sm font-medium text-heading">
                  {point.label}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
