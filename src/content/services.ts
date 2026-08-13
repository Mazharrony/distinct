import type { LucideIcon } from "lucide-react";
import {
  AirVent,
  Blocks,
  Droplets,
  Hammer,
  Layers3,
  PaintRoller,
  ShieldCheck,
  Sprout,
  Wrench,
  Zap,
  GlassWater,
  Sparkles,
} from "lucide-react";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  /** Short name used in navigation and cards. */
  name: string;
  /** Headline used on the service page. */
  headline: string;
  /** One-line summary used on cards and in meta descriptions. */
  summary: string;
  icon: LucideIcon;
  /** Opening paragraph on the service page. */
  intro: string;
  /** The service list. */
  items: string[];
  /** Closing paragraph. */
  outro?: string;
  image: string;
  imageAlt: string;
  faqs: Faq[];
  /** Slugs of related services, cross-linked at the foot of the page. */
  related: string[];
  seo: { title: string; description: string };
};

export const services: Service[] = [
  {
    slug: "maintenance-repairs",
    name: "Maintenance & Repairs",
    headline: "Maintenance & Repairs",
    summary:
      "Keeping your property maintained, functional and looking its best.",
    icon: Wrench,
    intro:
      "Whether it is a one-off repair or ongoing maintenance, we provide practical solutions designed around your property and requirements.",
    items: [
      "General property maintenance",
      "Plumbing repairs",
      "Electrical services",
      "AC maintenance and repairs",
      "Painting and decorating",
      "Handyman services",
      "Preventative maintenance",
      "General repairs and replacements",
      "Property snagging and remedial works",
    ],
    outro:
      "One point of contact for the trades your property needs, so you are not chasing several contractors for a single job.",
    image: "/gallery/bathroom-shower-vanity-refurbishment.jpeg",
    imageAlt:
      "Refurbished bathroom with large-format tiling and a wall-hung timber vanity",
    faqs: [
      {
        q: "Do you handle one-off repairs or only maintenance contracts?",
        a: "Both. We take on single call-outs as readily as ongoing maintenance for landlords and property managers. Tell us what needs doing and we will quote for that work alone.",
      },
      {
        q: "Which areas of Dubai do you cover?",
        a: "We work across Dubai, covering villa communities, apartment buildings and commercial premises. Contact us with your location and we will confirm scheduling.",
      },
      {
        q: "Can you carry out snagging works on a new handover?",
        a: "Yes. We carry out snagging inspections and the remedial works that follow, which is a common requirement on newly handed-over villas and apartments.",
      },
    ],
    related: ["plumbing", "electrical", "air-conditioning"],
    seo: {
      title: "Property Maintenance & Repairs in Dubai",
      description:
        "British-run property maintenance and repairs in Dubai. Plumbing, electrical, AC, painting, handyman services, preventative maintenance and snagging works.",
    },
  },
  {
    slug: "interior-fit-out-renovations",
    name: "Interior Fit-Out & Renovations",
    headline: "Transforming Spaces. Creating Better Homes.",
    summary:
      "From individual rooms to complete property transformations, delivered by one team.",
    icon: Blocks,
    intro:
      "From individual rooms to complete property transformations, we provide professional renovation and interior fit-out solutions.",
    items: [
      "Complete villa renovations",
      "Apartment refurbishments",
      "Bathroom renovations",
      "Kitchen renovations",
      "Custom kitchens",
      "Bespoke wardrobes",
      "Custom joinery and carpentry",
      "Media walls and feature walls",
      "TV units and entertainment areas",
      "Flooring installations",
      "SPC flooring",
      "Painting and decorating",
      "Gypsum and ceiling works",
      "Partition walls",
      "Lighting installations",
      "General building works",
    ],
    outro:
      "We can manage projects from individual upgrades through to larger renovation programmes, coordinating the various trades and specialist works required to deliver a complete result.",
    image: "/gallery/open-plan-kitchen-living-fit-out.jpeg",
    imageAlt:
      "Open-plan apartment kitchen and living area following a complete interior fit-out",
    faqs: [
      {
        q: "Do you manage the whole renovation or just the building work?",
        a: "The whole project. We coordinate the trades, materials, scheduling and specialist works so you have a single point of contact from quotation through to completion.",
      },
      {
        q: "How long does a villa renovation take?",
        a: "It depends entirely on scope. A single bathroom is typically measured in weeks, a full villa renovation in months. We set out an indicative programme with your quotation once we have assessed the property.",
      },
      {
        q: "Can you work to my own designer's drawings?",
        a: "Yes. We are happy to build to supplied drawings and specifications, or to develop a bespoke design with you if you would prefer to start from scratch.",
      },
    ],
    related: ["kitchens-joinery", "flooring", "painting-decorating"],
    seo: {
      title: "Interior Fit-Out & Renovations in Dubai",
      description:
        "Villa renovations, apartment refurbishments, bathroom and kitchen renovations, joinery, flooring and ceiling works. British-run fit-out contractor in Dubai.",
    },
  },
  {
    slug: "air-conditioning",
    name: "Air Conditioning",
    headline: "AC Maintenance & Repairs",
    summary:
      "Servicing, cleaning and repairs that keep your system running through the Dubai summer.",
    icon: AirVent,
    intro:
      "Reliable air conditioning is essential in the UAE. Our AC services help keep your system operating efficiently, hygienically and reliably throughout the year.",
    items: [
      "AC maintenance",
      "AC servicing",
      "Major AC servicing",
      "Minor AC servicing",
      "AC cleaning",
      "Indoor unit cleaning",
      "Coil cleaning",
      "Filter cleaning",
      "AC duct cleaning",
      "Anti-bacterial treatment",
      "Thermostat replacement",
      "AC repairs",
      "AC fault diagnosis",
    ],
    outro:
      "Regular professional maintenance can help improve performance, reduce potential breakdowns and maintain a cleaner indoor environment.",
    image: "/gallery/open-plan-kitchen-living-fit-out.jpeg",
    imageAlt: "Ceiling air conditioning outlets in a finished apartment interior",
    faqs: [
      {
        q: "How often should AC be serviced in Dubai?",
        a: "Most properties benefit from servicing twice a year, ideally before and after the peak summer months when the system works hardest. Heavier usage or dusty locations may warrant more frequent attention.",
      },
      {
        q: "What is the difference between a minor and a major service?",
        a: "A minor service covers filter cleaning, checks and general servicing. A major service is more thorough, including coil cleaning, drainage checks and a deeper clean of the indoor unit.",
      },
      {
        q: "My AC is not cooling properly — can you diagnose it?",
        a: "Yes. We carry out fault diagnosis to identify the cause, then quote for the repair before proceeding so you know the cost upfront.",
      },
    ],
    related: ["maintenance-repairs", "electrical", "plumbing"],
    seo: {
      title: "AC Maintenance, Servicing & Repairs in Dubai",
      description:
        "AC servicing, coil and duct cleaning, anti-bacterial treatment, fault diagnosis and repairs across Dubai. British-run, professional standards.",
    },
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    headline: "Professional Plumbing Solutions",
    summary:
      "From small repairs to larger plumbing projects, for homes and commercial premises.",
    icon: Droplets,
    intro:
      "From small repairs to larger plumbing projects, our team provides reliable plumbing services for residential and commercial properties.",
    items: [
      "Plumbing repairs",
      "Leaking pipes",
      "Water leaks",
      "Tap and mixer replacement",
      "Toilet repairs and replacement",
      "Shower repairs",
      "Water heater installation",
      "Water pressure issues",
      "Pumps and pump replacement",
      "Drainage issues",
      "General plumbing maintenance",
    ],
    image: "/gallery/bathroom-walk-in-shower-vanity.jpeg",
    imageAlt: "Bathroom with a walk-in shower and twin basins following plumbing works",
    faqs: [
      {
        q: "Can you trace a leak without damaging the finishes?",
        a: "We start by investigating the likely source before opening anything up, so works are kept as contained as possible. Where access is unavoidable we make good afterwards.",
      },
      {
        q: "Do you replace water heaters and pumps?",
        a: "Yes — water heater installation, pressure systems, pumps and pump replacement are all covered, along with the plumbing alterations they require.",
      },
      {
        q: "My water pressure is poor throughout the villa. Can that be fixed?",
        a: "Usually. Low pressure is commonly down to the pump, the pressure system or a restriction in the pipework. We assess the property to identify which, then recommend the appropriate solution.",
      },
    ],
    related: ["waterproofing", "water-filtration", "maintenance-repairs"],
    seo: {
      title: "Plumbing Services in Dubai",
      description:
        "Plumbing repairs, leak detection, water heaters, pumps, drainage and general plumbing maintenance for Dubai homes and commercial properties.",
    },
  },
  {
    slug: "electrical",
    name: "Electrical",
    headline: "Safe. Reliable. Professional.",
    summary:
      "Electrical repairs, installations and lighting for residential and commercial properties.",
    icon: Zap,
    intro:
      "Our electrical services cover general electrical repairs, installations and property improvements.",
    items: [
      "Electrical fault finding",
      "Light replacement",
      "Ceiling light installation",
      "Socket replacement",
      "Switch replacement",
      "Additional sockets",
      "Decorative lighting",
      "LED lighting",
      "Outdoor lighting",
      "Electrical repairs",
      "General electrical maintenance",
    ],
    outro:
      "All works are carried out with safety and professional standards in mind.",
    image: "/gallery/gloss-white-kitchen-marble-splashback.jpeg",
    imageAlt: "Kitchen with under-cabinet lighting, sockets and switches installed to the splashback",
    faqs: [
      {
        q: "Can you add sockets or move lighting during a renovation?",
        a: "Yes. Additional sockets, relocated switches and new lighting circuits are a normal part of the fit-out work we carry out, and are best planned before finishes go on.",
      },
      {
        q: "Do you install decorative and LED lighting?",
        a: "We do — including cove and concealed LED lighting, feature and decorative fittings, and outdoor lighting schemes.",
      },
      {
        q: "Something keeps tripping. Can you find the fault?",
        a: "Yes. We carry out fault finding to isolate the cause rather than simply replacing parts, then quote for the remedial work needed.",
      },
    ],
    related: ["maintenance-repairs", "air-conditioning", "interior-fit-out-renovations"],
    seo: {
      title: "Electrical Services in Dubai",
      description:
        "Electrical fault finding, lighting installation, sockets and switches, LED and decorative lighting, repairs and maintenance across Dubai.",
    },
  },
  {
    slug: "waterproofing",
    name: "Waterproofing",
    headline: "Protecting Your Property",
    summary:
      "Roof, bathroom, balcony, terrace and tank waterproofing, plus leak investigation.",
    icon: ShieldCheck,
    intro:
      "Water ingress and moisture can cause significant damage if left untreated. We provide waterproofing solutions for a range of residential and commercial applications.",
    items: [
      "Roof waterproofing",
      "Bathroom waterproofing",
      "Balcony waterproofing",
      "Terrace waterproofing",
      "Pool waterproofing",
      "Water tank waterproofing",
      "Wet area waterproofing",
      "Leak investigation",
      "Waterproofing repairs",
    ],
    outro:
      "Our approach is to identify the source of the issue and recommend the most appropriate solution.",
    image: "/gallery/marble-bathroom-renovation.jpeg",
    imageAlt: "Marble-lined wet room with a walk-in shower and concealed drainage",
    faqs: [
      {
        q: "There is damp on the ceiling below my bathroom. What happens first?",
        a: "A leak investigation. Treating the symptom without finding the source tends to mean the damage returns, so we identify where water is getting in before recommending the repair.",
      },
      {
        q: "Do you waterproof bathrooms during a renovation?",
        a: "Yes, and it is far cheaper to do it properly at that stage than to revisit it later. Wet area waterproofing is included as standard in our bathroom renovations.",
      },
      {
        q: "Can you waterproof a roof or terrace?",
        a: "Yes — roofs, terraces, balconies, pools and water tanks, along with repairs to existing waterproofing that has failed.",
      },
    ],
    related: ["plumbing", "interior-fit-out-renovations", "maintenance-repairs"],
    seo: {
      title: "Waterproofing Services in Dubai",
      description:
        "Roof, bathroom, balcony, terrace, pool and water tank waterproofing in Dubai, plus leak investigation and waterproofing repairs.",
    },
  },
  {
    slug: "water-filtration",
    name: "Water Filtration",
    headline: "Better Water. Better Living.",
    summary:
      "Whole-house filtration, softeners, reverse osmosis and pump solutions.",
    icon: GlassWater,
    intro:
      "We provide water filtration and water treatment solutions for residential and commercial properties.",
    items: [
      "Whole-house filtration systems",
      "3-stage jumbo filtration systems",
      "Reverse osmosis drinking water systems",
      "Water softeners",
      "Water tank cleaning",
      "Water heater installation",
      "Water pressure systems",
      "Water pumps",
      "Pump repairs and replacement",
    ],
    outro:
      "We assess your requirements and recommend a suitable solution based on your property's water usage and needs.",
    image: "/gallery/whole-house-water-filtration-system.jpeg",
    imageAlt:
      "Installed whole-house water filtration system with twin vessels, a softener and jumbo pre-filters",
    faqs: [
      {
        q: "What is the difference between a filter and a softener?",
        a: "A filter removes sediment, chlorine and impurities. A softener specifically reduces the hardness minerals that cause limescale on taps, glassware and appliances. Many Dubai properties benefit from both.",
      },
      {
        q: "Do I need reverse osmosis if I have whole-house filtration?",
        a: "They serve different purposes. Whole-house filtration improves the water used throughout the property; a reverse osmosis system is fitted at a single point for drinking water.",
      },
      {
        q: "How do I know which system suits my property?",
        a: "We assess your water usage, property size and what you want to achieve, then recommend a suitable system rather than fitting the largest one available.",
      },
    ],
    related: ["plumbing", "maintenance-repairs", "waterproofing"],
    seo: {
      title: "Water Filtration & Softener Systems in Dubai",
      description:
        "Whole-house water filtration, 3-stage jumbo systems, reverse osmosis drinking water, softeners, tank cleaning and pumps across Dubai.",
    },
  },
  {
    slug: "kitchens-joinery",
    name: "Kitchens & Joinery",
    headline: "Bespoke Solutions Built Around You",
    summary:
      "Custom kitchens, wardrobes, media walls and carpentry, designed and installed.",
    icon: Hammer,
    intro:
      "We provide custom joinery and carpentry solutions designed to maximise space and complement your property's interior.",
    items: [
      "Custom kitchens",
      "Kitchen islands",
      "Custom wardrobes",
      "Walk-in wardrobes",
      "TV media walls",
      "Feature walls",
      "Custom storage",
      "Vanity units",
      "Bespoke furniture",
      "Custom beds",
      "Shelving",
      "Decorative wall panelling",
      "Custom carpentry",
    ],
    outro:
      "From design and material selection through to manufacture and installation, we provide a complete bespoke service.",
    image: "/gallery/bespoke-walnut-kitchen-joinery.jpeg",
    imageAlt:
      "Bespoke walnut kitchen joinery with full-height units and integrated appliances",
    faqs: [
      {
        q: "Is the joinery made to measure?",
        a: "Yes. Everything is manufactured to suit your space and specification rather than assembled from standard modules, which is what makes it fit properly in awkward or non-standard rooms.",
      },
      {
        q: "Can you help with materials and finishes?",
        a: "We guide you through material and finish selection as part of the design stage, balancing the look you want against durability and budget.",
      },
      {
        q: "Do you make walk-in wardrobes and media walls?",
        a: "Yes — walk-in wardrobes, TV media walls, feature panelling, vanity units, custom storage and freestanding furniture are all part of the joinery service.",
      },
    ],
    related: ["interior-fit-out-renovations", "flooring", "painting-decorating"],
    seo: {
      title: "Custom Kitchens & Bespoke Joinery in Dubai",
      description:
        "Bespoke kitchens, wardrobes, media walls, vanity units, panelling and custom carpentry designed, manufactured and installed in Dubai.",
    },
  },
  {
    slug: "flooring",
    name: "Flooring",
    headline: "Quality Flooring. Professional Installation.",
    summary:
      "SPC, LVT and vinyl flooring supplied, prepared and installed properly.",
    icon: Layers3,
    intro:
      "We provide flooring solutions for residential and commercial properties.",
    items: [
      "SPC flooring",
      "LVT flooring",
      "Vinyl flooring",
      "Flooring replacement",
      "Skirting installation",
      "Staircase flooring",
      "Floor preparation",
      "Flooring repairs",
    ],
    outro:
      "Our team can assist with product selection, preparation and professional installation.",
    image: "/gallery/marble-island-kitchen-lvt-flooring.jpeg",
    imageAlt:
      "Kitchen and living space with wide-plank timber-effect flooring laid throughout",
    faqs: [
      {
        q: "What is the difference between SPC and LVT?",
        a: "Both are hard-wearing click-fit floors. SPC has a rigid stone-composite core that makes it more stable underfoot and more forgiving of minor subfloor imperfections; LVT is more flexible and slightly softer to walk on.",
      },
      {
        q: "Do you need to remove the existing floor first?",
        a: "Not always. It depends on the existing floor's condition and level. We assess the subfloor and tell you honestly whether it can be laid over or needs lifting.",
      },
      {
        q: "Is floor preparation included?",
        a: "Yes. Preparation is what determines whether a floor looks right and lasts, so it forms part of the quotation rather than appearing later as an extra.",
      },
    ],
    related: ["interior-fit-out-renovations", "painting-decorating", "kitchens-joinery"],
    seo: {
      title: "SPC, LVT & Vinyl Flooring Installation in Dubai",
      description:
        "Supply and professional installation of SPC, LVT and vinyl flooring in Dubai, including floor preparation, skirting, staircases and repairs.",
    },
  },
  {
    slug: "painting-decorating",
    name: "Painting & Decorating",
    headline: "Refresh. Transform. Protect.",
    summary:
      "Interior and exterior painting with proper preparation and a clean finish.",
    icon: PaintRoller,
    intro:
      "A professional paint finish can completely transform your property.",
    items: [
      "Interior painting",
      "Exterior painting",
      "Villa painting",
      "Apartment painting",
      "Feature walls",
      "Decorative finishes",
      "Repainting",
      "Minor wall repairs",
      "Surface preparation",
      "Commercial painting",
    ],
    outro: "We focus on preparation, clean workmanship and a quality finish.",
    image: "/gallery/kitchen-island-walnut-quartz.jpeg",
    imageAlt: "Freshly decorated interior with a clean paint finish and feature lighting",
    faqs: [
      {
        q: "How long does painting an apartment take?",
        a: "A typical apartment repaint is a matter of days rather than weeks, depending on size, the amount of preparation needed and whether the property is occupied.",
      },
      {
        q: "Do you repair the walls before painting?",
        a: "Yes. Minor wall repairs and surface preparation are part of the job — paint over a poor surface simply shows the defects through.",
      },
      {
        q: "Can you paint exteriors in Dubai's climate?",
        a: "Yes, using products suited to the conditions. Exterior work is scheduled around the weather so the finish cures properly.",
      },
    ],
    related: ["interior-fit-out-renovations", "maintenance-repairs", "flooring"],
    seo: {
      title: "Painting & Decorating Services in Dubai",
      description:
        "Interior and exterior painting for villas, apartments and commercial properties in Dubai. Proper preparation, feature walls and decorative finishes.",
    },
  },
  {
    slug: "cleaning-services",
    name: "Cleaning Services",
    headline: "Professional Cleaning Services in Dubai",
    summary:
      "Deep cleaning, move-in/move-out and post-renovation cleaning for homes and commercial premises.",
    icon: Sparkles,
    intro:
      "We provide reliable, professional cleaning solutions for homes, villas, apartments, offices and commercial properties across Dubai.",
    items: [
      "Residential & villa cleaning",
      "Office & commercial cleaning",
      "Deep cleaning",
      "Move-in / move-out cleaning",
      "Post-renovation & handover cleaning",
      "Kitchen & bathroom deep cleaning",
      "AC & vent cleaning",
      "Window & glass cleaning",
      "Empty property cleaning",
      "General maintenance & cleaning support",
    ],
    outro:
      "From regular cleaning and deep cleaning to move-in/move-out and post-renovation cleaning, our experienced team delivers a thorough, dependable service with attention to detail. Whether you need a one-off deep clean or ongoing cleaning support, we tailor the service to your property.",
    image: "/gallery/marble-bathroom-renovation.jpeg",
    imageAlt: "Spotless marble bathroom following a professional deep clean",
    faqs: [
      {
        q: "Do you clean after a renovation or handover?",
        a: "Yes. Post-renovation and handover cleaning is one of the most common jobs we take on — construction dust settles everywhere, so it needs a different approach to a routine clean.",
      },
      {
        q: "Can you handle move-in and move-out cleaning?",
        a: "Yes, for both tenants and landlords. An empty property can be cleaned thoroughly and quickly, which matters when you are working to a handover date.",
      },
      {
        q: "Do you offer one-off cleans or only regular contracts?",
        a: "Both. A single deep clean is just as welcome as ongoing scheduled cleaning support, and we will quote for exactly what you need.",
      },
    ],
    related: ["maintenance-repairs", "air-conditioning", "interior-fit-out-renovations"],
    seo: {
      title: "Professional Cleaning Services in Dubai",
      description:
        "Residential, villa and commercial cleaning in Dubai. Deep cleaning, move-in/move-out, post-renovation and handover cleaning, AC and vent cleaning, window cleaning.",
    },
  },
  {
    slug: "landscaping",
    name: "Landscaping & Outdoor",
    headline: "Make the Most of Your Outdoor Space",
    summary:
      "Garden design, artificial grass, irrigation, pergolas, decking and outdoor lighting.",
    icon: Sprout,
    intro:
      "We provide landscaping and outdoor improvement solutions designed to enhance your property's appearance, functionality and value.",
    items: [
      "Garden design",
      "Soft landscaping",
      "Artificial grass",
      "Irrigation systems",
      "Outdoor lighting",
      "Pergolas",
      "Decking",
      "Feature planting",
      "Outdoor seating areas",
      "Garden improvements",
      "Outdoor property works",
    ],
    outro:
      "From a simple garden refresh to a complete outdoor transformation, we can help bring your vision to life.",
    image: "/gallery/pergola-outdoor-kitchen.jpeg",
    imageAlt: "Pergola over an outdoor kitchen with a stone island and porcelain-tiled terrace",
    faqs: [
      {
        q: "Is artificial grass a better option in Dubai?",
        a: "For many villas it is, because it stays green through the summer without irrigation or upkeep. Natural planting still has a place, and we often combine the two.",
      },
      {
        q: "Do you install irrigation?",
        a: "Yes. Irrigation systems are essential for keeping planting alive through the summer here, and we design them around what you are actually planting.",
      },
      {
        q: "Can you build a pergola or decked seating area?",
        a: "Yes — pergolas, decking, outdoor seating areas and the lighting to go with them, so the space is usable in the evenings.",
      },
    ],
    related: ["waterproofing", "electrical", "maintenance-repairs"],
    seo: {
      title: "Landscaping & Outdoor Works in Dubai",
      description:
        "Garden design, artificial grass, irrigation, outdoor lighting, pergolas, decking and outdoor seating areas for Dubai villas and properties.",
    },
  },
];

export const serviceSlugs = services.map((service) => service.slug);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function relatedServices(service: Service) {
  return service.related
    .map((slug) => getService(slug))
    .filter((value): value is Service => Boolean(value));
}
