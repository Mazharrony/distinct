import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/content/site";

export function ProcessSteps() {
  return (
    <section className="bg-surface-subtle py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our process"
          title="Simple. Professional. Reliable."
          description="A clear route from first call to completed works, so you always know what happens next."
        />

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 40}>
              <div className="relative flex gap-5">
                <div className="flex flex-col items-center">
                  {/* Outlined circle, as on the brochure */}
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/5">
                    <step.icon
                      className="size-5 text-accent"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </span>
                  {index < processSteps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="mt-2 hidden w-px flex-1 bg-line-strong sm:block"
                    />
                  ) : null}
                </div>

                <div className="pb-2">
                  {/* Gold marks the sequence — credential tier, not action */}
                  <p className="text-gradient-gold-animated font-heading text-2xs font-semibold tracking-[0.18em] uppercase tabular-nums">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading mt-1 text-lg font-semibold text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
