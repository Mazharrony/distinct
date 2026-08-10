import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-200 " +
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 cursor-pointer " +
  // A button label that wraps to two lines is always a layout bug, never a
  // design choice — and shrink-0 stops flex rows compressing it to force one.
  "whitespace-nowrap shrink-0";

const variants: Record<Variant, string> = {
  // Ink label, NOT white: white on emerald measures 1.67:1, ink gives 12.02:1.
  primary:
    "bg-accent text-on-accent font-semibold shadow-[0_0_24px_-8px_var(--color-accent)] " +
    "hover:bg-accent-soft hover:shadow-[0_0_32px_-6px_var(--color-accent)]",
  secondary:
    "border border-line-strong bg-transparent text-heading hover:border-accent hover:text-accent",
  ghost: "text-accent hover:bg-surface-tint",
  // Highest-emphasis option for photographic bands, where the accent competes.
  onDark: "bg-heading text-ink hover:bg-white",
};

const sizes: Record<Size, string> = {
  // min-h keeps every button at or above the 44px touch target
  md: "min-h-11 px-5 py-2.5 text-[0.9375rem]",
  lg: "min-h-13 px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
