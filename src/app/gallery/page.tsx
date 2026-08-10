import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { galleryImages } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A selection of completed interior fit-out, kitchen and joinery, bathroom renovation, flooring and water filtration projects across Dubai.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Gallery", href: "/gallery" }]} />

      <PageHeader
        eyebrow="Our work"
        title="Recent projects"
        description="A selection of completed fit-out, joinery, renovation and installation work. Select any image to view it larger."
        crumbs={[{ name: "Gallery", href: "/gallery" }]}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <GalleryGrid images={galleryImages} />
        </Container>
      </section>

      <CTASection
        eyebrow="Start your project"
        title="Like what you see?"
        description="Tell us about your property and we will provide a clear quotation for the work you need."
      />
    </>
  );
}
