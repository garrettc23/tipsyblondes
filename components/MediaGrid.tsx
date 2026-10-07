"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export default function MediaGrid({ items }: { items: MediaItem[] }) {
  // Only images open in the lightbox; videos use native fullscreen controls.
  const images = items.filter((m) => m.type === "image");
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpen((cur) =>
        cur === null ? cur : (cur + delta + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((m) =>
          m.type === "image" ? (
            <button
              key={m.src}
              type="button"
              onClick={() => setOpen(images.findIndex((x) => x.src === m.src))}
              aria-label={`Open image: ${m.alt}`}
              className="block w-full cursor-zoom-in overflow-hidden rounded-sm break-inside-avoid"
            >
              <Image
                src={m.src}
                alt={m.alt}
                width={800}
                height={1000}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </button>
          ) : (
            <div key={m.src} className="overflow-hidden rounded-sm break-inside-avoid">
              {/* Native controls give play/pause, a draggable seek bar, and fullscreen. */}
              <video
                className="h-auto w-full"
                src={m.src}
                autoPlay
                muted
                loop
                playsInline
                controls
                controlsList="nodownload"
                preload="metadata"
                aria-label={m.alt}
              />
            </div>
          ),
        )}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-4 text-4xl leading-none text-warmwhite/70 transition-colors hover:text-warmwhite"
          >
            &times;
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
                className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full text-3xl text-warmwhite/70 transition-colors hover:bg-warmwhite/10 hover:text-warmwhite sm:left-6"
              >
                &#8249;
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
                className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full text-3xl text-warmwhite/70 transition-colors hover:bg-warmwhite/10 hover:text-warmwhite sm:right-6"
              >
                &#8250;
              </button>
            </>
          )}

          <div
            className="relative h-[86vh] w-[92vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open].src}
              alt={images[open].alt}
              fill
              sizes="92vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
