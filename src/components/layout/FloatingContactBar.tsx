import Link from "next/link";
import { Phone, SquarePen } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { telLink, whatsappLink } from "@/content/site";

/**
 * Mobile-only bottom bar. The body reserves matching bottom padding in
 * layout.tsx so this never sits on top of page content.
 */
export function FloatingContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-3 pb-[env(safe-area-inset-bottom)]">
        <a
          href={telLink}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium text-ink transition-colors active:bg-surface-tint"
        >
          <Phone className="size-5 text-brand-deep" aria-hidden="true" />
          Call
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-x border-line text-xs font-medium text-ink transition-colors active:bg-surface-tint"
        >
          <WhatsAppIcon className="size-5 text-brand-deep" aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium text-ink transition-colors active:bg-surface-tint"
        >
          <SquarePen className="size-5 text-brand-deep" aria-hidden="true" />
          Get a quote
        </Link>
      </div>
    </div>
  );
}
