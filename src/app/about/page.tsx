import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { blurMap } from "@/content/blur";
import { commitments } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Distinct Solutions & Technical Services is a British-run property maintenance, renovation and fit-out company in Dubai. British standards, local expertise, distinct results.",
  alternates: { canonical: "/about" },
};

const approach = [
  "Understand the requirement.",
  "Provide the right solution.",
  "Deliver quality workmanship.",
  "Complete the job properly.",
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "About", href: "/about" }]} />

      <PageHeader
        eyebrow="About us"
        title="British standards. Local expertise. Distinct results."
        description="At Distinct Solutions & Technical Services, we believe that your property deserves a professional service you can trust."
        crumbs={[{ name: "About", href: "/about" }]}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="measure text-lg text-body">
                We are a British-run company operating in Dubai, UAE, providing
                a comprehensive range of technical, maintenance, renovation and
                property improvement services.
              </p>

              <h2 className="font-heading mt-10 text-2xl font-semibold text-ink">
                Our approach is simple
              </h2>
              <span className="rule-brand mt-4" aria-hidden="true" />
              <ol className="mt-6 flex flex-col gap-3">
                {approach.map((step, index) => (
                  <li key={step} className="flex items-baseline gap-4">
                    <span className="font-heading text-sm font-semibold text-brand-deep tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg text-ink">{step}</span>
                  </li>
                ))}
              </ol>

              <p className="measure mt-10 text-body">
                Whether you need a small repair, ongoing property maintenance, a
                complete villa renovation or a bespoke interior fit-out, our
                experienced team and trusted specialist partners are equipped to
                manage projects of different sizes and requirements.
              </p>
              <p className="measure mt-4 text-body">
                We work with homeowners, landlords, property managers,
                businesses and commercial clients, providing a professional and
                reliable service from initial consultation through to
                completion.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <Reveal>
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-surface-subtle">
                  <Image
                    src="/gallery/kitchen-island-fluted-lighting.jpeg"
                    alt="Contemporary kitchen fit-out with a fluted island and feature lighting"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    placeholder="blur"
                    blurDataURL={blurMap["/gallery/kitchen-island-fluted-lighting.jpeg"]}
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className="rounded-3xl border border-line bg-surface-subtle p-8">
                <h2 className="font-heading text-xl font-semibold text-ink">
                  Our commitment
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {commitments.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand-deep"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Promise */}
      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="gradient-brand-animated rounded-3xl p-px">
            <div className="rounded-[calc(1.5rem-1px)] bg-ink px-8 py-14 text-center sm:px-12">
              <SectionHeading
                onDark
                align="center"
                eyebrow="Our promise"
                title="We don't just complete a job. We take responsibility for the result."
                className="items-center"
              />
              <ButtonLink href="/services" variant="onDark" size="lg" className="mt-8">
                Explore our services
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <WhyChoose />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
