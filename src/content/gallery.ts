export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  /** Slug of the service this project best illustrates. */
  service: string;
};

/**
 * Photographs of completed work. Dimensions are the intrinsic pixel sizes —
 * next/image needs them to reserve space, which keeps CLS at zero.
 */
export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/technician-plumbing-under-sink.jpeg",
    alt: "Distinct Solutions technician in branded uniform carrying out plumbing work beneath a kitchen sink",
    width: 1320,
    height: 1024,
    caption: "Our team on site in Dubai",
    service: "plumbing",
  },
  {
    src: "/gallery/open-plan-kitchen-living-fit-out.jpeg",
    alt: "Open-plan apartment kitchen with walnut cabinetry, a stone waterfall island and the living area beyond",
    width: 1320,
    height: 862,
    caption: "Open-plan kitchen and living fit-out",
    service: "interior-fit-out-renovations",
  },
  {
    src: "/gallery/handleless-kitchen-marble-island.jpeg",
    alt: "Handleless white kitchen with a marble-effect waterfall island, breakfast bar seating and black track lighting",
    width: 916,
    height: 1600,
    caption: "Handleless kitchen with marble waterfall island",
    service: "kitchens-joinery",
  },
  {
    src: "/gallery/bathroom-walk-in-shower-vanity.jpeg",
    alt: "Renovated bathroom with a frameless walk-in shower, timber double vanity and brushed brass fittings",
    width: 1320,
    height: 862,
    caption: "Bathroom renovation with walk-in shower",
    service: "interior-fit-out-renovations",
  },
  {
    src: "/gallery/marble-island-kitchen-lvt-flooring.jpeg",
    alt: "Kitchen with a veined marble waterfall island and wide-plank timber-effect flooring throughout",
    width: 1220,
    height: 1600,
    caption: "Marble island kitchen with LVT flooring",
    service: "flooring",
  },
  {
    src: "/gallery/bespoke-walnut-kitchen-joinery.jpeg",
    alt: "Bespoke walnut kitchen joinery with full-height units, integrated appliances and a green tiled splashback",
    width: 1218,
    height: 1600,
    caption: "Bespoke walnut kitchen joinery",
    service: "kitchens-joinery",
  },
  {
    src: "/gallery/marble-bathroom-renovation.jpeg",
    alt: "Marble-lined bathroom with a walk-in glass shower, matt black brassware and a stone vanity shelf",
    width: 1166,
    height: 1600,
    caption: "Full marble bathroom renovation",
    service: "waterproofing",
  },
  {
    src: "/gallery/kitchen-island-walnut-quartz.jpeg",
    alt: "Kitchen island finished in walnut and white quartz with pendant lighting and integrated appliances",
    width: 1218,
    height: 1600,
    caption: "Walnut and quartz island kitchen",
    service: "kitchens-joinery",
  },
  {
    src: "/gallery/bathroom-shower-vanity-refurbishment.jpeg",
    alt: "Refurbished bathroom with large-format grey tiling, a glass shower screen and a timber wall-hung vanity",
    width: 1320,
    height: 857,
    caption: "Bathroom refurbishment",
    service: "interior-fit-out-renovations",
  },
  {
    src: "/gallery/gloss-white-kitchen-marble-splashback.jpeg",
    alt: "Handleless gloss-white kitchen with a marble-effect splashback, integrated oven and induction hob",
    width: 920,
    height: 1600,
    caption: "Handleless kitchen with marble splashback",
    service: "kitchens-joinery",
  },
  {
    src: "/gallery/water-treatment-system-installation.jpeg",
    alt: "Whole-house water treatment installation with twin osmosis vessels, softener, pressure vessel and booster pump",
    width: 1220,
    height: 1600,
    caption: "Whole-house water treatment installation",
    service: "water-filtration",
  },
  {
    src: "/gallery/whole-house-water-filtration-system.jpeg",
    alt: "Installed whole-house water filtration system with twin pressure vessels, a softener and jumbo pre-filters",
    width: 946,
    height: 1600,
    caption: "Whole-house filtration and softener installation",
    service: "water-filtration",
  },
  {
    src: "/gallery/spc-flooring-installation.jpeg",
    alt: "Installer laying a plank of wood-effect SPC flooring onto a prepared subfloor",
    width: 557,
    height: 371,
    caption: "SPC flooring installation",
    service: "flooring",
  },
  {
    src: "/gallery/staircase-spc-flooring-installation.jpeg",
    alt: "Staircase clad in wood-effect SPC flooring with matching landing and a slatted metal balustrade",
    width: 1226,
    height: 1600,
    caption: "Staircase flooring installation",
    service: "flooring",
  },
  {
    src: "/gallery/staircase-flooring-landing.jpeg",
    alt: "Wood-effect flooring laid across staircase treads and the landing below",
    width: 1218,
    height: 1600,
    caption: "Staircase and landing flooring",
    service: "flooring",
  },
  {
    src: "/gallery/reeded-island-kitchen-quartz.jpeg",
    alt: "Kitchen island faced in reeded timber with a white quartz worktop and integrated appliances behind",
    width: 1236,
    height: 1600,
    caption: "Reeded island kitchen with quartz worktop",
    service: "kitchens-joinery",
  },
  {
    src: "/gallery/herringbone-flooring-hallway-panelling.jpeg",
    alt: "Hallway with herringbone wood-effect flooring and a navy paint-finished panelled wall",
    width: 1320,
    height: 1131,
    caption: "Herringbone flooring with panelled wall",
    service: "flooring",
  },
  {
    src: "/gallery/herringbone-lvt-hallway.jpeg",
    alt: "Herringbone LVT flooring laid through a hallway with painted skirting and doors",
    width: 1320,
    height: 1146,
    caption: "Herringbone LVT hallway",
    service: "flooring",
  },
  {
    src: "/gallery/garden-lighting-stepping-stones.jpeg",
    alt: "Side garden at dusk with stepping stones set into artificial grass, uplit planters and recessed ground lighting",
    width: 1214,
    height: 1600,
    caption: "Garden lighting and stepping-stone path",
    service: "landscaping",
  },
  {
    src: "/gallery/pergola-outdoor-kitchen.jpeg",
    alt: "Pergola over an outdoor kitchen with a stone island, built-in barbecue and porcelain-tiled terrace",
    width: 914,
    height: 1600,
    caption: "Pergola with outdoor kitchen and terrace",
    service: "landscaping",
  },
  {
    src: "/gallery/artificial-grass-lawn.jpeg",
    alt: "Artificial grass lawn laid to a villa garden, edged with porcelain paving and boundary railings",
    width: 1320,
    height: 967,
    caption: "Artificial grass lawn installation",
    service: "landscaping",
  },
  {
    src: "/gallery/pool-marble-sun-shelf.jpeg",
    alt: "Swimming pool with a curved marble sun-shelf and coping, planting along the boundary behind",
    width: 1320,
    height: 725,
    caption: "Pool with marble sun-shelf",
    service: "waterproofing",
  },
  {
    src: "/gallery/lap-pool-deep-blue.jpeg",
    alt: "Deep blue lap pool with stone coping running alongside a mature hedge",
    width: 920,
    height: 1600,
    caption: "Lap pool and stone coping",
    service: "waterproofing",
  },
  {
    src: "/gallery/pool-terrace-pergola-shade.jpeg",
    alt: "Pool terrace with a louvred shade structure, artificial grass and porcelain-tiled decking",
    width: 720,
    height: 1280,
    caption: "Pool terrace with shade structure",
    service: "landscaping",
  },
  {
    src: "/gallery/open-plan-living-lvt-flooring.jpeg",
    alt: "Open-plan living and dining space with wide-plank LVT flooring and a marble breakfast island",
    width: 912,
    height: 1600,
    caption: "Open-plan living with LVT flooring",
    service: "interior-fit-out-renovations",
  },
];

/** Featured selection for the home page preview. */
export const featuredImages = galleryImages.slice(0, 6);

export function imagesForService(slug: string) {
  return galleryImages.filter((image) => image.service === slug);
}
