import Image from "next/image"
import Link from "next/link"

import { formatCalories, formatMinutes } from "../lib/format"
import type { Recipe } from "../lib/types"

type RecipeListRowProps = {
  recipe: Recipe
  href?: string
  size?: "default" | "compact"
}

const ROW_CLASS =
  "group flex items-center gap-4 rounded-xl border border-rule bg-paper p-3 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep"

export function RecipeListRow({
  recipe,
  href,
  size = "default"
}: RecipeListRowProps) {
  const compact = size === "compact"

  const body = (
    <>
      <div
        className={`relative shrink-0 overflow-hidden rounded-lg bg-wash ${
          compact ? "h-14 w-16" : "size-[76px]"
        }`}
      >
        <Image
          src={recipe.image}
          alt={recipe.imageAlt}
          fill
          sizes={compact ? "64px" : "76px"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="min-w-0">
        <h3
          className={`font-display font-bold leading-snug text-ink ${
            compact ? "text-[15px]" : "text-[17px]"
          }`}
        >
          {recipe.title}
        </h3>
        <p className="mt-1 font-body text-[13px] tabular-nums text-muted">
          {formatMinutes(recipe.minutes)} · {formatCalories(recipe.calories, !compact)}
        </p>
      </div>
    </>
  )

  return (
    <article>
      {href === undefined ? (
        <div className={ROW_CLASS}>{body}</div>
      ) : (
        <Link href={href} className={`${ROW_CLASS} hover:border-gold`}>
          {body}
        </Link>
      )}
    </article>
  )
}
