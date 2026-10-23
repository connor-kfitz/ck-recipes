import Link from "next/link"

import { tipFilters } from "../lib/recipe-detail"
import type { RecipeTip, TipFilter } from "../lib/types"

type RecipeTipsProps = {
  tips: RecipeTip[]
  filter: TipFilter
  filterHref: (filter: TipFilter) => string
}

const TYPE_LABELS: Record<RecipeTip["type"], string> = {
  tip: "Tip",
  note: "Note",
  learning: "Learning"
}

export function RecipeTips({ tips, filter, filterHref }: RecipeTipsProps) {
  const visible = filter === "all" ? tips : tips.filter((tip) => tip.type === filter)

  return (
    <section aria-labelledby="tips-heading">
      <div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h2
              id="tips-heading"
              className="font-display text-[28px] font-extrabold tracking-[-0.035em] text-ink"
            >
              Tips, notes &amp; learnings
            </h2>
            <p className="mt-1 font-body text-sm text-muted">
              Everything I&rsquo;ve figured out since — newest first
            </p>
          </div>

          <div className="-mx-6 flex shrink-0 items-center gap-2 overflow-x-auto px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tipFilters.map((option) => {
              const active = option.id === filter

              return (
                <Link
                  key={option.id}
                  href={filterHref(option.id)}
                  aria-current={active ? "true" : undefined}
                  className={`shrink-0 rounded-full border px-3.5 py-1.5 font-body text-[13px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep ${
                    active
                      ? "border-gold bg-paper text-ink"
                      : "border-rule text-muted hover:text-ink"
                  }`}
                >
                  {option.label}
                </Link>
              )
            })}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="mt-8 font-body text-sm text-muted">
            Nothing filed under that yet.
          </p>
        ) : (
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((tip) => (
              <li
                key={tip.id}
                className="rounded-xl border border-rule bg-paper p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-rule px-2.5 py-0.5 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {TYPE_LABELS[tip.type]}
                  </span>
                  <span className="font-body text-[13px] tabular-nums text-muted">
                    {tip.date}
                  </span>
                </div>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink">{tip.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
