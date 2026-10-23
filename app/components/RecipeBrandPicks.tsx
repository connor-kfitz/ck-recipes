import { IngredientTile } from "./IngredientTile"
import type { Ingredient } from "../lib/types"

type RecipeBrandPicksProps = {
  picks: Ingredient[]
}

export function RecipeBrandPicks({ picks }: RecipeBrandPicksProps) {
  if (picks.length === 0) {
    return null
  }

  return (
    <section aria-labelledby="brand-picks-heading" className="mt-12">
      <h2
        id="brand-picks-heading"
        className="font-display text-[19px] font-extrabold tracking-[-0.03em] text-ink"
      >
        Brand picks in this recipe
      </h2>

      <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {picks.map((pick) => (
          <li key={pick.id}>
            <IngredientTile ingredient={pick} frame="paper"/>
          </li>
        ))}
      </ul>
    </section>
  )
}
