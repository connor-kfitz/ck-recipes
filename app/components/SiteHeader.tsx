import Link from "next/link"

import { siteName } from "../data"
import { NavList } from "./NavList"
import { SearchField } from "./SearchField"

type WordmarkProps = {
  className?: string
}

function Wordmark({ className }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={`font-logo font-extrabold lowercase text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep ${className ?? ""}`}
    >
      {siteName}
      <span className="text-gold-deep">.</span>
    </Link>
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
            <SearchField ariaLabel="Search recipes" className="w-[220px]"/>
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
