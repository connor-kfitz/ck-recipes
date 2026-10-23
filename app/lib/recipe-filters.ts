import { recipeCategories, recipes } from "../data"
import type {
  CategoryCount,
  CategoryFilter,
  FilteredRecipes,
  Recipe,
  RecipeFilters,
  SearchParamsInput,
  SortOption,
  SortOrder,
  TimeFilter,
  TimeFilterOption,
  ViewMode
} from "./types"
import { firstValue } from "./search-params"

export const PAGE_SIZE = 6

export const timeFilters: TimeFilterOption[] = [
  { id: "under-30", label: "Under 30 min" },
  { id: "30-60", label: "30–60 min" },
  { id: "over-60", label: "Over 1 hr" }
]

export const sortOptions: SortOption[] = [
  { id: "newest", label: "Newest" },
  { id: "quickest", label: "Quickest" },
  { id: "fewest-calories", label: "Fewest calories" }
]

function parseCategory(value: string | string[] | undefined): CategoryFilter {
  const candidate = firstValue(value)
  const match = recipeCategories.find((category) => category.id === candidate)

  return match ? match.id : "all"
}

function parseTime(value: string | string[] | undefined): TimeFilter {
  const candidate = firstValue(value)

  return timeFilters.some((filter) => filter.id === candidate)
    ? (candidate as TimeFilter)
    : "all"
}

function parseSort(value: string | string[] | undefined): SortOrder {
  const candidate = firstValue(value)

  return sortOptions.some((option) => option.id === candidate)
    ? (candidate as SortOrder)
    : "newest"
}

function parseView(value: string | string[] | undefined): ViewMode {
  return firstValue(value) === "list" ? "list" : "grid"
}

function parseLimit(value: string | string[] | undefined): number {
  const parsed = Number.parseInt(firstValue(value) ?? "", 10)

  if (!Number.isFinite(parsed) || parsed < PAGE_SIZE) {
    return PAGE_SIZE
  }

  return Math.min(Math.ceil(parsed / PAGE_SIZE) * PAGE_SIZE, recipes.length)
}

export function parseRecipeFilters(searchParams: SearchParamsInput): RecipeFilters {
  return {
    category: parseCategory(searchParams.category),
    time: parseTime(searchParams.time),
    sort: parseSort(searchParams.sort),
    view: parseView(searchParams.view),
    query: (firstValue(searchParams.q) ?? "").trim(),
    limit: parseLimit(searchParams.limit)
  }
}

function matchesTime(recipe: Recipe, time: TimeFilter): boolean {
  switch (time) {
    case "under-30":
      return recipe.minutes < 30
    case "30-60":
      return recipe.minutes >= 30 && recipe.minutes <= 60
    case "over-60":
      return recipe.minutes > 60
    default:
      return true
  }
}

function matchesQuery(recipe: Recipe, query: string): boolean {
  if (query === "") {
    return true
  }

  const needle = query.toLowerCase()
  const categoryLabel =
    recipeCategories.find((category) => category.id === recipe.category)?.label ?? ""

  return (
    recipe.title.toLowerCase().includes(needle) ||
    categoryLabel.toLowerCase().includes(needle)
  )
}

function compareRecipes(a: Recipe, b: Recipe, sort: SortOrder): number {
  switch (sort) {
    case "quickest":
      return a.minutes - b.minutes
    case "fewest-calories":
      return a.calories - b.calories
    default:
      return b.addedAt.localeCompare(a.addedAt)
  }
}

export function selectRecipes(filters: RecipeFilters): FilteredRecipes {
  const matched = recipes
    .filter(
      (recipe) =>
        (filters.category === "all" || recipe.category === filters.category) &&
        matchesTime(recipe, filters.time) &&
        matchesQuery(recipe, filters.query)
    )
    .sort((a, b) => compareRecipes(a, b, filters.sort))

  return {
    matched,
    visible: matched.slice(0, filters.limit),
    hasMore: matched.length > filters.limit
  }
}

export function getCategoryCounts(): CategoryCount[] {
  const counts = recipeCategories
    .map((category) => ({
      id: category.id as CategoryFilter,
      label: category.label,
      count: recipes.filter((recipe) => recipe.category === category.id).length
    }))
    .filter((category) => category.count > 0)

  return [{ id: "all", label: "All", count: recipes.length }, ...counts]
}

export function buildRecipesHref(
  filters: RecipeFilters,
  patch: Partial<RecipeFilters>
): string {
  const next = { ...filters, ...patch }
  const params = new URLSearchParams()

  if (next.category !== "all") {
    params.set("category", next.category)
  }

  if (next.time !== "all") {
    params.set("time", next.time)
  }

  if (next.sort !== "newest") {
    params.set("sort", next.sort)
  }

  if (next.view !== "grid") {
    params.set("view", next.view)
  }

  if (next.query !== "") {
    params.set("q", next.query)
  }

  const keepsPage = patch.limit !== undefined || Object.keys(patch).length === 0

  if (keepsPage && next.limit > PAGE_SIZE) {
    params.set("limit", String(next.limit))
  }

  const search = params.toString()

  return search === "" ? "/recipes" : `/recipes?${search}`
}
