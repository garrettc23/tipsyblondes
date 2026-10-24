import Link from "@/components/PageLink";
import Image from "next/image";
import { type ReactNode } from "react";

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
    <section
      id={id}
      className={`mx-auto max-w-[1280px] px-6 py-16 sm:px-10 sm:py-24 lg:px-16 ${className}`}
    >
      {children}
    </section>
  );
}

export function Heading({
  children,
  className = "",
  as: Tag = "h2",
  size = "lg",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  size?: "lg" | "xl";
}) {
  return (
    <Tag
      className={`${size === "xl" ? "text-5xl sm:text-6xl lg:text-7xl" : "text-[2.6rem] sm:text-5xl lg:text-[3.5rem]"} leading-[1.06] ${className}`}
    >
      {children}
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
  variant?: "solid" | "outline" | "light";
  external?: boolean;
}) {
  const styles =
    variant === "solid"
      ? "border-ink bg-ink text-warmwhite hover:bg-brass hover:border-brass"
      : variant === "light"
        ? "border-cream bg-cream text-ink hover:bg-white"
        : "border-brass bg-warmwhite text-ink hover:bg-blush";
  const cls = `cta-button inline-flex min-h-14 max-w-full items-center justify-center rounded-full border px-7 py-4 text-center text-base font-medium leading-6 tracking-[0.01em] transition-colors sm:px-9 ${styles}`;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  objectPosition = "center",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-blush ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition }}
        priority={priority}
      />
    </div>
  );
}
