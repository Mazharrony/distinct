import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";

export type LegalSection = { heading: string; body: string[] };

/**
 * Shared shell for the privacy and terms pages — same structure, different
 * copy, so the two stay visually consistent.
 */
export function LegalPage({
  title,
  description,
  updated,
  sections,
  crumbLabel,
  crumbHref,
}: {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
  crumbLabel: string;
  crumbHref: string;
}) {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={title}
        description={description}
        crumbs={[{ name: crumbLabel, href: crumbHref }]}
      />

      <section className="py-16 lg:py-24">
        <Container size="narrow">
          <p className="text-sm text-muted">Last updated: {updated}</p>

          <div className="mt-10 flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-xl font-semibold text-heading">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
