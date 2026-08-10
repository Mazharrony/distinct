import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-200 " +
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

const variants: Record<Variant, string> = {
  // 6.45:1 against white — safe for the 16px label
  primary:
    "bg-brand-deep text-white shadow-sm hover:bg-brand-deep-700 hover:shadow-md",
  secondary:
    "border border-line-strong bg-white text-ink hover:border-brand-deep hover:text-brand-deep",
  ghost: "text-brand-deep hover:bg-surface-tint",
  onDark: "bg-white text-ink hover:bg-surface-subtle",
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
