"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { STRIP_PHOTOS } from "@/lib/content";

export default function GalleryStrip() {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [copies, setCopies] = useState(3);

  useEffect(() => {
    const el = scroller.current;
    const group = el?.firstElementChild;
    if (!el || !group) return;
    const observer = new ResizeObserver(() => {
      const width = group.getBoundingClientRect().width;
      if (width) setCopies(Math.max(2, Math.ceil(el.clientWidth / width) + 1));
    });
    observer.observe(el);
    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el || paused || hovered) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = 0;
    let position = el.scrollLeft;
    let width = el.firstElementChild?.getBoundingClientRect().width ?? 0;
    const observer = new ResizeObserver(() => {
      width = el.firstElementChild?.getBoundingClientRect().width ?? 0;
      position = el.scrollLeft;
    });
    observer.observe(el);
    function tick(time: number) {
      if (!el || motion.matches) {
        last = 0;
        return;
      }
      if (last) {
        position += Math.min(time - last, 50) * 0.025;
        if (width && position >= width) position -= width;
        el.scrollLeft = position;
      }
      last = time;
      frame = requestAnimationFrame(tick);
    }
    function update() {
      cancelAnimationFrame(frame);
      last = 0;
      if (!motion.matches) frame = requestAnimationFrame(tick);
    }
    update();
    motion.addEventListener("change", update);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", update);
    };
  }, [paused, hovered]);

  return (
    <div className="photo-ribbon" aria-label="Moments from our events">
      <div
        ref={scroller}
        className="ribbon-scroll"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onPointerDown={() => setPaused(true)}
        onWheel={() => setPaused(true)}
        onFocus={() => setPaused(true)}
        tabIndex={0}
        role="region"
        aria-label="Event photographs. Swipe or use arrow keys to explore."
      >
        {Array.from({ length: copies }, (_, copy) => (
          <div
            className="ribbon-group"
            key={copy}
            aria-hidden={copy > 0 ? true : undefined}
          >
            {STRIP_PHOTOS.map((photo, i) => (
              <div className="ribbon-photo" key={photo.src}>
                <Image
                  src={photo.src}
                  alt={copy ? "" : photo.alt}
                  fill
                  sizes="(max-width: 640px) 42vw, 240px"
                  priority={copy === 0 && i < 4}
                  className="object-cover"
                  style={{ objectPosition: photo.position }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-3 text-[11px] tracking-[0.12em] text-ink-soft sm:px-8">
        <span>GOOD DRINKS. EVEN BETTER COMPANY.</span>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Play photo strip" : "Pause photo strip"}
          className="ribbon-toggle inline-flex min-h-9 items-center gap-2 underline-offset-4 hover:underline"
        >
          <span aria-hidden>{paused ? "▷" : "Ⅱ"}</span>{" "}
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
}
