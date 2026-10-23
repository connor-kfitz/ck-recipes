"use client"

import Link from "next/link"

import { navLinks } from "../data"
import { isActive } from "../lib/navigation"
import { usePathname } from "next/navigation"

type NavListProps = {
  className?: string
}

export function NavList({ className }: NavListProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={className}>
      {navLinks.map((link) => {
        const active = isActive(pathname, link.href)

        return (
          <Link
            key={link.label}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`shrink-0 border-b-2 pb-1 font-body text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep ${
              active
                ? "border-gold text-ink"
                : "border-transparent text-muted hover:border-rule hover:text-ink"
            }`}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
