import Image from "next/image";
import { Clock, Flame } from "lucide-react";

import { MetaChip } from "./MetaChip";

import type { Recipe } from "../data";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article>
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
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <h3 className="mt-3 font-display text-[17px] font-bold leading-snug tracking-[-0.02em] text-ink decoration-gold decoration-2 underline-offset-4 group-hover:underline">
          {recipe.title}
        </h3>
      </a>
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <MetaChip icon={Clock} label={recipe.time} size="sm" />
        <MetaChip icon={Flame} label={recipe.calories} size="sm" />
      </div>
    </article>
  );
}
