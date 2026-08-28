import Image from "next/image";
import { Clock, Flame, Pin, Tag } from "lucide-react";

import { MetaChip } from "./MetaChip";
import { pinnedRecipe } from "../data";

export function PinnedRecipe() {
  return (
    <section aria-labelledby="pinned-title">
      <div className="group relative aspect-[16/9] overflow-hidden rounded-xl bg-wash">
        <Image
          src={pinnedRecipe.image}
          alt={pinnedRecipe.imageAlt}
          fill
          preload
          sizes="(max-width: 1023px) 100vw, 870px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        {/* State marker, not a heading label: it says which recipe is pinned right now. */}
        <p className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-paper/95 px-3 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-ink shadow-[0_2px_10px_rgba(19,17,16,0.14)]">
          <Pin className="size-3 text-gold-deep" strokeWidth={2.5} aria-hidden="true" />
          {pinnedRecipe.eyebrow}
        </p>
      </div>

      <h2
        id="pinned-title"
        className="mt-6 max-w-[15ch] font-display text-[40px] font-extrabold leading-[0.98] tracking-[-0.035em] text-balance text-ink sm:text-[56px]"
      >
        {pinnedRecipe.title}
      </h2>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <MetaChip icon={Clock} label={pinnedRecipe.time} />
        <MetaChip icon={Flame} label={pinnedRecipe.calories} />
        <MetaChip icon={Tag} label={pinnedRecipe.brandPicks} />
      </div>
    </section>
  );
}
