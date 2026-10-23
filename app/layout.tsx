import { SiteFooter } from "./components/SiteFooter"
import { SiteHeader } from "./components/SiteHeader"
import type { Metadata } from "next"
import { Archivo, Inter } from "next/font/google"

import "./globals.css"

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"]
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Recipes",
  description: "Recipe collection and management"
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="site-root flex min-h-full flex-col bg-paper font-body text-ink">
        <SiteHeader/>
        {children}
        <SiteFooter/>
      </body>
    </html>
  )
}
