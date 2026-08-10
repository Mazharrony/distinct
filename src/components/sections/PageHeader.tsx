import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AmbientBackdrop } from "@/components/ui/AmbientBackdrop";
import { Eyebrow } from "@/components/ui/SectionHeading";

export type Crumb = { name: string; href: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-10 pb-14 lg:pt-14 lg:pb-20">
  <AmbientBackdrop preset="left" />

      <Container className="relative">
        {crumbs.length ? (
          <nav aria-label="Breadcrumb" className="fade-in mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/50">
              <li className="flex items-center gap-1">
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <ChevronRight className="size-3.5" aria-hidden="true" />
              </li>
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-1">
                    {last ? (
                      <span className="text-white/80" aria-current="page">
                        {crumb.name}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={crumb.href}
                          className="transition-colors hover:text-white"
                        >
                          {crumb.name}
                        </Link>
                        <ChevronRight className="size-3.5" aria-hidden="true" />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        {/* Load-in stagger, matching the home page hero. */}
        <div className="max-w-3xl">
          {eyebrow ? (
            <div
              className="rise-in"
              style={{ "--rise-delay": "60ms" } as React.CSSProperties}
            >
              <Eyebrow onDark>{eyebrow}</Eyebrow>
            </div>
          ) : null}
          <h1
            style={{ "--rise-delay": "140ms" } as React.CSSProperties}
            className="rise-in mt-4 text-4xl font-bold text-white sm:text-5xl"
          >
            {title}
          </h1>
          <span
            style={{ "--rise-delay": "260ms" } as React.CSSProperties}
            className="rule-brand rise-in mt-6"
            aria-hidden="true"
          />
          {description ? (
            <p
              style={{ "--rise-delay": "300ms" } as React.CSSProperties}
              className="measure rise-in mt-6 text-lg text-white/70"
            >
              {description}
            </p>
          ) : null}
          {children ? (
            <div
              className="rise-in"
              style={{ "--rise-delay": "380ms" } as React.CSSProperties}
            >
              {children}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
