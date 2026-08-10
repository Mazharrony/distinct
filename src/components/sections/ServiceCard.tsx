import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-deep/30 hover:shadow-lg">
      <span
        aria-hidden="true"
        className="gradient-brand mb-5 inline-flex size-11 items-center justify-center rounded-xl"
      >
        <service.icon className="size-5 text-white" strokeWidth={1.75} />
      </span>

      <h3 className="font-heading text-lg font-semibold text-ink">
        {/* Stretched link keeps the whole card clickable without nesting links */}
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
          {service.name}
        </Link>
      </h3>

      <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-body">
        {service.summary}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep">
        Learn more
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </article>
  );
}
