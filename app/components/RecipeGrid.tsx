import Link from "next/link"

import { recentHeading, recentLinkLabel, recentRecipes, recipes } from "../data"
import { recipeHref } from "../lib/recipe-detail"
import { RecipeCard } from "./RecipeCard"
import { ArrowRight } from "lucide-react"

export function RecipeGrid() {
  return (
    <section aria-labelledby="recent-title" className="mt-16">
      <div className="flex items-baseline justify-between gap-6 border-b border-rule pb-3">
        <h2
          id="recent-title"
          className="font-display text-[28px] font-extrabold text-ink"
        >
          {recentHeading}
        </h2>
        <Link
          href="/recipes"
          className="group inline-flex items-center gap-1.5 font-body text-sm font-medium text-muted transition-colors duration-200 hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
        >
          {recentLinkLabel} {recipes.length}
          <ArrowRight
            className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {recentRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} href={recipeHref(recipe)}/>
        ))}
      </div>
    </section>
  )
}
