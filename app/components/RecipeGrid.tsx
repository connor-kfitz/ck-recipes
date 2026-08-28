import { ArrowRight } from "lucide-react";

import { RecipeCard } from "./RecipeCard";
import { recentHeading, recentLinkLabel, recentRecipes } from "../data";

export function RecipeGrid() {
  return (
    <section aria-labelledby="recent-title" className="mt-11">
      <div className="flex items-baseline justify-between gap-6 border-b border-rule pb-3">
        <h2
          id="recent-title"
          className="font-display text-[28px] font-extrabold tracking-[-0.035em] text-ink"
        >
          {recentHeading}
        </h2>
        <a
          href="#"
          className="group inline-flex items-center gap-1.5 font-body text-sm font-medium text-muted transition-colors duration-200 hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
        >
          {recentLinkLabel}
          <ArrowRight
            className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </a>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        {recentRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
