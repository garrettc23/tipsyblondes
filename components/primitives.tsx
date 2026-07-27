import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="label">{children}</p>;
}

/**
 * Serif section heading with an optional italic-script accent word,
 * the recurring Beleza-style header device.
 */
export function Heading({
  children,
  accent,
  className = "",
  as: Tag = "h2",
  size = "lg",
}: {
  children: ReactNode;
  accent?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  size?: "lg" | "xl";
}) {
  const sizes =
    size === "xl"
      ? "text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
      : "text-[2.6rem] leading-[1.08] sm:text-5xl";
  return (
    <Tag className={`${sizes} ${className}`}>
      {children}
      {accent ? <span className="accent"> {accent}</span> : null}
    </Tag>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
}) {
  const base =
    "pill inline-block px-9 py-3.5 text-xs uppercase tracking-[0.22em] transition-colors";
  const styles =
    variant === "solid"
      ? "bg-brass text-warmwhite hover:bg-ink"
      : "border border-brass text-brass hover:bg-brass hover:text-warmwhite";
  const cls = `${base} ${styles}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Arch-masked photo, the recurring frame device. */
export function ArchImage({
  src,
  alt,
  className = "",
  priority = false,
  variant = "arch",
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  variant?: "arch" | "arch-full" | "circle";
  objectPosition?: string;
}) {
  const shape =
    variant === "circle"
      ? "rounded-full"
      : variant === "arch-full"
        ? "arch-full"
        : "arch";
  return (
    <div className={`relative overflow-hidden ${shape} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        style={{ objectPosition }}
        priority={priority}
      />
    </div>
  );
}
