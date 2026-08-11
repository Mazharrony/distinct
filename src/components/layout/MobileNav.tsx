"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  /** Set when the drawer is closing because an in-page link was tapped. */
  const navTarget = useRef<string | null>(null);

  /**
   * In-page links inside the drawer cannot navigate on their own: the body is
   * pinned while the drawer is open, so the browser's jump goes nowhere, and
   * the scroll restore below would then pull the reader back anyway. Record
   * the destination instead and let the unlock handle it.
   *
   * Reads the href off the element rather than closing over it, so this stays
   * a plain event handler — a curried factory reads as render-phase code and
   * is not allowed to touch a ref.
   */
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navTarget.current = event.currentTarget.getAttribute("href");
    setOpen(false);
  };

  // Lock scroll, trap focus, restore focus on close.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const trigger = triggerRef.current;

    // iOS Safari ignores `overflow: hidden` on body, so pin the page instead
    // and put the scroll position back on close.
    const scrollY = window.scrollY;
    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    // Lets globals.css hide the floating contact bar while the drawer is open.
    document.body.dataset.drawerOpen = "true";

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

      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.width = prev.width;
      document.body.style.overflow = prev.overflow;
      delete document.body.dataset.drawerOpen;

      // While pinned, the body is out of flow and the document collapses, so
      // an immediate scroll clamps against the short height. Waiting a frame
      // lets layout recover first.
      const target = navTarget.current;
      navTarget.current = null;

      requestAnimationFrame(() => {
        const section = target ? document.querySelector(target) : null;
        if (section) {
          // Honours the sections' scroll-mt, so the sticky header does not
          // cover the heading.
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", target);
          return;
        }
        // Closed without navigating — put the reader back where they were.
        window.scrollTo({ top: scrollY, behavior: "instant" });
      });

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

      {/* Portalled to <body>. The header sets backdrop-filter once scrolled,
          which makes it the containing block for position:fixed descendants —
          rendered in place, this overlay collapsed to the header's height.
          No mounted guard needed: `open` only becomes true from a click, so
          this never runs during SSR or the hydrating render. */}
      {open
        ? createPortal(
            <div className="fixed inset-0 z-100 h-dvh lg:hidden">
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
              <Logo />
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
                      onClick={handleNavClick}
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
                onClick={handleNavClick}
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
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
