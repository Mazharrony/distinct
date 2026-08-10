import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { OfferBanner } from "@/components/sections/OfferBanner";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import { AudienceStrip } from "@/components/sections/AudienceStrip";
import { services } from "@/content/services";
import { galleryImages } from "@/content/gallery";
import { blurMap } from "@/content/blur";
import { commitments } from "@/content/site";

const ABOUT_IMAGE = "/gallery/technician-plumbing-under-sink.jpeg";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About */}
      <section id="about" className="scroll-mt-24 py-16 lg:py-24">
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
                {commitments.slice(0, 6).map((item, index) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={index * 40}
                    className="flex items-start gap-3"
                  >
                    <Check
                      className="mt-0.5 size-5 shrink-0 text-accent"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                    <span className="text-[0.9375rem] text-body">{item}</span>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-line bg-surface-subtle">
                <Image
                  src={ABOUT_IMAGE}
                  alt="A Distinct Solutions technician in branded uniform carrying out plumbing work in a Dubai property"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurMap[ABOUT_IMAGE]}
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="gradient-brand-animated absolute -bottom-4 -left-4 -z-10 h-24 w-1.5 rounded-full"
              />
              <div
                aria-hidden="true"
                className="gradient-brand-animated absolute -bottom-4 -left-4 -z-10 h-1.5 w-24 rounded-full"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-24 border-y border-line bg-surface-subtle py-16 lg:py-24"
      >
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title={
              <>
                One company.{" "}
                <span className="text-accent">Every solution.</span>
              </>
            }
            description="Managing a property can involve multiple trades and contractors. We provide a single point of contact for a wide range of property requirements."
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={(index % 3) * 40}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <WhyChoose />

      {/* Work */}
      <section id="work" className="scroll-mt-24 py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our work"
            title="Recent projects"
            description="A selection of completed fit-out, joinery, renovation and installation work across Dubai. Select any image to view it larger."
          />
          <div className="mt-12">
            <GalleryGrid images={galleryImages} />
          </div>
        </Container>
      </section>

      <section id="process" className="scroll-mt-24">
        <ProcessSteps />
      </section>

      <AudienceStrip />
      <OfferBanner />
      <ContactSection />
    </>
  );
}
