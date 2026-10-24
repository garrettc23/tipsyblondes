"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

export default function MediaGrid({ items }: { items: MediaItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const grid = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const viewerVideo = useRef<HTMLVideoElement>(null);
  const activeItem = open === null ? null : items[open];
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpen((current) =>
        current === null
          ? current
          : (current + delta + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    const modal = dialog.current;
    if (open === null) {
      modal?.close();
      return;
    }
    if (!modal?.open) modal?.showModal();
    grid.current?.querySelectorAll("video").forEach((video) => video.pause());
    const video = viewerVideo.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      // Let native video controls retain their arrow-key seeking/volume controls.
      if (event.target instanceof HTMLVideoElement) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      }
    };
    modal?.addEventListener("keydown", onKey);
    return () => {
      video?.pause();
      document.body.style.overflow = previousOverflow;
      modal?.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <>
      <div ref={grid} className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, index) =>
          item.type === "image" ? (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpen(index)}
              aria-label={`Open image: ${item.alt}`}
              className="block w-full cursor-zoom-in overflow-hidden rounded-xl break-inside-avoid"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={1000}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </button>
          ) : (
            <div key={item.src} className="overflow-hidden rounded-xl break-inside-avoid">
              <video
                className="h-auto w-full"
                src={item.src}
                poster={item.poster}
                muted
                playsInline
                controls
                controlsList="nodownload"
                preload="metadata"
                aria-label={item.alt}
              />
            </div>
          ),
        )}
      </div>
      <dialog
        ref={dialog}
        onClose={close}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        aria-label="Gallery viewer"
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-black/95 p-4 text-warmwhite backdrop:bg-black/80 sm:p-8"
      >
        {open !== null && activeItem && (
          <>
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery viewer"
              className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-3xl"
            >
              ×
            </button>
            <p aria-live="polite" className="absolute left-5 top-6 z-10 text-xs">
              <span className="sr-only">{activeItem.type === "video" ? "Video" : "Image"} </span>
              {open + 1} / {items.length}
            </p>
            <div className="pointer-events-none relative mx-auto h-full w-full">
              {activeItem.type === "video" ? (
                <video
                  key={activeItem.src}
                  ref={viewerVideo}
                  src={activeItem.src}
                  poster={activeItem.poster}
                  aria-label={activeItem.alt}
                  className="pointer-events-auto h-full w-full object-contain"
                  muted
                  playsInline
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                />
              ) : (
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="92vw"
                  className="object-contain"
                  priority
                />
              )}
            </div>
            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo or video"
                  className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-3xl"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo or video"
                  className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-3xl"
                >
                  ›
                </button>
              </>
            )}
          </>
        )}
      </dialog>
    </>
  );
}
