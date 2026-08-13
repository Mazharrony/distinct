import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Building2,
  ClipboardList,
  Gem,
  HardHat,
  Handshake,
  Home,
  Layers,
  MessageSquare,
  PhoneCall,
  Ruler,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

/**
 * Every phone number, address and contact link on the site reads from here.
 * Change it once, it changes everywhere.
 */
export const site = {
  name: "Distinct Solutions & Technical Services",
  shortName: "Distinct Solutions",
  tagline: "Recognisably Different",
  strapline: "One Company. Every Solution.",
  promise: "Making Your Property Our Priority",
  description:
    "British-run property maintenance, technical services, renovation and fit-out company based in Dubai, UAE. Quality workmanship, transparent pricing and reliable project management.",
  url: "https://www.distinct-solutions.ae",
  locale: "en_AE",

  phone: {
    display: "+971 55 422 7211",
    dial: "+971554227211",
  },
  whatsapp: {
    number: "971554227211",
    defaultMessage:
      "Hello Distinct Solutions, I'd like to enquire about a service for my property.",
  },
  email: "info@distinct-solutions.ae",
  location: {
    city: "Dubai",
    country: "United Arab Emirates",
    display: "Dubai, UAE",
  },
  hours: "Monday – Sunday, 8:00 – 18:00",
} as const;

/** Builds a wa.me link with a prefilled message. */
export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsapp.defaultMessage);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
}

export const telLink = `tel:${site.phone.dial}`;
export const mailLink = `mailto:${site.email}`;

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Single-page navigation. The interior routes still exist in the codebase but
 * are not linked or indexed while the site runs as a landing page — see
 * robots.ts and sitemap.ts. Restoring them is a matter of pointing these
 * hrefs back at the routes.
 */
export const mainNav = [
  { label: "Services", href: "#services", id: "services" },
  { label: "About", href: "#about", id: "about" },
  { label: "Our Work", href: "#work", id: "work" },
  { label: "Reviews", href: "#reviews", id: "reviews" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

/* -------------------------------------------------------------------------- */
/* Trust signals                                                               */
/* -------------------------------------------------------------------------- */

export type TrustPoint = { label: string; icon: LucideIcon };

export const trustPoints: TrustPoint[] = [
  { label: "British-run company", icon: BadgeCheck },
  { label: "Workmanship guarantee", icon: ShieldCheck },
  { label: "Transparent pricing", icon: Wallet },
  { label: "Residential & commercial", icon: Building2 },
];

export type ValueProp = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** "Why Distinct?" — the ten commitments from the brand brief. */
export const whyDistinct: ValueProp[] = [
  {
    title: "British-Run Company",
    description:
      "Professional service backed by British leadership, attention to detail and high standards.",
    icon: BadgeCheck,
  },
  {
    title: "Professional & Experienced Team",
    description:
      "Our team and trusted specialists bring experience across technical services, maintenance, renovations and property improvements.",
    icon: Users,
  },
  {
    title: "High-Quality Workmanship",
    description:
      "We take pride in delivering work to a high standard with attention to detail.",
    icon: HardHat,
  },
  {
    title: "Premium Materials",
    description:
      "Where appropriate, we use quality materials and products selected for performance and durability.",
    icon: Gem,
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear quotations and straightforward pricing with no unnecessary surprises.",
    icon: Wallet,
  },
  {
    title: "Reliable Project Management",
    description:
      "We coordinate projects and trades to provide clients with a smoother, more organised experience.",
    icon: ClipboardList,
  },
  {
    title: "Residential & Commercial",
    description:
      "From private villas and apartments to commercial properties, we provide solutions for a wide range of clients.",
    icon: Building2,
  },
  {
    title: "Bespoke Solutions",
    description:
      "Every property is different. We tailor our approach to suit your requirements.",
    icon: Ruler,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Our goal is simple: deliver a result our customers are happy to recommend.",
    icon: Handshake,
  },
  {
    title: "Workmanship Guarantee",
    description:
      "We stand behind the quality of our workmanship and aim to get things right first time.",
    icon: Award,
  },
];

/* -------------------------------------------------------------------------- */
/* Process                                                                     */
/* -------------------------------------------------------------------------- */

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Contact Us",
    description:
      "Tell us what you need or arrange an initial consultation.",
    icon: PhoneCall,
  },
  {
    title: "Site Assessment",
    description:
      "Where required, we visit your property to assess the work and understand your requirements.",
    icon: ClipboardList,
  },
  {
    title: "Quotation",
    description:
      "We provide a clear quotation outlining the proposed works and costs.",
    icon: MessageSquare,
  },
  {
    title: "Project Planning",
    description: "Once approved, we arrange materials, labour and scheduling.",
    icon: Layers,
  },
  {
    title: "Professional Installation",
    description:
      "Our team carries out the agreed works with care and attention to detail.",
    icon: Wrench,
  },
  {
    title: "Completion",
    description:
      "We inspect the completed works and ensure the project is finished to the agreed requirements.",
    icon: Sparkles,
  },
];

