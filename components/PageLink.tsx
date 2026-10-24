"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

// Start page navigation above the shared header instead of at Next's first
// page element. onNavigate also handles same-page links and keyboard activation,
// while leaving modified clicks and external destinations to the browser.
export default function PageLink(
  props: Omit<ComponentProps<typeof Link>, "scroll" | "onNavigate">,
) {
  return (
    <Link
      {...props}
      scroll={false}
      onNavigate={() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        // Cancel any remaining browser focus scroll after keyboard activation.
        requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "instant" }));
      }}
    />
  );
}
