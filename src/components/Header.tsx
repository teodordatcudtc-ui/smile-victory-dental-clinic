'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/services', label: 'Servicii' },
  { href: '/doctors', label: 'Medici' },
  { href: '/pricing', label: 'Prețuri' },
  { href: '/about', label: 'Despre noi' },
  { href: '/contacts', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-sv-white/95 backdrop-blur-md border-b border-sv-bg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-sv-dark focus:text-sv-white focus:rounded-lg"
      >
        Sari la conținut
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M16 4C12 4 8 8 8 14V18C8 20 10 22 12 22H20C22 22 24 20 24 18V14C24 8 20 4 16 4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22V26H20V22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-bold text-lg sm:text-xl text-sv-dark">
              Smile Victory
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sv-dark/80 hover:text-sv-dark text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contacts#programare"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-sv-dark text-sv-white text-sm font-semibold rounded-lg hover:bg-sv-dark/90 transition-colors"
            >
              Programează-te
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 -mr-2 text-sv-dark"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Deschide meniul"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-1" aria-label="Principal mobil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sv-dark hover:text-sv-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacts#programare"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 py-3 px-4 bg-sv-dark text-sv-white text-center font-semibold rounded-lg"
            >
              Programează-te
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
