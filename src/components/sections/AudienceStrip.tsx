import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { audiences } from "@/content/site";

export function AudienceStrip() {
  return (
    <section className="border-y border-line bg-surface-subtle py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Ideal for"
          title="Who we work with"
          description="From plumbing and electrical repairs to AC maintenance, painting, flooring and general building works, we coordinate the services your property requires."
        />

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {audiences.map((audience, index) => (
            <Reveal as="li" key={audience.label} delay={(index % 5) * 40}>
              <div className="flex h-full items-center gap-3 rounded-xl border border-line bg-surface-raised px-4 py-3.5 transition-colors hover:border-accent/40">
                <audience.icon
                  className="size-4 shrink-0 text-accent"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-heading">
                  {audience.label}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
