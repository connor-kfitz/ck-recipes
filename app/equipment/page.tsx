import Image from "next/image"
import Link from "next/link"

import { ChipLink, RailLink } from "../components/FilterLinks"
import { ProductTile } from "../components/ProductTile"
import { SearchField } from "../components/SearchField"
import { FILTER_LABEL_CLASS } from "../lib/classes"
import {
  buildEquipmentHref,
  getEquipmentCategoryCounts,
  groupEquipmentByCategory,
  parseEquipmentFilters,
  selectEquipment
} from "../lib/equipment"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Equipment",
  description: "The pots, pans, knives and appliances I actually cook with."
}

export default async function EquipmentPage(props: PageProps<"/equipment">) {
  const searchParams = await props.searchParams
  const filters = parseEquipmentFilters(searchParams)
  const categories = getEquipmentCategoryCounts()
  const groups = groupEquipmentByCategory(selectEquipment(filters))
  const total = groups.reduce((count, group) => count + group.items.length, 0)

  return (
    <main className="mx-auto w-full max-w-[1440px] px-6 pt-8 pb-24">
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-[220px_1fr] md:grid-rows-[auto_1fr] md:gap-x-8 md:gap-y-7">
        <div className="md:col-start-2 md:row-start-1">
          <h1 className="font-display text-[30px] font-extrabold text-ink">
            Equipment
          </h1>
          <p className="mt-1.5 max-w-[60ch] font-body text-sm text-muted">
            The kitchen gear I actually cook with — every piece is linked from the recipes that
            need it.
          </p>

          <form action="/equipment" method="get" className="mt-5 max-w-[420px]">
            {filters.category === "all" ? null : (
              <input type="hidden" name="category" value={filters.category}/>
            )}
            <SearchField
              ariaLabel="Search equipment or brands"
              placeholder="Search equipment or brands"
              defaultValue={filters.query}
              className="w-full"
            />
          </form>
        </div>

        <div className="md:col-start-1 md:row-span-2 md:row-start-1 md:border-r md:border-rule">
          <div className="hidden pr-6 md:block">
            <h2 className={FILTER_LABEL_CLASS}>Categories</h2>
            <div className="mt-3 flex flex-col">
              {categories.map((category) => (
                <RailLink
                  key={category.id}
                  href={buildEquipmentHref(filters, { category: category.id })}
                  label={category.label}
                  count={category.count}
                  active={filters.category === category.id}
                />
              ))}
            </div>
          </div>

          <div className="-mx-6 flex items-center gap-2 overflow-x-auto px-6 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <ChipLink
                key={category.id}
                href={buildEquipmentHref(filters, { category: category.id })}
                label={category.label}
                count={category.count}
                active={filters.category === category.id}
              />
            ))}
          </div>
        </div>

        <div className="md:col-start-2 md:row-start-2">
          <p aria-live="polite" className="sr-only">
            {total} {total === 1 ? "item" : "items"}
          </p>

          {groups.length === 0 ? (
            <div className="rounded-xl border border-rule bg-wash p-8 text-center">
              <p className="font-display text-[17px] font-bold text-ink">
                Nothing matches that yet.
              </p>
              <p className="mx-auto mt-2 max-w-[42ch] font-body text-sm text-muted">
                Try a shorter search, or clear the filters to see everything in the
                kitchen.
              </p>
              <Link
                href="/equipment"
                className="mt-5 inline-flex h-10 items-center rounded-full border border-rule bg-paper px-5 font-body text-sm font-semibold text-gold-deep transition-colors duration-200 hover:border-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
              >
                Clear filters
              </Link>
            </div>
          ) : (
            groups.map((group, index) => (
              <section
                key={group.id}
                aria-labelledby={`group-${group.id}`}
                className={index === 0 ? undefined : "mt-10"}
              >
                <h2
                  id={`group-${group.id}`}
                  className={`${FILTER_LABEL_CLASS} border-b border-rule pb-2`}
                >
                  {group.label} <span className="tabular-nums">· {group.items.length}</span>
                </h2>

                <ul className="mt-4 hidden grid-cols-3 gap-5 sm:grid lg:grid-cols-5">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <ProductTile
                        product={item}
                        href={`/equipment/${item.id}`}
                        sizes="(max-width: 1023px) 33vw, 200px"
                      />
                    </li>
                  ))}
                </ul>

                <ul className="mt-3 flex flex-col divide-y divide-rule sm:hidden">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/equipment/${item.id}`}
                        className="group flex items-center gap-3 py-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep"
                      >
                        <div className="relative size-[52px] shrink-0 overflow-hidden rounded-lg bg-wash">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            sizes="52px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-body text-sm text-ink">{item.name}</p>
                          {item.brand === undefined ? null : (
                            <p className="font-body text-[13px] text-muted">{item.brand}</p>
                          )}
                        </div>
                        <ChevronRight
                          className="size-5 shrink-0 text-gold-deep"
                          strokeWidth={2.25}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
