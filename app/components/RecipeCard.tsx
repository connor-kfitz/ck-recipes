import Image from "next/image"
import Link from "next/link"

import { formatCalories, formatMinutes } from "../lib/format"
import type { Recipe } from "../lib/types"

type RecipeCardProps = {
  recipe: Recipe
  href?: string
  sizes?: string
  caloriesPerServing?: boolean
}

const FRAME_CLASS =
  "group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"

export function RecipeCard({
  recipe,
  href,
  sizes = "(max-width: 767px) 50vw, 340px",
  caloriesPerServing = false
}: RecipeCardProps) {
  const frame = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-wash">
        <Image
          src={recipe.image}
          alt={recipe.imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <h3 className="mt-4 mb-4 min-h-[2lh] font-display text-[17px] font-bold leading-snug tracking-[-0.02em] text-ink">
        {recipe.title}
      </h3>
    </>
  )

  return (
    <article className="flex h-full flex-col">
      {href === undefined ? (
        <div className={FRAME_CLASS}>{frame}</div>
      ) : (
        <Link href={href} className={FRAME_CLASS}>
          {frame}
        </Link>
      )}
      <div className="mt-auto flex items-baseline justify-between gap-3 border-t border-rule pt-2 font-body text-xs font-medium uppercase tracking-[0.08em] tabular-nums">
        <span className="text-ink">{formatMinutes(recipe.minutes)}</span>
        <span className="text-muted">
          {formatCalories(recipe.calories, caloriesPerServing)}
        </span>
      </div>
    </article>
  )
}
