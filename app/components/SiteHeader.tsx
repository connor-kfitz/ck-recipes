import { navLinks, siteName } from "../data"
import { Search } from "lucide-react"

interface WordmarkProps {
  className?: string
}

function Wordmark({ className }: WordmarkProps) {
  return (
    <a
      href="#"
      className={`font-display font-extrabold lowercase tracking-[-0.035em] text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep ${className ?? ""}`}
    >
      {siteName}
      <span className="text-gold-deep">.</span>
    </a>
  )
}

function SearchField() {
  return (
    <label className="group flex h-10 w-[220px] items-center gap-2 rounded-full border border-rule bg-wash px-4 transition-colors duration-200 focus-within:border-gold focus-within:bg-paper">
      <Search
        className="size-4 shrink-0 text-muted transition-colors duration-200 group-focus-within:text-gold-deep"
        strokeWidth={2.25}
        aria-hidden="true"
      />
      <input
        type="search"
        placeholder="Search"
        aria-label="Search recipes"
        className="w-full bg-transparent font-body text-sm text-ink placeholder:text-muted focus:outline-none"
      />
    </label>
  )
}

interface NavListProps {
  className?: string
}

function NavList({ className }: NavListProps) {
  return (
    <nav aria-label="Primary" className={className}>
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-current={link.active ? "page" : undefined}
          className={`shrink-0 border-b-2 pb-1 font-body text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep ${
            link.active
              ? "border-gold text-ink"
              : "border-transparent text-muted hover:border-rule hover:text-ink"
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export function SiteHeader() {
  return (
    <header className="z-40 border-b border-rule bg-paper md:sticky md:top-0">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="hidden h-20 grid-cols-[1fr_auto_1fr] items-center gap-8 md:grid">
          <Wordmark className="justify-self-start text-xl"/>
          <NavList className="flex items-center gap-9 justify-self-center"/>
          <div className="justify-self-end">
            <SearchField/>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex h-16 items-center">
            <Wordmark className="text-lg"/>
          </div>
          <NavList className="-mx-6 flex items-center gap-7 overflow-x-auto px-6 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"/>
        </div>
      </div>
    </header>
  )
}
