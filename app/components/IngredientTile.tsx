import Image from "next/image"
import Link from "next/link"

import type { Ingredient } from "../lib/types"

type IngredientTileProps = {
  ingredient: Ingredient
  sizes?: string
  frame?: "wash" | "paper"
}

export function IngredientTile({
  ingredient,
  sizes = "(max-width: 639px) 50vw, 200px",
  frame = "wash"
}: IngredientTileProps) {
  return (
    <Link
      href={`/ingredients/${ingredient.id}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-lg ${
          frame === "paper" ? "bg-paper" : "bg-wash"
        }`}
      >
        <Image
          src={ingredient.image}
          alt={ingredient.imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <p className="mt-2 font-body text-sm text-ink">{ingredient.name}</p>
      {ingredient.brand === undefined ? null : (
        <p className="font-body text-[13px] text-muted">{ingredient.brand}</p>
      )}
    </Link>
  )
}
