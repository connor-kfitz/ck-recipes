import { recipes } from "../data"
import type {
  Ingredient,
  Nutrition,
  Recipe,
  RecipeDetail,
  TipFilter,
  TipFilterOption,
  WrittenRecipe
} from "./types"
import { getIngredient } from "./ingredients"
import { firstValue } from "./search-params"

export function hasDetail(recipe: Recipe): recipe is WrittenRecipe {
  return recipe.detail !== undefined
}

export const writtenRecipes: WrittenRecipe[] = recipes.filter(hasDetail)

export function getWrittenRecipe(slug: string): WrittenRecipe | undefined {
  return writtenRecipes.find((recipe) => recipe.id === slug)
}

export function recipeHref(recipe: Recipe): string | undefined {
  return hasDetail(recipe) ? `/recipes/${recipe.id}` : undefined
}

export { getIngredient }

export function scaleNutrition(nutrition: Nutrition, serves: number): Nutrition {
  return {
    calories: nutrition.calories * serves,
    carbs: nutrition.carbs * serves,
    fat: nutrition.fat * serves,
    protein: nutrition.protein * serves
  }
}

export function totalMinutes(detail: RecipeDetail): number {
  return detail.prepMinutes + detail.cookMinutes
}

export function getBrandPicks(detail: RecipeDetail): Ingredient[] {
  const picks: Ingredient[] = []

  for (const line of detail.ingredients) {
    if (line.ingredientId === undefined) {
      continue
    }

    const ingredient = getIngredient(line.ingredientId)

    if (ingredient !== undefined && !picks.some((pick) => pick.id === ingredient.id)) {
      picks.push(ingredient)
    }
  }

  return picks
}

export const tipFilters: TipFilterOption[] = [
  { id: "all", label: "All" },
  { id: "tip", label: "Tips" },
  { id: "note", label: "Notes" },
  { id: "learning", label: "Learnings" }
]

export function parseTipFilter(value: string | string[] | undefined): TipFilter {
  const candidate = firstValue(value)

  return tipFilters.some((filter) => filter.id === candidate)
    ? (candidate as TipFilter)
    : "all"
}

export function isCookMode(value: string | string[] | undefined): boolean {
  return firstValue(value) === "1"
}
