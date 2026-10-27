import { scaleNutrition } from "../lib/recipe-detail"
import type { Nutrition } from "../lib/types"

type RecipeNutritionTableProps = {
  nutrition: Nutrition
  serves: number
  recipeTitle: string
}

const HEAD_CLASS =
  "px-3 py-2 text-center font-body text-[11px] font-semibold uppercase text-muted"

const CELL_CLASS = "px-3 py-2.5 text-center font-body text-sm tabular-nums"

export function RecipeNutritionTable({
  nutrition,
  serves,
  recipeTitle
}: RecipeNutritionTableProps) {
  const whole = scaleNutrition(nutrition, serves)

  return (
    <div className="overflow-hidden rounded-xl border border-rule">
      <table className="w-full border-collapse">
        <caption className="sr-only">Nutrition for {recipeTitle}</caption>
        <thead>
          <tr className="border-b border-rule bg-wash">
            <th
              scope="col"
              className="px-4 py-2 text-left font-body text-[11px] font-semibold uppercase text-muted"
            >
              Nutrition
            </th>
            <th scope="col" className={HEAD_CLASS}>
              Cal
            </th>
            <th scope="col" className={HEAD_CLASS}>
              Carb
            </th>
            <th scope="col" className={HEAD_CLASS}>
              Fat
            </th>
            <th scope="col" className={HEAD_CLASS}>
              Prot
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-rule">
            <th
              scope="row"
              className="px-4 py-2.5 text-left font-body text-sm font-medium text-ink"
            >
              Per serving
            </th>
            <td className={`${CELL_CLASS} text-ink`}>{nutrition.calories}</td>
            <td className={`${CELL_CLASS} text-ink`}>{nutrition.carbs}g</td>
            <td className={`${CELL_CLASS} text-ink`}>{nutrition.fat}g</td>
            <td className={`${CELL_CLASS} text-ink`}>{nutrition.protein}g</td>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-4 py-2.5 text-left font-body text-sm font-normal text-muted"
            >
              Whole recipe
            </th>
            <td className={`${CELL_CLASS} text-muted`}>{whole.calories}</td>
            <td className={`${CELL_CLASS} text-muted`}>{whole.carbs}g</td>
            <td className={`${CELL_CLASS} text-muted`}>{whole.fat}g</td>
            <td className={`${CELL_CLASS} text-muted`}>{whole.protein}g</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
