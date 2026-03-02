import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicii stomatologice',
  description:
    'Smile Victory oferă servicii complete de stomatologie: estetică, implantologie, tratament restaurator, ortodonție și prevenție.',
}

const services = [
  {
    id: 'cosmetic',
    title: 'Stomatologie estetică',
    description:
      'Îmbunătățim estetica zâmbetului tău prin albire, facete, lumineers și conturare.',
    items: ['Albire dentară profesională', 'Facete din ceramică', 'Lumineers', 'Conturare'],
    icon: 'sparkle',
  },
  {
    id: 'implants',
    title: 'Implantologie și proteze',
    description:
      'Soluții durabile pentru înlocuirea dinților pierduți: implanturi, coroane, poduri.',
    items: ['Implant dentar', 'Coroane ceramice', 'Poduri dentare', 'Proteze totale și parțiale'],
    icon: 'implant',
  },
  {
    id: 'restorative',
    title: 'Tratament restaurator',
    description:
      'Reparăm și reconstruim dinții afectați de carii sau fracturi.',
    items: ['Plombe estetice', 'Tratament endodontic (canal)', 'Reconstrucții', 'Inleieri'],
    icon: 'restore',
  },
  {
    id: 'orthodontics',
    title: 'Ortodonție',
    description:
      'Corectarea poziției dinților prin aparate fixe sau invizibile.',
    items: ['Aparate fixe', 'Aparate transparente', 'Retineri'],
    icon: 'ortho',
  },
  {
    id: 'prevention',
    title: 'Prevenție și igienă',
    description:
      'Control preventiv, detartraj, fluorizare și sfaturi pentru igiena orală.',
    items: ['Consultație și control', 'Detartraj', 'Fluorizare', 'Sfat nutrițional'],
    icon: 'prevent',
  },
]

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="py-16 sm:py-24 bg-sv-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm font-medium tracking-wider text-sv-dark/50 uppercase mb-3">
            Serviciile noastre
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sv-dark mb-6 max-w-2xl">
            Servicii stomatologice pentru orice nevoie
          </h1>
          <p className="text-sv-dark/70 max-w-xl mb-12">
            Oferim o gamă completă de tratamente, de la prevenție la proceduri
            cosmetice și restauratoare avansate.
          </p>

          <div className="space-y-12 lg:space-y-16">
            {services.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className={`flex flex-col ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 lg:gap-16 items-start`}
              >
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-sv-dark mb-4">
                    {s.title}
                  </h2>
                  <p className="text-sv-dark/70 mb-6">{s.description}</p>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sv-dark/80"
                      >
                        <span className="text-sv-accent">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`w-full lg:w-80 shrink-0 h-48 lg:h-64 rounded-2xl bg-sv-accent/30 flex items-center justify-center ${
                    i === 2 ? 'bg-sv-accent' : ''
                  }`}
                >
                  <span className="text-6xl opacity-50">◇</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-sv-dark/10">
            <Link
              href="/contacts#programare"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sv-dark text-sv-white font-semibold rounded-lg hover:bg-sv-dark/90 transition-colors"
            >
              Programează-te pentru o consultație
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
