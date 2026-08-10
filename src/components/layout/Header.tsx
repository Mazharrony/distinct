"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { mainNav } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-line bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-4 sm:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
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
                      "relative flex h-11 items-center rounded-full px-4 text-[0.9375rem] font-medium transition-colors duration-200",
                      active
                        ? "text-brand-deep"
                        : "text-body hover:text-ink",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "gradient-brand absolute inset-x-4 bottom-1.5 h-0.5 rounded-full transition-opacity duration-200",
                        active ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Wrapped rather than using `hidden` on the button itself — the
              button's own `inline-flex` is the same utility layer and wins. */}
          <span className="hidden sm:block">
            <ButtonLink href="/contact">Get a quote</ButtonLink>
          </span>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
