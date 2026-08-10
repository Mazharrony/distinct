import { cn } from "@/lib/cn";

type Orb = {
  /** Tailwind positioning for this orb. */
  position: string;
  /** Which brand colour it radiates. */
  color: "accent" | "blue" | "teal" | "gold";
  /** Drift path variant — b and c take different routes to a. */
  path?: "a" | "b" | "c";
  drift?: string;
  breathe?: string;
  delay?: string;
  min?: number;
  max?: number;
};

const colorVar: Record<Orb["color"], string> = {
  accent: "var(--color-accent)",
  blue: "var(--color-brand-blue)",
  teal: "var(--color-brand-teal)",
  gold: "var(--color-gold)",
};

const presets: Record<string, Orb[]> = {
  hero: [
    { position: "-bottom-48 -right-24 size-[38rem]", color: "accent", path: "a", drift: "28s", breathe: "19s", min: 0.1, max: 0.26 },
    { position: "-top-40 left-1/4 size-[30rem]", color: "blue", path: "b", drift: "34s", breathe: "23s", delay: "-6s", min: 0.06, max: 0.18 },
  ],
  left: [
    { position: "top-1/4 -left-40 size-[34rem]", color: "blue", path: "b", drift: "31s", breathe: "21s", min: 0.1, max: 0.24 },
    { position: "-bottom-40 right-0 size-[28rem]", color: "teal", path: "c", drift: "26s", breathe: "17s", delay: "-9s", min: 0.06, max: 0.16 },
  ],
  spread: [
    { position: "-top-32 -right-24 size-[30rem]", color: "accent", path: "a", drift: "27s", breathe: "18s", min: 0.1, max: 0.26 },
    { position: "-bottom-40 -left-32 size-[28rem]", color: "blue", path: "b", drift: "33s", breathe: "22s", delay: "-11s", min: 0.08, max: 0.2 },
    { position: "top-1/3 left-1/2 size-[22rem]", color: "teal", path: "c", drift: "24s", breathe: "15s", delay: "-4s", min: 0.04, max: 0.14 },
  ],
  center: [
    { position: "-top-28 left-1/2 -translate-x-1/2 size-[28rem]", color: "accent", path: "a", drift: "25s", breathe: "16s", min: 0.12, max: 0.28 },
    { position: "-bottom-32 left-1/4 size-[24rem]", color: "gold", path: "c", drift: "30s", breathe: "20s", delay: "-8s", min: 0.04, max: 0.12 },
  ],
};

/**
 * Slow-moving colour wash behind a dark section.
 *
 * Purely decorative and aria-hidden. Each orb runs its own drift path and its
 * own opacity cycle at deliberately mismatched durations, so the composition
 * never returns to the same arrangement and the background reads as ambient
 * rather than looping. Everything is transform/opacity, so the expensive blur
 * is rasterised once and the browser just moves the cached layer.
 */
export function AmbientBackdrop({
  preset = "spread",
  className,
}: {
  preset?: keyof typeof presets;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {presets[preset].map((orb, index) => (
        <div
          key={index}
          className={cn(
            "orb",
            orb.path === "b" && "orb-b",
            orb.path === "c" && "orb-c",
            orb.position,
          )}
          style={
            {
              background: `radial-gradient(circle, ${colorVar[orb.color]}, transparent 65%)`,
              "--orb-drift": orb.drift,
              "--orb-breathe": orb.breathe,
              "--orb-delay": orb.delay,
              "--orb-min": orb.min,
              "--orb-max": orb.max,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
