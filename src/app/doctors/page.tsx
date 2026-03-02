import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicii noștri',
  description:
    'Cunoaște echipa Smile Victory: stomatologi, chirurgi orali și ortodonți cu experiență și abordare dedicată pacienților.',
}

const doctors = [
  {
    name: 'Dr. Alexandra Popescu',
    role: 'Medic stomatolog',
    specialization: 'Stomatologie generală, estetică dentară',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  },
  {
    name: 'Dr. Mihai Ionescu',
    role: 'Chirurg oral',
    specialization: 'Implantologie, extracții complicate',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  },
  {
    name: 'Dr. Elena Dumitrescu',
    role: 'Ortodont',
    specialization: 'Ortodonție fixă și transparentă',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  },
  {
    name: 'Dr. Andrei Stan',
    role: 'Medic stomatolog',
    specialization: 'Endodonție, tratament restaurator',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
  },
]

const filters = ['Toți', 'Stomatologi', 'Chirurgi', 'Ortodonți']

export default function DoctorsPage() {
  return (
    <PageLayout>
      <section className="py-16 sm:py-24 bg-sv-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm font-medium tracking-wider text-sv-dark/50 uppercase mb-3">
            Echipa noastră
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sv-dark mb-6 max-w-2xl">
            Experți de încredere
          </h1>
          <p className="text-sv-dark/70 max-w-xl mb-12">
            Medici specialiști cu experiență, dedicați să-ți oferim cea mai bună
            îngrijire dentală.
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  f === 'Toți'
                    ? 'bg-sv-accent text-sv-dark'
                    : 'bg-sv-white text-sv-dark/80 hover:bg-sv-accent/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((d) => (
              <article key={d.name} className="group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sv-white shadow-sm mb-4">
                  <Image
                    src={d.image}
                    alt={`${d.name} - ${d.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h2 className="font-bold text-sv-dark text-lg">{d.name}</h2>
                <p className="text-sv-accent font-medium text-sm">{d.role}</p>
                <p className="text-sv-dark/70 text-sm mt-1">{d.specialization}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contacts#programare"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sv-dark text-sv-white font-semibold rounded-lg hover:bg-sv-dark/90 transition-colors"
            >
              Programează-te
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
