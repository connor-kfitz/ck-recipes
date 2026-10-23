export type SearchParamsInput = Record<string, string | string[] | undefined>

export type NavLink = {
  label: string
  href: string
}

export type PinnedRecipe = {
  eyebrow: string
  title: string
  time: string
  calories: string
  image: string
  imageAlt: string
}

export type MetaStripItem = {
  label: string
  value: string
}

export type RecipeCategoryId =
  | "weeknight"
  | "baking"
  | "soup-stew"
  | "sides"
  | "sweets"

export type RecipeCategory = {
  id: RecipeCategoryId
  label: string
}

export type IngredientCategoryId =
  | "pantry"
  | "spices"
  | "sauces"
  | "produce"
  | "dairy"
  | "tools"

export type IngredientCategory = {
  id: IngredientCategoryId
  label: string
}

export type IngredientDetail = {
  blurb: string
  purchaseUrl?: string
  purchaseNote?: string
  calories?: { amount: number; per: string }
}

export type Ingredient = {
  id: string
  name: string
  brand?: string
  category: IngredientCategoryId
  image: string
  imageAlt: string
  detail?: IngredientDetail
}

export type IngredientLibrary = {
  heading: string
  subhead: string
  linkLabel: string
  href: string
  items: Ingredient[]
}

export type Segment = {
  kind: "text" | "strong" | "ingredient"
  text: string
  ingredientId?: string
}

export type RecipeIngredient = {
  amount: string
  name: string
  ingredientId?: string
  calories?: number
}

export type DirectionStep = {
  label?: string
  body: Segment[]
  bullets?: string[]
}

export type RecipeTipType = "tip" | "note" | "learning"

export type RecipeTip = {
  id: string
  type: RecipeTipType
  date: string
  body: string
}

export type Nutrition = {
  calories: number
  carbs: number
  fat: number
  protein: number
}

export type RecipeDetail = {
  serves: number
  prepMinutes: number
  cookMinutes: number
  nutrition?: Nutrition
  ingredients: RecipeIngredient[]
  directions: DirectionStep[]
  tips: RecipeTip[]
}

export type Recipe = {
  id: string
  title: string
  category: RecipeCategoryId
  minutes: number
  calories: number
  addedAt: string
  image: string
  imageAlt: string
  detail?: RecipeDetail
}

export type WrittenRecipe = Recipe & {
  detail: RecipeDetail
}

export type TipFilter = "all" | RecipeTipType

export type TipFilterOption = {
  id: TipFilter
  label: string
}

export type CategoryFilter = RecipeCategoryId | "all"
export type TimeFilter = "all" | "under-30" | "30-60" | "over-60"
export type SortOrder = "newest" | "quickest" | "fewest-calories"
export type ViewMode = "grid" | "list"

export type RecipeFilters = {
  category: CategoryFilter
  time: TimeFilter
  sort: SortOrder
  view: ViewMode
  query: string
  limit: number
}

export type TimeFilterOption = {
  id: TimeFilter
  label: string
}

export type SortOption = {
  id: SortOrder
  label: string
}

export type FilteredRecipes = {
  matched: Recipe[]
  visible: Recipe[]
  hasMore: boolean
}

export type CategoryCount = {
  id: CategoryFilter
  label: string
  count: number
}

export type IngredientCategoryFilter = IngredientCategoryId | "all"

export type IngredientFilters = {
  category: IngredientCategoryFilter
  query: string
}

export type IngredientGroup = {
  id: IngredientCategoryId
  label: string
  items: Ingredient[]
}

export type IngredientCategoryCount = {
  id: IngredientCategoryFilter
  label: string
  count: number
}
