import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Faq as FaqItem } from "@/content/services";

/**
 * Native <details> accordion — no JavaScript, works before hydration,
 * and is keyboard-operable for free.
 */
export function Faq({
  faqs,
  title = "Common questions",
}: {
  faqs: FaqItem[];
  title?: string;
}) {
  if (!faqs.length) return null;

  return (
    <div>
      <Reveal>
        <h2 className="font-heading text-2xl font-semibold text-heading sm:text-3xl">
          {title}
        </h2>
        <span className="rule-brand mt-4" aria-hidden="true" />
      </Reveal>

      <div className="mt-8 divide-y divide-line border-y border-line">
        {faqs.map((faq, index) => (
          <Reveal key={faq.q} delay={index * 60}>
            <details className="group py-1">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-left font-medium text-heading transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                {faq.q}
                <Plus
                  className="size-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="measure pt-1 pb-4 text-[0.9375rem] leading-relaxed text-body">
                {faq.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
