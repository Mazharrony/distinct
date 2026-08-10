"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { mainNav } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section currently owns the upper viewport.
  useEffect(() => {
    const sections = mainNav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      // Band across the top third, so a section becomes "active" as it arrives
      // under the header rather than when it is halfway up the screen.
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-4 sm:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = activeId === item.id;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "relative flex h-11 items-center rounded-full px-4 text-[0.9375rem] font-medium transition-colors duration-200",
                      active ? "text-accent" : "text-body hover:text-heading",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "gradient-brand-animated absolute inset-x-4 bottom-1.5 h-0.5 rounded-full transition-opacity duration-200",
                        active ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Wrapped rather than using `hidden` on the button itself — the
              button's own `inline-flex` is the same utility layer and wins. */}
          <span className="hidden sm:block">
            <ButtonLink href="#contact">Get a quote</ButtonLink>
          </span>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
