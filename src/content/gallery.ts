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
    src: "/gallery/kitchen-island-fluted-lighting.jpeg",
    alt: "Contemporary kitchen with a fluted timber island, backlit shelving and glass pendant lights",
    width: 1101,
    height: 784,
    caption: "Custom kitchen with fluted island and feature lighting",
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
];

/** Featured selection for the home page preview. */
export const featuredImages = galleryImages.slice(0, 6);

export function imagesForService(slug: string) {
  return galleryImages.filter((image) => image.service === slug);
}
