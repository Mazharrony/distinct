import { Container } from "@/components/ui/Container";
import { AmbientBackdrop } from "@/components/ui/AmbientBackdrop";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyDistinct } from "@/content/site";

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 lg:py-24">
  <AmbientBackdrop preset="left" />

      <Container className="relative">
        <SectionHeading
          onDark
          eyebrow="Why Distinct?"
          title="Recognisably different"
          description="We don't just complete a job. We take responsibility for the result."
        />

        <ul className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyDistinct.map((item, index) => (
            <Reveal as="li" key={item.title} delay={(index % 3) * 40}>
              {/* These are credentials, so the icon tier is gold */}
              <div className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-colors duration-300 hover:border-line hover:bg-surface-raised/50">
                <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 transition-colors duration-300 group-hover:border-gold/60">
                  <item.icon
                    className="size-5 text-gold"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-body">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
