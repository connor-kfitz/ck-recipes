import Image from "next/image"

import { pinnedRecipe } from "../data"

export function PinnedRecipe() {
  return (
    <section aria-labelledby="pinned-title">
      <p className="font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
        {pinnedRecipe.eyebrow}
      </p>

      <div className="group relative mt-4 aspect-[19/10] overflow-hidden rounded-xl bg-wash">
        <Image
          src={pinnedRecipe.image}
          alt={pinnedRecipe.imageAlt}
          fill
          preload
          sizes="(max-width: 1023px) 100vw, 870px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <h2
        id="pinned-title"
        className="mt-6 max-w-[15ch] font-display text-[40px] font-extrabold leading-[0.98] tracking-[-0.035em] text-balance text-ink sm:text-[56px]"
      >
        {pinnedRecipe.title}
      </h2>

      <div className="mt-5 flex flex-wrap items-baseline font-body text-[15px] font-medium tabular-nums text-ink">
        <span className="border-l border-rule px-[11px] first:border-l-0 first:pl-0">{pinnedRecipe.time}</span>
        <span className="border-l border-rule px-[11px] first:border-l-0 first:pl-0">{pinnedRecipe.calories}</span>
      </div>
    </section>
  )
}
