import Link from "next/link"

type FilterLinkProps = {
  href: string
  label: string
  count?: number
  active: boolean
}

const RAIL_LINK_CLASS =
  "flex items-baseline justify-between gap-3 py-1 font-body text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"

export function RailLink({ href, label, count, active }: FilterLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={`${RAIL_LINK_CLASS} ${active ? "text-ink" : "text-muted hover:text-ink"}`}
    >
      <span
        className={`border-b-2 pb-0.5 transition-colors duration-200 ${
          active ? "border-gold" : "border-transparent"
        }`}
      >
        {label}
      </span>
      {count === undefined ? null : (
        <span className="shrink-0 tabular-nums text-muted">{count}</span>
      )}
    </Link>
  )
}

export function ChipLink({ href, label, count, active }: FilterLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={`shrink-0 rounded-full border px-3.5 py-1.5 font-body text-[13px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep ${
        active
          ? "border-gold bg-wash text-ink"
          : "border-rule text-muted hover:text-ink"
      }`}
    >
      {label}
      {count === undefined ? null : (
        <span className="ml-1.5 tabular-nums text-muted">{count}</span>
      )}
    </Link>
  )
}
