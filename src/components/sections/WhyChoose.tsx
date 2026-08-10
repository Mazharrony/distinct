import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyDistinct } from "@/content/site";

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="ambient-drift pointer-events-none absolute top-1/4 -left-40 size-[32rem] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand-blue), transparent 65%)",
        }}
      />

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
              <div className="flex gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <item.icon
                    className="size-5 text-brand-emerald"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-white/65">
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
