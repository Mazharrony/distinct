import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

/**
 * The "D" mark, drawn as concentric D strokes in the brand gradient.
 *
 * Rebuilt as vector rather than using the supplied PNG, which is a lighting
 * mockup on a grey background — this stays crisp at any size, carries no
 * background, and costs a fraction of the bytes.
 */
export function LogoMark({
  className,
  gradientId = "distinct-mark",
}: {
  className?: string;
  gradientId?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="56" x2="60" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--color-brand-blue)" />
          <stop offset="38%" stopColor="var(--color-brand-cyan)" />
          <stop offset="70%" stopColor="var(--color-brand-teal)" />
          <stop offset="100%" stopColor="var(--color-brand-emerald)" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#${gradientId})`}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer D */}
        <path d="M10 6v52h10a26 26 0 0 0 0-52H10Z" />
        {/* Middle D */}
        <path d="M20 17v30h1a15 15 0 0 0 0-30h-1Z" />
        {/* Inner stem — the stepped detail on the left of the mark */}
        <path d="M10 26h7" />
        <path d="M10 38h7" />
      </g>
    </svg>
  );
}

export function Logo({
  className,
  onDark = false,
  showTagline = true,
}: {
  className?: string;
  onDark?: boolean;
  showTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${site.shortName} — home`}
    >
      <LogoMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-xl font-bold tracking-[0.08em] uppercase sm:text-[1.35rem]",
            onDark ? "text-white" : "text-ink",
          )}
        >
          Distinct
        </span>
        {showTagline ? (
          <span
            className={cn(
              "font-heading mt-1 hidden text-[0.5625rem] font-medium tracking-[0.18em] whitespace-nowrap uppercase min-[340px]:block sm:text-[0.625rem] sm:tracking-[0.22em]",
              onDark ? "text-brand-teal" : "text-brand-deep",
            )}
          >
            {site.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
