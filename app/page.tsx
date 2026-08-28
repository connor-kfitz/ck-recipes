import { IngredientLibraryCard } from "./components/IngredientLibraryCard";
import { PinnedRecipe } from "./components/PinnedRecipe";
import { RecipeGrid } from "./components/RecipeGrid";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1440px] px-6 pb-24 pt-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
          <PinnedRecipe />
          <IngredientLibraryCard />
        </div>
        <RecipeGrid />
      </main>
    </>
  );
}
