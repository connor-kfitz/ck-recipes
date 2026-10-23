import Image from "next/image"
import Link from "next/link"

import { RecipeActions } from "../../components/RecipeActions"
import { RecipeBrandPicks } from "../../components/RecipeBrandPicks"
import { RecipeDirections } from "../../components/RecipeDirections"
import { RecipeIngredientList } from "../../components/RecipeIngredientList"
import { RecipeMetaStrip } from "../../components/RecipeMetaStrip"
import { RecipeNutritionTable } from "../../components/RecipeNutritionTable"
import { RecipeTips } from "../../components/RecipeTips"
import { recipeCategories } from "../../data"
import { formatMinutes } from "../../lib/format"
import {
  getBrandPicks,
  getWrittenRecipe,
  isCookMode,
  parseTipFilter,
  totalMinutes,
  writtenRecipes
} from "../../lib/recipe-detail"
import type { TipFilter } from "../../lib/types"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return writtenRecipes.map((recipe) => ({ slug: recipe.id }))
}

export async function generateMetadata(
  props: PageProps<"/recipes/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const recipe = getWrittenRecipe(slug)

  if (recipe === undefined) {
    return { title: "Recipe not found" }
  }

  return {
    title: recipe.title,
    description: `${formatMinutes(totalMinutes(recipe.detail))}, ${recipe.calories} cal per serving — serves ${recipe.detail.serves}.`
  }
}

export default async function RecipePage(props: PageProps<"/recipes/[slug]">) {
  const { slug } = await props.params
  const searchParams = await props.searchParams
  const recipe = getWrittenRecipe(slug)

  if (recipe === undefined) {
    notFound()
  }

  const { detail } = recipe
  const cookMode = isCookMode(searchParams.cook)
  const tipFilter = parseTipFilter(searchParams.tips)
  const brandPicks = getBrandPicks(detail)
  const categoryLabel =
    recipeCategories.find((category) => category.id === recipe.category)?.label ?? ""

  const tipsHref = (filter: TipFilter) =>
    filter === "all"
      ? `/recipes/${recipe.id}#tips-heading`
      : `/recipes/${recipe.id}?tips=${filter}#tips-heading`

  return (
    <main>
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-8 pb-14">
        <Link
          href="/recipes"
          className="group inline-flex items-center gap-1.5 font-body text-sm font-medium text-muted transition-colors duration-200 hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep print:hidden"
        >
          <ArrowLeft
            className="size-4 transition-transform duration-200 ease-out group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            strokeWidth={2.25}
            aria-hidden="true"
          />
          All recipes
        </Link>

        <div
          className={
            cookMode
              ? "mt-6 flex flex-col gap-6"
              : "mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-10"
          }
        >
          <div className={cookMode ? undefined : "lg:col-start-2 lg:row-start-1"}>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
              {categoryLabel}
            </p>
            <h1 className="mt-2 font-display text-[40px] font-extrabold leading-[0.98] tracking-[-0.035em] text-balance text-ink sm:text-[48px]">
              {recipe.title}
            </h1>
          </div>

          {cookMode ? null : (
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-wash lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:min-h-[340px]">
              <Image
                src={recipe.image}
                alt={recipe.imageAlt}
                fill
                preload
                sizes="(max-width: 1023px) 100vw, 700px"
                className="object-cover"
              />
            </div>
          )}

          <div
            className={`flex flex-col gap-4 ${
              cookMode ? "lg:max-w-[620px]" : "lg:col-start-2 lg:row-start-2"
            }`}
          >
            <RecipeMetaStrip detail={detail}/>

            {detail.nutrition === undefined || cookMode ? null : (
              <RecipeNutritionTable
                nutrition={detail.nutrition}
                serves={detail.serves}
                recipeTitle={recipe.title}
              />
            )}

            <div className="print:hidden">
              {cookMode ? (
                <Link
                  href={`/recipes/${recipe.id}`}
                  className="inline-flex h-10 items-center rounded-full border border-gold bg-wash px-5 font-body text-sm font-medium text-ink transition-colors duration-200 hover:border-gold-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
                >
                  Leave cook mode
                </Link>
              ) : (
                <RecipeActions
                  title={recipe.title}
                  cookModeHref={`/recipes/${recipe.id}?cook=1`}
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[360px_1fr] lg:gap-12">
          <div className="lg:sticky lg:top-[104px]">
            <RecipeIngredientList detail={detail} cookMode={cookMode}/>
          </div>
          <RecipeDirections detail={detail} cookMode={cookMode}/>
        </div>
      </div>

      {cookMode ? null : (
        <div className="border-t border-rule bg-wash print:hidden">
          <div className="mx-auto w-full max-w-[1440px] px-6 py-12">
            <RecipeTips tips={detail.tips} filter={tipFilter} filterHref={tipsHref}/>
            <RecipeBrandPicks picks={brandPicks}/>
          </div>
        </div>
      )}
    </main>
  )
}
