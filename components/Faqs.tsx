import { FAQS, type Faq } from "@/lib/content";

export default function Faqs({ items = FAQS }: { items?: Faq[] }) {
  return (
    <div className="space-y-4">
      {items.map((f) => (
        <details key={f.id} className="group rounded-2xl bg-blush px-6 text-ink-strong sm:px-7">
          <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-6 font-accent text-xl font-medium leading-[1.4] sm:text-[22px] [&::-webkit-details-marker]:hidden">
            {f.q}
            <span
              className="font-sans text-xl font-light group-open:rotate-45"
              aria-hidden
            >
              +
            </span>
          </summary>
          <div className="max-w-2xl pb-7 pr-6">
            <p className="text-base leading-relaxed text-ink">{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
