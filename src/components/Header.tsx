"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./ThemeToggle"

const navigation = [
  { name: "About", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-gray-900/75 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-1 flex justify-center sm:justify-start">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-base font-medium ${
                    pathname === item.href
                      ? "border-b-2 border-blue-500 text-gray-900 dark:text-white"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
} 