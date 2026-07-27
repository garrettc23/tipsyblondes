"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Eyebrow, Heading } from "@/components/primitives";

type Item = { src: string; alt: string };

export default function GalleryStrip({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: "smooth" });
  };

  const arrow =
    "flex h-11 w-11 items-center justify-center rounded-full border border-brass/40 text-brass transition-colors hover:border-brass hover:bg-brass hover:text-warmwhite";

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <div>
          <Eyebrow>The gallery</Eyebrow>
          <Heading className="mt-3" accent="action">
            See us in
          </Heading>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => scroll(-1)} aria-label="Scroll gallery left" className={arrow}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="Scroll gallery right" className={arrow}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((g) => (
          <div
            key={g.src}
            className="relative aspect-[3/4] w-[42%] shrink-0 snap-start overflow-hidden rounded-sm sm:w-[31%] lg:w-[23%]"
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(max-width: 640px) 42vw, (max-width: 1024px) 31vw, 23vw"
              className="object-cover"
            />
          </div>
        ))}
        <Link
          href="/gallery"
          className="flex aspect-[3/4] w-[42%] shrink-0 snap-start flex-col items-center justify-center gap-1.5 rounded-sm border border-brass bg-warmwhite text-center transition-colors hover:bg-cream sm:w-[31%] lg:w-[23%]"
        >
          <span className="script text-2xl text-brass">See more</span>
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-ink">Open the gallery</span>
          <span className="mt-1 text-lg text-brass" aria-hidden>
            &rarr;
          </span>
        </Link>
      </div>
    </>
  );
}
