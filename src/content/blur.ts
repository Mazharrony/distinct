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
  "/gallery/bathroom-shower-vanity-refurbishment.jpeg": solid("#aea69d"),
  "/gallery/bathroom-walk-in-shower-vanity.jpeg": solid("#b4a49b"),
  "/gallery/bespoke-walnut-kitchen-joinery.jpeg": solid("#8c7965"),
  "/gallery/handleless-kitchen-marble-island.jpeg": solid("#8b8577"),
  "/gallery/kitchen-island-fluted-lighting.jpeg": solid("#8b715f"),
  "/gallery/kitchen-island-walnut-quartz.jpeg": solid("#857a73"),
  "/gallery/marble-bathroom-renovation.jpeg": solid("#a3a3a2"),
  "/gallery/marble-island-kitchen-lvt-flooring.jpeg": solid("#98887a"),
  "/gallery/open-plan-kitchen-living-fit-out.jpeg": solid("#bca699"),
  "/gallery/spc-flooring-installation.jpeg": solid("#9a8881"),
  "/gallery/technician-plumbing-under-sink.jpeg": solid("#655f5a"),
  "/gallery/whole-house-water-filtration-system.jpeg": solid("#849099"),
};
