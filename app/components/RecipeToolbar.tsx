import Link from "next/link"

import { buildRecipesHref, sortOptions } from "../lib/recipe-filters"
import type { RecipeFilters } from "../lib/types"
import { SearchField } from "./SearchField"
import { Check, ChevronDown, LayoutGrid, Rows3 } from "lucide-react"
import type { ReactNode } from "react"

type RecipeToolbarProps = {
  filters: RecipeFilters
}

export function RecipeToolbar({ filters }: RecipeToolbarProps) {
  const activeSort =
    sortOptions.find((option) => option.id === filters.sort) ?? sortOptions[0]

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <form action="/recipes" method="get" className="flex-1">
        {filters.category === "all" ? null : (
          <input type="hidden" name="category" value={filters.category}/>
        )}
        {filters.time === "all" ? null : (
          <input type="hidden" name="time" value={filters.time}/>
        )}
        {filters.sort === "newest" ? null : (
          <input type="hidden" name="sort" value={filters.sort}/>
        )}
        {filters.view === "grid" ? null : (
          <input type="hidden" name="view" value={filters.view}/>
        )}
        <SearchField
          ariaLabel="Search recipes"
          placeholder="Search recipes"
          defaultValue={filters.query}
          className="w-full"
        />
      </form>

      <div className="flex items-center gap-3">
        <details className="group relative">
          <summary className="flex h-10 cursor-pointer list-none items-center gap-1.5 rounded-full border border-rule bg-wash px-4 font-body text-[13px] text-ink transition-colors duration-200 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep">
            <span className="text-muted">Sort:</span>
            {activeSort.label}
            <ChevronDown
              className="size-4 text-muted transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
              strokeWidth={2.25}
              aria-hidden="true"
            />
          </summary>
          <div className="absolute right-0 z-30 mt-2 w-52 rounded-xl border border-rule bg-paper p-1.5">
            {sortOptions.map((option) => {
              const active = option.id === filters.sort

              return (
                <Link
                  key={option.id}
                  href={buildRecipesHref(filters, { sort: option.id })}
                  aria-current={active ? "true" : undefined}
                  className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 font-body text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep ${
                    active ? "bg-wash text-ink" : "text-muted hover:bg-wash hover:text-ink"
                  }`}
                >
                  {option.label}
                  {active ? (
                    <Check
                      className="size-4 shrink-0 text-gold-deep"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              )
            })}
          </div>
        </details>

        <div className="flex items-center gap-1 rounded-full border border-rule bg-wash p-1">
          <ViewToggleLink
            href={buildRecipesHref(filters, { view: "grid" })}
            label="Grid view"
            active={filters.view === "grid"}
          >
            <LayoutGrid className="size-4" strokeWidth={2.25} aria-hidden="true"/>
          </ViewToggleLink>
          <ViewToggleLink
            href={buildRecipesHref(filters, { view: "list" })}
            label="List view"
            active={filters.view === "list"}
          >
            <Rows3 className="size-4" strokeWidth={2.25} aria-hidden="true"/>
          </ViewToggleLink>
        </div>
      </div>
    </div>
  )
}

type ViewToggleLinkProps = {
  href: string
  label: string
  active: boolean
  children: ReactNode
}

function ViewToggleLink({ href, label, active, children }: ViewToggleLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "true" : undefined}
      className={`flex size-8 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep ${
        active ? "bg-paper text-ink" : "text-muted hover:text-ink"
      }`}
    >
      {children}
    </Link>
  )
}
