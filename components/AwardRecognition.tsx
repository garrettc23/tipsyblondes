import Image from "next/image";
import { SITE } from "@/lib/content";

export default function AwardRecognition() {
  return (
    <a
      href={SITE.theKnot}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${SITE.award} on The Knot. Open in a new tab`}
      className="flex w-full items-center gap-4 rounded-xl bg-warmwhite p-5 text-left shadow-[0_6px_24px_rgb(68_59_55_/_0.07)] transition-shadow hover:shadow-[0_8px_28px_rgb(68_59_55_/_0.12)]"
    >
      <Image
        src="/media/knot-award.webp"
        alt=""
        width={64}
        height={64}
        className="size-16 shrink-0 object-contain"
      />
      <span>
        <span className="block font-serif text-2xl leading-tight text-ink">{SITE.award}</span>
        <span className="mt-1 block text-sm text-ink-soft">on The Knot</span>
      </span>
    </a>
  );
}
