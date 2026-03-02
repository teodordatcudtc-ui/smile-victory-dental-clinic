import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Prețuri',
  description:
    'Transparență în prețuri la Smile Victory Dental Clinic. Consultanță și deviz personalizat gratuit.',
}

const priceCategories = [
  {
    title: 'Consultație și diagnostic',
    items: [
      { name: 'Consultație stomatologică', price: 'de la 150 lei' },
      { name: 'Consultație ortodontică', price: 'de la 200 lei' },
      { name: 'Radiografie panoramică', price: 'de la 80 lei' },
    ],
  },
  {
    title: 'Tratamente preventive',
    items: [
      { name: 'Detartraj', price: 'de la 200 lei' },
      { name: 'Fluorizare', price: 'de la 100 lei' },
      { name: 'Sigilare fosete și zgârieturi', price: 'de la 80 lei/dinte' },
    ],
  },
  {
    title: 'Tratamente restauratoare',
    items: [
      { name: 'Plombă estetică', price: 'de la 250 lei' },
      { name: 'Tratament endodontic (1 canal)', price: 'de la 400 lei' },
      { name: 'Tratament endodontic (2-3 canale)', price: 'de la 700 lei' },
    ],
  },
  {
    title: 'Stomatologie estetică',
    items: [
      { name: 'Albire dentară cabinet', price: 'de la 800 lei' },
      { name: 'Albire acasă (ghidată)', price: 'de la 500 lei' },
      { name: 'Facetă ceramică', price: 'de la 1500 lei' },
    ],
  },
  {
    title: 'Implantologie',
    items: [
      { name: 'Implant dentar (fără coroană)', price: 'de la 2500 lei' },
      { name: 'Coroană pe implant', price: 'de la 1500 lei' },
    ],
  },
]

export default function PricingPage() {
  return (
    <PageLayout>
      <section className="py-16 sm:py-24 bg-sv-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm font-medium tracking-wider text-sv-dark/50 uppercase mb-3">
            Transparență
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sv-dark mb-6 max-w-2xl">
            Prețuri orientative
          </h1>
          <p className="text-sv-dark/70 max-w-xl mb-12">
            Prețurile sunt orientative și pot varia în funcție de complexitatea
            cazului. Oferim consultație și deviz personalizat gratuit.
          </p>

          <div className="space-y-12">
            {priceCategories.map((cat) => (
              <div key={cat.title}>
                <h2 className="text-xl font-bold text-sv-dark mb-6 border-b border-sv-dark/10 pb-2">
                  {cat.title}
                </h2>
                <div className="bg-sv-white rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-left">
                    <tbody>
                      {cat.items.map((item) => (
                        <tr
                          key={item.name}
                          className="border-b border-sv-bg last:border-0"
                        >
                          <td className="px-6 py-4 text-sv-dark">{item.name}</td>
                          <td className="px-6 py-4 text-sv-dark font-medium whitespace-nowrap">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-sv-accent rounded-2xl text-center">
            <h2 className="text-xl font-bold text-sv-dark mb-3">
              Vrei un deviz personalizat?
            </h2>
            <p className="text-sv-dark/80 mb-6 max-w-lg mx-auto">
              Programează-te pentru o consultație. Evaluăm situația ta și îți
              oferim un plan de tratament cu prețuri clare.
            </p>
            <Link
              href="/contacts#programare"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sv-dark text-sv-white font-semibold rounded-lg hover:bg-sv-dark/90 transition-colors"
            >
              Programează o consultație
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
