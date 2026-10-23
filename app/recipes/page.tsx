import Link from "next/link"

import { RecipeCard } from "../components/RecipeCard"
import { RecipeFilterRail } from "../components/RecipeFilterRail"
import { RecipeListRow } from "../components/RecipeListRow"
import { RecipeToolbar } from "../components/RecipeToolbar"
import {
  PAGE_SIZE,
  buildRecipesHref,
  getCategoryCounts,
  parseRecipeFilters,
  selectRecipes
} from "../lib/recipe-filters"
import { recipeHref } from "../lib/recipe-detail"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recipes",
  description: "Every recipe in the collection, filtered by category and time."
}

export default async function RecipesPage(props: PageProps<"/recipes">) {
  const filters = parseRecipeFilters(await props.searchParams)
  const categories = getCategoryCounts()
  const { matched, visible, hasMore } = selectRecipes(filters)

  return (
    <main className="mx-auto w-full max-w-[1440px] px-6 pb-24 pt-8">
      <h1 className="sr-only">Recipes</h1>

      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-[220px_1fr] md:grid-rows-[auto_1fr] md:gap-x-8 md:gap-y-7">
        <div className="md:col-start-2 md:row-start-1">
          <RecipeToolbar filters={filters}/>
        </div>

        <div className="md:col-start-1 md:row-span-2 md:row-start-1 md:border-r md:border-rule">
          <RecipeFilterRail filters={filters} categories={categories}/>
        </div>

        <div className="md:col-start-2 md:row-start-2">
          <p
            aria-live="polite"
            className="font-body text-[13px] tabular-nums text-muted"
          >
            {matched.length} {matched.length === 1 ? "recipe" : "recipes"}
            {filters.query === "" ? null : <> for &ldquo;{filters.query}&rdquo;</>}
          </p>

          {matched.length === 0 ? (
            <div className="mt-6 rounded-xl border border-rule bg-wash p-8 text-center">
              <p className="font-display text-[17px] font-bold tracking-[-0.02em] text-ink">
                Nothing matches that yet.
              </p>
              <p className="mx-auto mt-2 max-w-[42ch] font-body text-sm text-muted">
                Try a shorter search, a different category, or clear the filters to
                see the whole collection.
              </p>
              <Link
                href="/recipes"
                className="mt-5 inline-flex h-10 items-center rounded-full border border-rule bg-paper px-5 font-body text-sm font-semibold text-gold-deep transition-colors duration-200 hover:border-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
              >
                Clear filters
              </Link>
            </div>
          ) : filters.view === "list" ? (
            <div className="mt-5 flex flex-col gap-3">
              {visible.map((recipe) => (
                <RecipeListRow key={recipe.id} recipe={recipe} href={recipeHref(recipe)}/>
              ))}
            </div>
          ) : (
            <>
              <div className="mt-5 hidden grid-cols-2 gap-x-6 gap-y-9 sm:grid lg:grid-cols-3">
                {visible.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    href={recipeHref(recipe)}
                    sizes="(max-width: 1023px) 50vw, 340px"
                    caloriesPerServing
                  />
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:hidden">
                {visible.map((recipe) => (
                  <RecipeListRow key={recipe.id} recipe={recipe} href={recipeHref(recipe)}/>
                ))}
              </div>
            </>
          )}

          {hasMore ? (
            <div className="mt-8 flex justify-center">
              <Link
                href={buildRecipesHref(filters, { limit: filters.limit + PAGE_SIZE })}
                className="inline-flex h-10 items-center rounded-full border border-rule bg-wash px-6 font-body text-sm font-medium text-ink transition-colors duration-200 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
              >
                Load more
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  )
}
