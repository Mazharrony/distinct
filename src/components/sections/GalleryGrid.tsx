"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { blurMap } from "@/content/blur";
import type { GalleryImage } from "@/content/gallery";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggersRef = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpenIndex((current) => {
      // Return focus to the thumbnail that opened the lightbox.
      if (current !== null) triggersRef.current[current]?.focus();
      return null;
    });
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + delta + images.length) % images.length,
      );
    },
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
      // Keep focus inside the dialog.
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [openIndex, close, step]);

  const active = openIndex === null ? null : images[openIndex];

  return (
    <>
      {/* CSS columns masonry — mixed portrait and landscape sit together without
          the layout thrash of a JS masonry library. */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            ref={(node) => {
              triggersRef.current[index] = node;
            }}
            onClick={() => setOpenIndex(index)}
            style={
              { "--rise-delay": `${(index % 3) * 70}ms` } as React.CSSProperties
            }
            className="rise-in group relative block w-full cursor-pointer overflow-hidden rounded-2xl bg-surface-subtle break-inside-avoid"
            aria-label={`View larger: ${image.caption}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={blurMap[image.src]}
              className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              <span className="text-sm font-medium text-white">
                {image.caption}
              </span>
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute inset-0 cursor-default"
            tabIndex={-1}
          />

          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute top-4 right-4 z-10 inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="size-6" aria-hidden="true" />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="absolute left-3 z-10 inline-flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="absolute right-3 z-10 inline-flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </>
          ) : null}

          <figure className="relative z-0 flex max-h-full flex-col items-center gap-4">
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="90vw"
              placeholder="blur"
              blurDataURL={blurMap[active.src]}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="text-center text-sm text-white/80">
              {active.caption}
              <span className="mt-1 block text-xs text-white/50 tabular-nums">
                {(openIndex ?? 0) + 1} of {images.length}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
