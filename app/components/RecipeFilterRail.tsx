import { FILTER_LABEL_CLASS } from "../lib/classes"
import { buildRecipesHref, timeFilters } from "../lib/recipe-filters"
import type { CategoryCount, RecipeFilters } from "../lib/types"
import { ChipLink, RailLink } from "./FilterLinks"
import { SlidersHorizontal } from "lucide-react"

type RecipeFilterRailProps = {
  filters: RecipeFilters
  categories: CategoryCount[]
}

export function RecipeFilterRail({ filters, categories }: RecipeFilterRailProps) {
  const timeHref = (id: RecipeFilters["time"]) =>
    buildRecipesHref(filters, { time: filters.time === id ? "all" : id })

  return (
    <>
      <div className="hidden pr-6 md:block">
        <h2 className={FILTER_LABEL_CLASS}>Category</h2>
        <div className="mt-3 flex flex-col">
          {categories.map((category) => (
            <RailLink
              key={category.id}
              href={buildRecipesHref(filters, { category: category.id })}
              label={category.label}
              count={category.count}
              active={filters.category === category.id}
            />
          ))}
        </div>

        <h2 className={`${FILTER_LABEL_CLASS} mt-8`}>Time</h2>
        <div className="mt-3 flex flex-col">
          {timeFilters.map((filter) => (
            <RailLink
              key={filter.id}
              href={timeHref(filter.id)}
              label={filter.label}
              active={filters.time === filter.id}
            />
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <div className="-mx-6 flex items-center gap-2 overflow-x-auto px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <ChipLink
              key={category.id}
              href={buildRecipesHref(filters, { category: category.id })}
              label={category.label}
              count={category.count}
              active={filters.category === category.id}
            />
          ))}
        </div>

        <details className="group mt-3 rounded-xl border border-rule bg-wash">
          <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-2.5 font-body text-[13px] font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep">
            <SlidersHorizontal
              className="size-4 text-gold-deep"
              strokeWidth={2.25}
              aria-hidden="true"
            />
            Filters
            {filters.time === "all" ? null : (
              <span className="ml-auto font-body text-[13px] text-muted">
                {timeFilters.find((filter) => filter.id === filters.time)?.label}
              </span>
            )}
          </summary>
          <div className="border-t border-rule px-4 py-3">
            <h2 className={FILTER_LABEL_CLASS}>Time</h2>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {timeFilters.map((filter) => (
                <ChipLink
                  key={filter.id}
                  href={timeHref(filter.id)}
                  label={filter.label}
                  active={filters.time === filter.id}
                />
              ))}
            </div>
          </div>
        </details>
      </div>
    </>
  )
}
