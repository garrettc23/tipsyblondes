"use client";

import { useEffect } from "react";

export default function ContactScrollReset() {
  useEffect(() => {
    // Next can scroll past the shared header when arriving from a lower CTA.
    // Keep direct links to the inquiry anchor working as intended.
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return null;
}
