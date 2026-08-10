"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, Mail, Menu, Phone, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { mailLink, mainNav, site, telLink, whatsappLink } from "@/content/site";
import { services } from "@/content/services";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Lock scroll, trap focus, restore focus on close.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const trigger = triggerRef.current;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusables?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      const restoreTo =
        previouslyFocused && previouslyFocused !== document.body
          ? previouslyFocused
          : trigger;
      restoreTo?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label="Open menu"
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-heading transition-colors hover:bg-surface-tint lg:hidden"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-100 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
          />

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-line bg-surface shadow-2xl"
          >
            <div className="flex h-18 shrink-0 items-center justify-between border-b border-line px-5 sm:h-20">
              <Logo showTagline={false} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-heading transition-colors hover:bg-surface-tint"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="flex-1 overflow-y-auto overscroll-contain px-5 py-6"
            >
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-12 items-center justify-between rounded-xl px-4 text-lg font-medium text-heading transition-colors hover:bg-surface-tint hover:text-accent"
                    >
                      {item.label}
                      <ChevronRight className="size-4 opacity-40" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="font-heading mt-8 mb-2 px-4 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                What we do
              </p>
              {/* Not links — the service detail pages are disconnected while the
                  site runs as a landing page. */}
              <ul className="flex flex-col">
                {services.map((service) => (
                  <li
                    key={service.slug}
                    className="flex min-h-11 items-center gap-3 px-4 text-[0.9375rem] text-body"
                  >
                    <service.icon
                      className="size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {service.name}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="shrink-0 border-t border-line px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <ButtonLink
                href="#contact"
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Get a free quote
              </ButtonLink>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <a
                  href={telLink}
                  className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl bg-surface-raised text-xs font-medium text-heading transition-colors hover:bg-surface-tint"
                >
                  <Phone className="size-4 text-accent" aria-hidden="true" />
                  Call
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl bg-surface-raised text-xs font-medium text-heading transition-colors hover:bg-surface-tint"
                >
                  <WhatsAppIcon className="size-4 text-accent" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={mailLink}
                  className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl bg-surface-raised text-xs font-medium text-heading transition-colors hover:bg-surface-tint"
                >
                  <Mail className="size-4 text-accent" aria-hidden="true" />
                  Email
                </a>
              </div>
              <p className="mt-3 text-center text-xs text-muted tabular-nums">
                {site.phone.display}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
