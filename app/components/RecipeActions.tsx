"use client"

import Link from "next/link"

import { Check, ChefHat, Printer, Share2 } from "lucide-react"
import { useState } from "react"

type RecipeActionsProps = {
  title: string
  cookModeHref: string
}

const PILL_CLASS =
  "inline-flex h-10 items-center gap-2 rounded-full border border-rule bg-wash px-4 font-body text-sm font-medium text-ink transition-colors duration-200 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"

export function RecipeActions({ title, cookModeHref }: RecipeActionsProps) {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const url = window.location.href

    // Todo: Integrate Sharing
    if (navigator.share !== undefined) {
      try {
        await navigator.share({ title, url })
        return
      } catch {
        return
      }
    }

    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard access can be refused; there is nothing useful to do but
      // leave the button as it was.
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <Link href={cookModeHref} className={PILL_CLASS}>
        <ChefHat className="size-4 text-gold-deep" strokeWidth={2.25} aria-hidden="true"/>
        Cook mode
      </Link>

      <button type="button" onClick={() => window.print()} className={PILL_CLASS}>
        <Printer className="size-4 text-muted" strokeWidth={2.25} aria-hidden="true"/>
        Print
      </button>

      <button type="button" onClick={handleShare} className={PILL_CLASS}>
        {copied ? (
          <Check className="size-4 text-gold-deep" strokeWidth={2.25} aria-hidden="true"/>
        ) : (
          <Share2 className="size-4 text-muted" strokeWidth={2.25} aria-hidden="true"/>
        )}
        {copied ? "Link copied" : "Share"}
      </button>
    </div>
  )
}
