import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

import { ingredientLibrary } from "../data";

export function IngredientLibraryCard() {
  return (
    <section aria-labelledby="ingredients-title">
      {/* Compact row on small screens, full card from lg up. */}
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
        <ChevronRight className="size-5 shrink-0 text-gold-deep" strokeWidth={2.25} aria-hidden="true" />
      </a>

      <div className="hidden rounded-xl border border-rule bg-paper p-5 lg:block">
        <h2
          id="ingredients-title"
          className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink"
        >
          {ingredientLibrary.heading}
        </h2>
        <p className="mt-1 font-body text-sm text-muted">{ingredientLibrary.subhead}</p>

        <ul className="mt-5 grid grid-cols-2 gap-3">
          {ingredientLibrary.items.map((item) => (
            <li key={item.id} className="group relative aspect-[3/2] overflow-hidden rounded-lg bg-wash">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="250px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </li>
          ))}
        </ul>

        <a
          href={ingredientLibrary.href}
          className="group mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gold-deep transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
        >
          {ingredientLibrary.linkLabel}
          <ArrowRight
            className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
