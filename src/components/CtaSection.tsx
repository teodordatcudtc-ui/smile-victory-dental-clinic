'use client'

import Link from 'next/link'

export default function CtaSection() {
  return (
    <section
      className="py-16 sm:py-24 bg-sv-dark text-sv-white"
      aria-labelledby="cta-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
        >
          Gata să-ți transformăm zâmbetul?
        </h2>
        <p className="text-sv-white/80 mb-8 max-w-xl mx-auto">
          Programează-te acum pentru o consultație și descoperă de ce pacienții
          noștri ne recomandă cu încredere.
        </p>
        <Link
          href="/contacts#programare"
          className="inline-flex items-center gap-2 px-8 py-4 bg-sv-accent text-sv-dark font-semibold rounded-lg hover:bg-sv-accent/90 transition-colors"
        >
          Programează-te acum
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}
