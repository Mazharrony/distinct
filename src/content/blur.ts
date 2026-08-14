// AUTO-GENERATED. Average colour of each photograph, used as the next/image
// blur placeholder so images fade in from a matching tone instead of white.
// Regenerate if the photographs change.

function solid(hex: string) {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6">` +
    `<rect width="8" height="6" fill="${hex}"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export const blurMap: Record<string, string> = {
  "/gallery/artificial-grass-lawn.jpeg": solid("#889474"),
  "/gallery/bathroom-shower-vanity-refurbishment.jpeg": solid("#aea69d"),
  "/gallery/bathroom-walk-in-shower-vanity.jpeg": solid("#b4a49b"),
  "/gallery/bespoke-walnut-kitchen-joinery.jpeg": solid("#8c7965"),
  "/gallery/garden-lighting-stepping-stones.jpeg": solid("#6b6c66"),
  "/gallery/gloss-white-kitchen-marble-splashback.jpeg": solid("#6e6b66"),
  "/gallery/handleless-kitchen-marble-island.jpeg": solid("#8b8577"),
  "/gallery/herringbone-flooring-hallway-panelling.jpeg": solid("#75736f"),
  "/gallery/herringbone-lvt-hallway.jpeg": solid("#a59784"),
  "/gallery/kitchen-island-walnut-quartz.jpeg": solid("#857a73"),
  "/gallery/lap-pool-deep-blue.jpeg": solid("#647684"),
  "/gallery/marble-bathroom-renovation.jpeg": solid("#a3a3a2"),
  "/gallery/marble-island-kitchen-lvt-flooring.jpeg": solid("#98887a"),
  "/gallery/open-plan-kitchen-living-fit-out.jpeg": solid("#bca699"),
  "/gallery/open-plan-living-lvt-flooring.jpeg": solid("#7e716b"),
  "/gallery/pergola-outdoor-kitchen.jpeg": solid("#7c7b70"),
  "/gallery/pool-marble-sun-shelf.jpeg": solid("#6b8d92"),
  "/gallery/pool-terrace-pergola-shade.jpeg": solid("#657073"),
  "/gallery/reeded-island-kitchen-quartz.jpeg": solid("#81786b"),
  "/gallery/spc-flooring-installation.jpeg": solid("#9a8881"),
  "/gallery/staircase-flooring-landing.jpeg": solid("#b0b0ac"),
  "/gallery/staircase-spc-flooring-installation.jpeg": solid("#a69f95"),
  "/gallery/technician-plumbing-under-sink.jpeg": solid("#655f5a"),
  "/gallery/water-treatment-system-installation.jpeg": solid("#807c7b"),
  "/gallery/whole-house-water-filtration-system.jpeg": solid("#849099"),
};
