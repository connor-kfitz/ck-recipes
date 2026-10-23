import Image from "next/image"
import Link from "next/link"

import { ProductTile } from "../../components/ProductTile"
import { MetaStrip } from "../../components/MetaStrip"
import { RecipeListRow } from "../../components/RecipeListRow"
import { ingredients } from "../../data"
import {
  getAlsoIn,
  getCategoryLabel,
  getIngredient,
  getRecipesUsingIngredient
} from "../../lib/ingredients"
import { recipeHref } from "../../lib/recipe-detail"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return ingredients.map((ingredient) => ({ slug: ingredient.id }))
}

export async function generateMetadata(
  props: PageProps<"/ingredients/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const ingredient = getIngredient(slug)

  if (ingredient === undefined) {
    return { title: "Ingredient not found" }
  }

  return {
    title: ingredient.brand === undefined
      ? ingredient.name
      : `${ingredient.name} — ${ingredient.brand}`,
    description:
      ingredient.detail?.blurb ??
      `${ingredient.name} in the ${getCategoryLabel(ingredient.category)} shelf.`
  }
}

export default async function IngredientPage(props: PageProps<"/ingredients/[slug]">) {
  const { slug } = await props.params
  const ingredient = getIngredient(slug)

  if (ingredient === undefined) {
    notFound()
  }

  const { detail } = ingredient
  const categoryLabel = getCategoryLabel(ingredient.category)
  const usedIn = getRecipesUsingIngredient(ingredient.id)
  const alsoIn = getAlsoIn(ingredient)

  return (
    <main>
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-8 pb-14">
        <Link
          href={`/ingredients?category=${ingredient.category}`}
          className="group inline-flex items-center gap-1.5 font-body text-sm font-medium text-muted transition-colors duration-200 hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
        >
          <ArrowLeft
            className="size-4 transition-transform duration-200 ease-out group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            strokeWidth={2.25}
            aria-hidden="true"
          />
          Ingredients · {categoryLabel}
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[420px_1fr] lg:items-start lg:gap-12">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-wash">
            <Image
              src={ingredient.image}
              alt={ingredient.imageAlt}
              fill
              preload
              sizes="(max-width: 1023px) 100vw, 420px"
              className="object-cover"
            />
          </div>

          <div>
            {ingredient.brand === undefined ? null : (
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                {ingredient.brand}
              </p>
            )}
            <h1 className="mt-2 font-display text-[40px] font-extrabold leading-[0.98] tracking-[-0.035em] text-balance text-ink">
              {ingredient.name}
            </h1>

            {detail === undefined ? (
              <p className="mt-4 max-w-[62ch] font-body text-[15px] leading-relaxed text-muted">
                I haven&rsquo;t written this one up yet.
              </p>
            ) : (
              <p className="mt-4 max-w-[62ch] font-body text-[15px] leading-relaxed text-muted">
                {detail.blurb}
              </p>
            )}

            {detail?.purchaseUrl === undefined && detail?.purchaseNote === undefined ? null : (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                {detail.purchaseUrl === undefined ? null : (
                  <a
                    href={detail.purchaseUrl}
                    target="_blank"
                    rel="nofollow noopener"
                    className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full bg-ink px-6 sm:w-auto font-body text-sm font-semibold text-paper transition-colors duration-200 hover:bg-gold-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
                  >
                    Where I buy it
                    <ArrowUpRight className="size-4" strokeWidth={2.25} aria-hidden="true"/>
                  </a>
                )}
                {detail.purchaseNote === undefined ? null : (
                  <p className="font-body text-[13px] tabular-nums text-muted">
                    {detail.purchaseNote}
                  </p>
                )}
              </div>
            )}

            <MetaStrip
              className="mt-6 max-w-[560px]"
              items={[
                { label: "Category", value: categoryLabel },
                ...(detail?.calories === undefined
                  ? []
                  : [
                      {
                        label: `Cal / ${detail.calories.per}`,
                        value: String(detail.calories.amount)
                      }
                    ]),
                {
                  label: "Used in",
                  value: `${usedIn.length} ${usedIn.length === 1 ? "recipe" : "recipes"}`
                }
              ]}
            />

            <section aria-labelledby="used-in-heading" className="mt-10">
              <h2
                id="used-in-heading"
                className="font-display text-[22px] font-extrabold tracking-[-0.03em] text-ink"
              >
                Used in
              </h2>
              {usedIn.length === 0 ? (
                <p className="mt-2 font-body text-sm text-muted">
                  No written-up recipe calls for this yet.
                </p>
              ) : (
                <>
                  <p className="mt-1 font-body text-[13px] text-muted">
                    Taken from the recipes that list it.
                  </p>
                  <ul className="mt-4 grid max-w-[720px] grid-cols-1 gap-3 sm:grid-cols-2">
                    {usedIn.map((recipe) => (
                      <li key={recipe.id}>
                        <RecipeListRow
                          recipe={recipe}
                          href={recipeHref(recipe)}
                          size="compact"
                        />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          </div>
        </div>
      </div>

      {alsoIn.length === 0 ? null : (
        <div className="border-t border-rule bg-wash">
          <div className="mx-auto w-full max-w-[1440px] px-6 py-10">
            <section aria-labelledby="also-in-heading">
              <h2
                id="also-in-heading"
                className="font-display text-[19px] font-extrabold tracking-[-0.03em] text-ink"
              >
                Also in {categoryLabel}
              </h2>
              {/* A horizontal scroller on small screens, a grid from sm up. */}
              <ul className="-mx-6 mt-4 flex snap-x gap-4 overflow-x-auto px-6 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-6">
                {alsoIn.map((other) => (
                  <li key={other.id} className="w-40 shrink-0 snap-start sm:w-auto">
                    <ProductTile
                      product={other}
                      href={`/ingredients/${other.id}`}
                      frame="paper"
                      sizes="(max-width: 639px) 160px, 200px"
                    />
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </main>
  )
}
