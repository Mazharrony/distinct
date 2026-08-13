import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/content/site";

function Rating({ value }: { value: number }) {
  return (
    // One label for the whole rating — five separate icons would otherwise be
    // read out individually, or skipped entirely.
    <span
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`Rated ${value} out of 5`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={
            index < value ? "size-4 fill-gold text-gold" : "size-4 text-line-strong"
          }
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-y border-line bg-surface-subtle py-16 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="What our customers say"
          title="Recommended by the people we work for"
          description="Feedback from homeowners, landlords and businesses across Dubai."
        />

        {/* CSS columns so quotes of different lengths tile without gaps, the
            same approach as the gallery. */}
        <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.quote} delay={(index % 3) * 60}>
              <figure className="group relative break-inside-avoid rounded-2xl border border-line bg-surface-raised p-6 transition-[border-color,box-shadow] duration-300 hover:border-gold/30 hover:shadow-[0_18px_50px_-30px_var(--color-gold)]">
                <Quote
                  className="absolute top-5 right-5 size-8 text-gold/10 transition-colors duration-300 group-hover:text-gold/20"
                  aria-hidden="true"
                />
                <Rating value={testimonial.rating} />
                <blockquote className="mt-4">
                  <p className="text-[0.9375rem] leading-relaxed text-body">
                    {testimonial.quote}
                  </p>
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
