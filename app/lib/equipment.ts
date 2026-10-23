import { equipment, equipmentCategories, recipes } from "../data"
import type {
  Equipment,
  EquipmentCategoryCount,
  EquipmentCategoryFilter,
  EquipmentCategoryId,
  EquipmentFilters,
  EquipmentGroup,
  Recipe,
  SearchParamsInput
} from "./types"
import { firstValue } from "./search-params"

export function getEquipment(id: string): Equipment | undefined {
  return equipment.find((item) => item.id === id)
}

export function parseEquipmentFilters(searchParams: SearchParamsInput): EquipmentFilters {
  const candidate = firstValue(searchParams.category)
  const match = equipmentCategories.find((category) => category.id === candidate)

  return {
    category: match ? match.id : "all",
    query: (firstValue(searchParams.q) ?? "").trim()
  }
}

export function buildEquipmentHref(
  filters: EquipmentFilters,
  patch: Partial<EquipmentFilters>
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

  return search === "" ? "/equipment" : `/equipment?${search}`
}

function matchesQuery(item: Equipment, query: string): boolean {
  if (query === "") {
    return true
  }

  const needle = query.toLowerCase()

  return (
    item.name.toLowerCase().includes(needle) ||
    (item.brand ?? "").toLowerCase().includes(needle)
  )
}

export function selectEquipment(filters: EquipmentFilters): Equipment[] {
  return equipment.filter(
    (item) =>
      (filters.category === "all" || item.category === filters.category) &&
      matchesQuery(item, filters.query)
  )
}

export function groupEquipmentByCategory(list: Equipment[]): EquipmentGroup[] {
  return equipmentCategories
    .map((category) => ({
      id: category.id,
      label: category.label,
      items: list.filter((item) => item.category === category.id)
    }))
    .filter((group) => group.items.length > 0)
}

export function getEquipmentCategoryCounts(): EquipmentCategoryCount[] {
  const counts = equipmentCategories
    .map((category) => ({
      id: category.id as EquipmentCategoryFilter,
      label: category.label,
      count: equipment.filter((item) => item.category === category.id).length
    }))
    .filter((category) => category.count > 0)

  return [{ id: "all", label: "All", count: equipment.length }, ...counts]
}

export function getEquipmentCategoryLabel(id: EquipmentCategoryId): string {
  return equipmentCategories.find((category) => category.id === id)?.label ?? ""
}

export function getRecipesUsingEquipment(id: string): Recipe[] {
  return recipes.filter((recipe) => recipe.detail?.equipmentIds?.includes(id))
}

export function getEquipmentAlsoIn(item: Equipment): Equipment[] {
  return equipment.filter((other) => other.category === item.category && other.id !== item.id)
}
