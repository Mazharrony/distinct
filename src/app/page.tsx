import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { OfferBanner } from "@/components/sections/OfferBanner";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/content/services";
import { featuredImages } from "@/content/gallery";
import { blurMap } from "@/content/blur";
import { commitments } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="About us"
                title="British standards. Local expertise. Distinct results."
                description="Distinct Solutions & Technical Services is a British-run property maintenance, technical services, renovation and fit-out company based in Dubai, UAE."
              />
              <p className="measure mt-6 text-body">
                We provide reliable, professional solutions for residential and
                commercial properties — from everyday maintenance and repairs to
                complete renovations, interior fit-outs, landscaping and
                specialist property services.
              </p>
              <p className="measure mt-4 text-body">
                With a focus on quality workmanship, transparent pricing and
                dependable project management, we aim to get the job done right
                — first time.
              </p>

              <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {commitments.slice(0, 6).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 size-5 shrink-0 text-brand-deep"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                    <span className="text-[0.9375rem] text-body">{item}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink href="/about" variant="secondary" className="mt-9">
                More about us
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <Reveal className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl sm:aspect-3/4 lg:aspect-4/5">
                <Image
                  src="/gallery/bespoke-walnut-kitchen-joinery.jpeg"
                  alt="Bespoke walnut kitchen joinery installed in a Dubai apartment"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurMap["/gallery/bespoke-walnut-kitchen-joinery.jpeg"]}
                  className="object-cover"
                />
              </div>
              {/* Offset accent bar, tucked behind the lower-left corner */}
              <div
                aria-hidden="true"
                className="gradient-brand absolute -bottom-4 -left-4 -z-10 h-24 w-1.5 rounded-full"
              />
              <div
                aria-hidden="true"
                className="gradient-brand absolute -bottom-4 -left-4 -z-10 h-1.5 w-24 rounded-full"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="bg-surface-subtle py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title="One company. Every solution."
            description="Managing a property can involve multiple trades and contractors. We provide a single point of contact for a wide range of property requirements."
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={(index % 3) * 40}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <ButtonLink href="/services" variant="secondary" size="lg">
              View all services
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <WhyChoose />

      {/* Recent work */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our work"
              title="Recent projects"
              description="A selection of completed fit-out, joinery and installation work across Dubai."
            />
            <ButtonLink href="/gallery" variant="secondary" className="shrink-0">
              View gallery
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredImages.map((image, index) => (
              <Reveal as="li" key={image.src} delay={(index % 3) * 40}>
                <Link
                  href="/gallery"
                  className="group relative block aspect-4/3 overflow-hidden rounded-2xl bg-surface-subtle"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL={blurMap[image.src]}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-ink/15 to-transparent p-5"
                  >
                    <span className="text-sm font-medium text-white">
                      {image.caption}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <ProcessSteps />
      <OfferBanner />
      <CTASection />
    </>
  );
}
