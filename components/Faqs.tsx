"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";

export default function Faqs() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-brass/20 border-y border-brass/20">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-serif text-xl text-ink">{f.q}</span>
              <span
                className={`shrink-0 text-2xl text-brass transition-transform ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div className={`overflow-hidden transition-all ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
              <p className="text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
