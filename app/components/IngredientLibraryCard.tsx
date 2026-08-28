import Image from "next/image"

import { ingredientLibrary } from "../data"
import { ArrowRight, ChevronRight } from "lucide-react"

export function IngredientLibraryCard() {
  return (
    <section aria-labelledby="ingredients-title" className="lg:h-full">
      <a
        href={ingredientLibrary.href}
        className="flex items-center justify-between gap-4 rounded-xl border border-rule bg-wash p-4 transition-colors duration-200 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep lg:hidden"
      >
        <span>
          <span className="block font-display text-lg font-extrabold tracking-[-0.02em] text-ink">
            {ingredientLibrary.heading}
          </span>
          <span className="block font-body text-sm text-muted">
            {ingredientLibrary.subhead}
          </span>
        </span>
        <ChevronRight className="size-5 shrink-0 text-gold-deep" strokeWidth={2.25} aria-hidden="true"/>
      </a>

      <div className="hidden h-full flex-col rounded-xl border border-rule bg-paper p-5 lg:flex">
        <h2
          id="ingredients-title"
          className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink"
        >
          {ingredientLibrary.heading}
        </h2>
        <p className="mt-1 font-body text-sm text-muted">{ingredientLibrary.subhead}</p>

        <ul className="mt-5 grid flex-1 auto-rows-fr grid-cols-2 gap-x-3 gap-y-4">
          {ingredientLibrary.items.map((item) => (
            <li key={item.id} className="group flex flex-col">
              <div className="relative min-h-[104px] flex-1 overflow-hidden rounded-lg bg-wash">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="250px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <p className="mt-2 font-body text-[13px] leading-snug text-ink">{item.name}</p>
            </li>
          ))}
        </ul>

        <a
          href={ingredientLibrary.href}
          className="group mt-6 inline-flex items-center gap-1.5 self-start font-body text-sm font-semibold text-gold-deep transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
        >
          {ingredientLibrary.linkLabel}
          <ArrowRight
            className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  )
}
