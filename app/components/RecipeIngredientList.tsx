import Link from "next/link"

import { getIngredient } from "../lib/ingredients"
import type { RecipeDetail } from "../lib/types"

type RecipeIngredientListProps = {
  detail: RecipeDetail
  cookMode?: boolean
}

export function RecipeIngredientList({
  detail,
  cookMode = false
}: RecipeIngredientListProps) {
  const hasCalories = detail.ingredients.some((line) => line.calories !== undefined)
  const showCalories = hasCalories && !cookMode

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-2">
        <h2
          id="ingredients-heading"
          className="font-display text-[22px] font-extrabold text-ink"
        >
          Ingredients
        </h2>
        <p className="font-body text-[13px] text-muted">
          <span aria-hidden="true">◆</span> = my brand pick
        </p>
      </div>

      <ul className="divide-y divide-rule">
        {detail.ingredients.map((line) => {
          const ingredient =
            line.ingredientId === undefined ? undefined : getIngredient(line.ingredientId)

          return (
            <li
              key={`${line.amount}-${line.name}`}
              className="flex items-baseline justify-between gap-3 py-2.5"
            >
              <p
                className={`font-body text-ink ${cookMode ? "text-[17px] leading-relaxed" : "text-[15px]"}`}
              >
                <span className="tabular-nums text-muted">{line.amount}</span>{" "}
                {ingredient === undefined ? (
                  line.name
                ) : (
                  <>
                    <Link
                      href={`/ingredients/${ingredient.id}`}
                      className="border-b border-dotted border-ink transition-colors duration-200 hover:border-gold hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep"
                    >
                      {line.name}
                    </Link>{" "}
                    <span className="whitespace-nowrap rounded-full border border-rule px-2 py-0.5 align-middle font-body text-[11px] text-muted">
                      <span aria-hidden="true">◆</span>{" "}
                      <span className="sr-only">Brand pick:</span>
                      {ingredient.brand ?? ingredient.name}
                    </span>
                  </>
                )}
              </p>
              {showCalories ? (
                <span className="shrink-0 font-body text-[13px] tabular-nums text-muted">
                  {line.calories ?? "—"}
                </span>
              ) : null}
            </li>
          )
        })}
      </ul>

      {showCalories ? (
        <p className="mt-3 font-body text-[13px] leading-relaxed text-muted">
          Calories are per the amount listed.
        </p>
      ) : null}
    </div>
  )
}
