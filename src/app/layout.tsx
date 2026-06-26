import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700"],
})

export const metadata: Metadata = {
  title: "Jonathan Shyaka",
  description: "Founder building in Kigali.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable}`}>{children}</body>
    </html>
  )
}
