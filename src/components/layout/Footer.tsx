import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { LogoLockup } from "@/components/ui/Logo";
import {
  mailLink,
  mainNav,
  site,
  telLink,
  whatsappLink,
} from "@/content/site";
import { services } from "@/content/services";

const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-body">
      <Container className="py-14 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <LogoLockup className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {site.name}. British-run property maintenance, technical services,
              renovation and fit-out across Dubai.
            </p>
            <p className="font-heading mt-5 text-sm font-semibold text-heading">
              {site.strapline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-heading text-xs font-semibold tracking-[0.18em] text-heading uppercase">
              Explore
            </h2>
            <ul className="mt-4 flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex min-h-9 items-center text-sm transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#offer"
                  className="flex min-h-9 items-center text-sm text-accent transition-colors hover:text-heading"
                >
                  New customer offer
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-heading text-xs font-semibold tracking-[0.18em] text-heading uppercase">
              Services
            </h2>
            {/* Plain text, not links — the detail pages are disconnected while
                the site runs as a landing page. */}
            <ul className="mt-4 flex flex-col gap-1">
              {services.map((service) => (
                <li
                  key={service.slug}
                  className="flex min-h-9 items-center text-sm"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xs font-semibold tracking-[0.18em] text-heading uppercase">
              Get in touch
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={telLink}
                  className="flex min-h-9 items-center gap-3 transition-colors hover:text-accent"
                >
                  <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="tabular-nums">{site.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-9 items-center gap-3 transition-colors hover:text-accent"
                >
                  <WhatsAppIcon className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={mailLink}
                  className="flex min-h-9 items-center gap-3 break-all transition-colors hover:text-accent"
                >
                  <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {site.location.display}
                  <span className="mt-1 block text-xs text-muted">
                    {site.hours}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.prismal.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Website by{" "}
                <span className="font-medium tracking-wide text-heading">
                  Prismal
                </span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
