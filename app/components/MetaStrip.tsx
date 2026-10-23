import type { MetaStripItem } from "../lib/types"

type MetaStripProps = {
  items: MetaStripItem[]
  className?: string
}

export function MetaStrip({ items, className }: MetaStripProps) {
  return (
    <dl
      className={`flex divide-x divide-rule overflow-hidden rounded-xl border border-rule ${className ?? ""}`}
    >
      {items.map((item) => (
        <div key={item.label} className="flex-1 px-3 py-3 text-center">
          <dt className="font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
            {item.label}
          </dt>
          <dd className="mt-1.5 font-display text-lg font-bold tracking-[-0.02em] tabular-nums text-ink">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
