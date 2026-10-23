import { Search } from "lucide-react"

type SearchFieldProps = {
  name?: string
  placeholder?: string
  ariaLabel: string
  defaultValue?: string
  className?: string
}

export function SearchField({
  name = "q",
  placeholder = "Search",
  ariaLabel,
  defaultValue,
  className
}: SearchFieldProps) {
  return (
    <label
      className={`group flex h-10 items-center gap-2 rounded-full border border-rule bg-wash px-4 transition-colors duration-200 focus-within:border-gold focus-within:bg-paper ${className ?? ""}`}
    >
      <Search
        className="size-4 shrink-0 text-muted transition-colors duration-200 group-focus-within:text-gold-deep"
        strokeWidth={2.25}
        aria-hidden="true"
      />
      <input
        type="search"
        name={name}
        placeholder={placeholder}
        aria-label={ariaLabel}
        defaultValue={defaultValue}
        className="w-full bg-transparent font-body text-sm text-ink placeholder:text-muted focus:outline-none"
      />
    </label>
  )
}
