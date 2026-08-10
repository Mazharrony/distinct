import type { Service } from "@/content/services";

/**
 * Service card. Not a link — the detail pages are disconnected while the site
 * runs as a landing page, so the card shows the offering rather than promising
 * a destination that isn't there.
 */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface-raised p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_50px_-24px_var(--color-accent)]">
      {/* Outlined circular icon, as on the brochure */}
      <span
        aria-hidden="true"
        className="mb-5 inline-flex size-12 items-center justify-center rounded-full border border-accent/35 bg-accent/5 transition-colors duration-300 group-hover:border-accent/70 group-hover:bg-accent/10"
      >
        <service.icon className="size-5 text-accent" strokeWidth={1.6} />
      </span>

      <h3 className="font-heading text-lg font-semibold text-heading">
        {service.name}
      </h3>

      <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-body">
        {service.summary}
      </p>

      {/* Hairline that lights up on hover */}
      <span
        aria-hidden="true"
        className="gradient-brand-animated mt-5 h-px w-10 rounded-full opacity-50 transition-all duration-300 group-hover:w-full group-hover:opacity-100"
      />
    </article>
  );
}