/* -------------------------------------------------------------------------- */
/* Audiences                                                                   */
/* -------------------------------------------------------------------------- */

export type Audience = { label: string; icon: LucideIcon };

export const audiences: Audience[] = [
  { label: "Homeowners", icon: Home },
  { label: "Landlords", icon: Building2 },
  { label: "Property managers", icon: ClipboardList },
  { label: "Villa owners", icon: Home },
  { label: "Apartment owners", icon: Building2 },
  { label: "Offices", icon: Building2 },
  { label: "Retail units", icon: Store },
  { label: "Commercial properties", icon: Store },
  { label: "Property investors", icon: Wallet },
];

/** The company commitments listed on the About page. */
export const commitments: string[] = [
  "British-run company",
  "Professional and experienced team",
  "High-quality workmanship",
  "Premium materials",
  "Transparent and competitive pricing",
  "Reliable project management",
  "Residential and commercial services",
  "Bespoke design and installation solutions",
  "Customer satisfaction focused",
  "Workmanship guarantee",
];

/** The new-customer offer, referenced on the home, offer and contact pages. */
export const offer = {
  headline: "10% off labour on your first project",
  short: "10% off labour",
  detail:
    "Book your first service or project with Distinct Solutions and receive 10% off labour costs.",
  terms: "For new customers only. Terms and conditions apply.",
} as const;

/* -------------------------------------------------------------------------- */
/* Testimonials                                                                */
/* -------------------------------------------------------------------------- */

export type Testimonial = {
  quote: string;
  rating: number;
};

/**
 * Customer reviews, exactly as supplied. No names or dates came with them, so
 * none are shown — inventing an attribution would misrepresent a real review.
 * Add `name` / `source` fields here if those details become available.
 */
export const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote:
      "Excellent service from start to finish. The team arrived on time, were professional and kept everything clean and tidy. The quality of the renovation work was exactly what we wanted. Would definitely recommend Distinct Solutions.",
  },
  {
    rating: 5,
    quote:
      "Really impressed with the service. Communication was excellent, the team were polite and professional, and the work was completed to a very high standard. It's refreshing to find a company that actually cares about getting things right.",
  },
  {
    rating: 5,
    quote:
      "Used Distinct Solutions for maintenance and renovation works at our villa. Everything was handled professionally and efficiently. They gave us clear pricing upfront and there were no surprises. Very happy with the final result.",
  },
  {
    rating: 5,
    quote:
      "Fantastic experience. From the initial quotation through to completion, the team were helpful and professional. The workmanship was excellent and they paid attention to the small details. Highly recommended.",
  },
  {
    rating: 5,
    quote:
      "Great company to deal with. They responded quickly, arranged the work around our schedule and completed everything exactly as agreed. The team were respectful of our home and left everything clean afterwards.",
  },
  {
    rating: 5,
    quote:
      "Very happy with Distinct Solutions. We had several different jobs that needed doing and they were able to coordinate everything for us. Good communication, reliable service and excellent workmanship.",
  },
  {
    rating: 5,
    quote:
      "Couldn't be happier with the result. The team were professional from beginning to end and the quality of the work really stood out. We would definitely use Distinct Solutions again.",
  },
  {
    rating: 5,
    quote:
      "Highly recommended. Honest advice, competitive pricing and very good workmanship. They turned up when they said they would and completed the job without any hassle.",
  },
];
