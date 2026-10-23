import { ingredientCategories, ingredients, recipes } from "../data"
import type {
  Ingredient,
  IngredientCategoryCount,
  IngredientCategoryFilter,
  IngredientCategoryId,
  IngredientFilters,
  IngredientGroup,
  Recipe,
  SearchParamsInput
} from "./types"
import { firstValue } from "./search-params"

export function getIngredient(id: string): Ingredient | undefined {
  return ingredients.find((ingredient) => ingredient.id === id)
}

export function parseIngredientFilters(
  searchParams: SearchParamsInput
): IngredientFilters {
  const candidate = firstValue(searchParams.category)
  const match = ingredientCategories.find((category) => category.id === candidate)

  return {
    category: match ? match.id : "all",
    query: (firstValue(searchParams.q) ?? "").trim()
  }
}

export function buildIngredientsHref(
  filters: IngredientFilters,
  patch: Partial<IngredientFilters>
): string {
  const next = { ...filters, ...patch }
  const params = new URLSearchParams()

  if (next.category !== "all") {
    params.set("category", next.category)
  }

  if (next.query !== "") {
    params.set("q", next.query)
  }

  const search = params.toString()

  return search === "" ? "/ingredients" : `/ingredients?${search}`
}

function matchesQuery(ingredient: Ingredient, query: string): boolean {
  if (query === "") {
    return true
  }

  const needle = query.toLowerCase()

  return (
    ingredient.name.toLowerCase().includes(needle) ||
    (ingredient.brand ?? "").toLowerCase().includes(needle)
  )
}

export function selectIngredients(filters: IngredientFilters): Ingredient[] {
  return ingredients.filter(
    (ingredient) =>
      (filters.category === "all" || ingredient.category === filters.category) &&
      matchesQuery(ingredient, filters.query)
  )
}

export function groupByCategory(list: Ingredient[]): IngredientGroup[] {
  return ingredientCategories
    .map((category) => ({
      id: category.id,
      label: category.label,
      items: list.filter((ingredient) => ingredient.category === category.id)
    }))
    .filter((group) => group.items.length > 0)
}

export function getIngredientCategoryCounts(): IngredientCategoryCount[] {
  const counts = ingredientCategories
    .map((category) => ({
      id: category.id as IngredientCategoryFilter,
      label: category.label,
      count: ingredients.filter((ingredient) => ingredient.category === category.id).length
    }))
    .filter((category) => category.count > 0)

  return [{ id: "all", label: "All", count: ingredients.length }, ...counts]
}

export function getCategoryLabel(id: IngredientCategoryId): string {
  return ingredientCategories.find((category) => category.id === id)?.label ?? ""
}

export function getRecipesUsingIngredient(id: string): Recipe[] {
  return recipes.filter((recipe) =>
    recipe.detail?.ingredients.some((line) => line.ingredientId === id)
  )
}

export function getAlsoIn(ingredient: Ingredient): Ingredient[] {
  return ingredients.filter(
    (other) => other.category === ingredient.category && other.id !== ingredient.id
  )
}
