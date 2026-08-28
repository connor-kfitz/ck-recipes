import Image from "next/image"

import type { Recipe } from "../data"

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="flex h-full flex-col">
      <a
        href="#"
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-wash">
          <Image
            src={recipe.image}
            alt={recipe.imageAlt}
            fill
            sizes="(max-width: 767px) 50vw, 340px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
        <h3 className="mt-4 mb-4 min-h-[2lh] font-display text-[17px] font-bold leading-snug tracking-[-0.02em] text-ink">
          {recipe.title}
        </h3>
      </a>
      <div className="mt-auto flex items-baseline justify-between gap-3 border-t border-rule pt-2 font-body text-xs font-medium uppercase tracking-[0.08em] tabular-nums">
        <span className="text-ink">{recipe.time}</span>
        <span className="text-muted">{recipe.calories}</span>
      </div>
    </article>
  )
}
