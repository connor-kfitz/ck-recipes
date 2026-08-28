import { navLinks, siteName } from "../data"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-rule bg-wash">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-6 py-9 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#"
          className="font-display text-lg font-extrabold lowercase tracking-[-0.035em] text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
        >
          {siteName}
          <span className="text-gold-deep">.</span>
        </a>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[13px] font-medium uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
