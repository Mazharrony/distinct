"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, Mail, Menu, Phone, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { mailLink, mainNav, site, telLink, whatsappLink } from "@/content/site";
import { services } from "@/content/services";

export function MobileNav() {
  const pathname = usePathname();
  // The drawer is open only while we are still on the route it was opened
  // from, so navigating away closes it without an effect.
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt !== null && openedAt === pathname;
  const setOpen = (next: boolean) => setOpenedAt(next ? pathname : null);

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
        // setOpenedAt (not setOpen) — the state setter is stable, so the
        // effect does not need to re-run on every render.
        setOpenedAt(null);
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
      // Fall back to the trigger when nothing meaningful had focus.
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
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-tint lg:hidden"
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
            className="absolute inset-0 cursor-default bg-ink/60 backdrop-blur-sm"
          />

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-2xl"
          >
            <div className="flex h-18 shrink-0 items-center justify-between border-b border-line px-5 sm:h-20">
              <Logo showTagline={false} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-tint"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="flex-1 overflow-y-auto overscroll-contain px-5 py-6"
            >
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex min-h-12 items-center justify-between rounded-xl px-4 text-lg font-medium transition-colors",
                          active
                            ? "bg-surface-tint text-brand-deep"
                            : "text-ink hover:bg-surface-subtle",
                        )}
                      >
                        {item.label}
                        <ChevronRight className="size-4 opacity-40" aria-hidden="true" />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <p className="font-heading mt-8 mb-2 px-4 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                Our services
              </p>
              <ul className="flex flex-col">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex min-h-11 items-center gap-3 rounded-xl px-4 text-[0.9375rem] text-body transition-colors hover:bg-surface-subtle hover:text-ink"
                    >
                      <service.icon
                        className="size-4 shrink-0 text-brand-deep"
                        aria-hidden="true"
                      />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="shrink-0 border-t border-line px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <ButtonLink href="/contact" size="lg" className="w-full">
                Get a free quote
              </ButtonLink>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <a
                  href={telLink}
                  className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl bg-surface-subtle text-xs font-medium text-ink transition-colors hover:bg-surface-tint"
                >
                  <Phone className="size-4 text-brand-deep" aria-hidden="true" />
                  Call
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl bg-surface-subtle text-xs font-medium text-ink transition-colors hover:bg-surface-tint"
                >
                  <WhatsAppIcon className="size-4 text-brand-deep" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={mailLink}
                  className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl bg-surface-subtle text-xs font-medium text-ink transition-colors hover:bg-surface-tint"
                >
                  <Mail className="size-4 text-brand-deep" aria-hidden="true" />
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
