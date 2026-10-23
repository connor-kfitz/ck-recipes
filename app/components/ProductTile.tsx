import Image from "next/image"
import Link from "next/link"

import type { Product } from "../lib/types"

type ProductTileProps = {
  product: Product
  href: string
  sizes?: string
  frame?: "wash" | "paper"
}

export function ProductTile({
  product,
  href,
  sizes = "(max-width: 639px) 50vw, 200px",
  frame = "wash"
}: ProductTileProps) {
  return (
    <Link
      href={href}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-lg ${
          frame === "paper" ? "bg-paper" : "bg-wash"
        }`}
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <p className="mt-2 font-body text-sm text-ink">{product.name}</p>
      {product.brand === undefined ? null : (
        <p className="font-body text-[13px] text-muted">{product.brand}</p>
      )}
    </Link>
  )
}
