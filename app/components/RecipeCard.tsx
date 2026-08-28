import Image from "next/image";
import { Clock, Flame } from "lucide-react";

import { MetaChip } from "./MetaChip";

import type { Recipe } from "../data";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="flex h-full flex-col">
      <a
        href="#"
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-wash">
          <Image
            src={recipe.image}
            alt={recipe.imageAlt}
            fill
            sizes="(max-width: 767px) 50vw, 340px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
        <h3 className="mt-3 font-display text-[17px] font-bold leading-snug tracking-[-0.02em] text-ink decoration-gold-deep decoration-2 underline-offset-4 group-hover:underline">
          {recipe.title}
        </h3>
      </a>
      {/* mt-auto keeps the meta row on one baseline when a sibling title wraps to two lines. */}
      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
        <MetaChip icon={Clock} label={recipe.time} size="sm" />
        <MetaChip icon={Flame} label={recipe.calories} size="sm" />
      </div>
    </article>
  );
}
