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

const CARD_CLASS =
  "group h-full overflow-hidden rounded-xl border border-rule bg-paper transition-colors duration-200 has-[a:hover]:border-gold has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-gold-deep"

const FRAME_CLASS = "grid h-full grid-rows-[3fr_2fr] focus-visible:outline-none"

export function RecipeCard({
  recipe,
  href,
  sizes = "(max-width: 767px) 50vw, 340px",
  caloriesPerServing = false
}: RecipeCardProps) {
  const frame = (
    <>
      <div className="relative aspect-[5/3] overflow-hidden border-b border-rule bg-wash">
        <Image
          src={recipe.image}
          alt={recipe.imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-out group-has-[a:hover]:scale-[1.03] motion-reduce:transition-none motion-reduce:group-has-[a:hover]:scale-100"
        />
      </div>
      <div className="flex flex-col p-3 sm:p-4">
        <h3 className="font-display text-lg font-bold leading-snug text-ink sm:text-xl">
          {recipe.title}
        </h3>
        <div className="mt-auto flex items-baseline justify-between gap-3 pt-2 font-body text-[13px] font-medium uppercase tabular-nums">
          <span className="text-ink">{formatMinutes(recipe.minutes)}</span>
          <span className="text-muted">
            {formatCalories(recipe.calories, caloriesPerServing)}
          </span>
        </div>
      </div>
    </>
  )

  return (
    <article className={CARD_CLASS}>
      {href === undefined ? (
        <div className={FRAME_CLASS}>{frame}</div>
      ) : (
        <Link href={href} className={FRAME_CLASS}>
          {frame}
        </Link>
      )}
    </article>
  )
}
