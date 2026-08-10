import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-heading text-xs font-semibold tracking-[0.18em] uppercase",
        onDark ? "text-brand-teal" : "text-brand-deep",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    // Every section heading on the site reveals on scroll from here, so the
    // motion stays consistent without each page opting in.
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]",
          onDark && "text-white",
        )}
      >
        {title}
      </Tag>
      <span
        className={cn("rule-brand", align === "center" && "origin-center")}
        aria-hidden="true"
      />
      {description ? (
        <p
          className={cn(
            "measure text-lg",
            onDark ? "text-white/70" : "text-body",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
