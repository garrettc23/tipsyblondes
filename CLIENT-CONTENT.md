# Tipsy Blondes: next client updates

Edit `lib/content.ts` for copy, imagery, package prices, reviews, and CTA labels. Colors live in `app/globals.css`. No CMS or booking-provider change is needed.

- [ ] Moodboards: share references for color, typography, image framing, and overall feeling. The current blush palette and serif typography are the interim direction.
- [ ] Preferred photos: choose homepage ribbon (`STRIP_PHOTOS`), About Us (`HOME.aboutPhoto`), cocktail inspiration (`COCKTAILS`), and gallery (`GALLERY_MEDIA`) images. Supply alt text that describes what is actually pictured.
- [ ] Bar photos: confirm which photo shows Signature white (6 ft), White (4 ft), and Wooden (4 ft). Set each `BARS` entry's `photo` to `{ src, alt }` and `photoIsPlaceholder` to `false`. All three slots deliberately await this confirmation; dimensions cannot be established from the existing filenames.
- [ ] Testimonials: the existing quotes from Alli, Ryan H., and Brit A. were approved for reuse. Change `FEATURED_REVIEWS` to select other entries in `REVIEWS`; retain exact quotes and attribution. Do not add star ratings without a source.
- [ ] Starting prices: confirm both `PACKAGES.startingPrice` values. They are currently $800 placeholders, visibly labeled on the pricing page. Set `priceIsPlaceholder` to `false` only after approval; confirmed prices will then be eligible for offer structured data. Update the pricing FAQ at the same time.
- [ ] CTA wording: confirm `INQUIRY.label` (Start your booking) and `INQUIRY.softLabel` (Grab your spot). Keep `INQUIRY.href` pointed to the inquiry form.
- [ ] Booking terms: confirm any specific retainer, balance deadline, travel policy, or extras before publishing exact amounts or promises. Current copy refers visitors to their custom quote and agreement.

## Photo and recipe policy

Show cocktail photos, not recipes. Do not add ingredient lists to content, captions, image descriptions, or structured data. Inspect original images for readable menu signs, including background text. Recipe-bearing assets were removed from the deployed public directory; originals remain recoverable in repository history. Old deployments and repository history are not purged by this site update.

## Validation for the next edit

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build`. Check mobile and desktop with gstack browse. Exercise navigation, the photo-strip pause control, and `/contact#inquiry`, without submitting a test inquiry to the clients.
