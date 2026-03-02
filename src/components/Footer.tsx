'use client'

import Link from 'next/link'

const footerLinks = [
  { href: '/services', label: 'Servicii' },
  { href: '/doctors', label: 'Medici' },
  { href: '/pricing', label: 'Prețuri' },
  { href: '/about', label: 'Despre noi' },
  { href: '/contacts', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-sv-dark text-sv-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg
                width="28"
                height="28"
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
              <span className="font-bold text-lg">Smile Victory</span>
            </Link>
            <p className="text-sv-white/70 text-sm mb-4 max-w-sm">
              Smile Victory Dental Clinic – Clinica de stomatologie din Timișoara.
              Îngrijire dentală avansată, echipă dedicată.
            </p>
            <a
              href="https://www.instagram.com/smilevictory_tm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sv-accent hover:text-sv-accent/80 transition-colors"
              aria-label="Instagram Smile Victory"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Linkuri rapide</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sv-white/70 hover:text-sv-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sv-white/70 text-sm space-y-2">
              <p>Bd. Constantin Brâncoveanu 125/a</p>
              <p>307200 Timișoara</p>
              <a
                href="tel:0735846357"
                className="block hover:text-sv-accent transition-colors"
              >
                0735 846 357
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sv-white/10 text-center text-sv-white/50 text-sm">
          <p>© {new Date().getFullYear()} Smile Victory Dental Clinic. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
