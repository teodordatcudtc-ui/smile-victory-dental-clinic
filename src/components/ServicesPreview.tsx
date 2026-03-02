'use client'

import Link from 'next/link'

const services = [
  {
    id: 'cosmetic',
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: 'Stomatologie estetică',
    items: ['Albire dentară', 'Facete', 'Lumineers'],
  },
  {
    id: 'implants',
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 20h16v-4H4v4zm0-8h16V8H4v4zm0-8v4h16V4H4z"
        />
      </svg>
    ),
    title: 'Implantologie și proteze',
    items: ['Implant dentar', 'Coroane', 'Poduri dentare'],
  },
  {
    id: 'restorative',
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Tratament restaurator',
    items: ['Plombe estetice', 'Tratament endodontic', 'Reconstrucții'],
  },
]

export default function ServicesPreview() {
  return (
    <section
      className="py-16 sm:py-24 bg-sv-white"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2
              id="services-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sv-dark mb-3"
            >
              Serviciile de care ai nevoie
            </h2>
            <p className="text-sv-dark/70 max-w-xl">
              De la prevenție până la tratamente cosmetice și restauratoare,
              oferim o gamă completă adaptată nevoilor tale.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sv-dark font-semibold hover:text-sv-accent transition-colors shrink-0"
          >
            Toate serviciile
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <article
              key={service.id}
              className="group bg-sv-bg rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-sv-dark mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-sv-dark mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2 mb-6">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sv-dark/80 text-sm"
                  >
                    <span className="text-sv-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-2 text-sv-dark font-medium text-sm group-hover:gap-3 transition-all"
              >
                Detalii
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
