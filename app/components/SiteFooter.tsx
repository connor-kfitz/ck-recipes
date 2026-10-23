import { siteName } from "../data"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-rule bg-wash">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-8">
        <p className="font-body text-[13px] font-medium text-muted">
          &copy; {new Date().getFullYear()} {siteName}
          <span className="text-gold-deep">.</span> All rights reserved.
        </p>
      </div>
    </footer>
  )
}
