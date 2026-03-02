import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Despre noi',
  description:
    'Smile Victory Dental Clinic – Clinica de stomatologie din Timișoara. Povestea noastră, valorile și echipa dedicată zâmbetului tău.',
}

const features = [
  {
    title: 'Echipament de ultimă generație',
    description: 'Investim în tehnologie de vârf pentru diagnostic precis și tratamente eficiente.',
  },
  {
    title: 'Echipă experimentată și dedicată',
    description: 'Medicii noștri combină experiența cu abordarea caldă și profesională.',
  },
  {
    title: 'Tratamente fără durere, fără stres',
    description: 'Prioritizăm confortul tău. Folosim tehnici moderne pentru experiențe plăcute.',
  },
  {
    title: 'Abordare personalizată',
    description: 'Fiecare plan de tratament este adaptat nevoilor și obiectivelor tale.',
  },
]

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="py-16 sm:py-24 bg-sv-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm font-medium tracking-wider text-sv-dark/50 uppercase mb-3">
            De ce să ne alegeți
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sv-dark mb-8 max-w-3xl">
            Despre Smile Victory Dental Clinic
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <p className="text-sv-dark/80 leading-relaxed text-lg">
              La Smile Victory credem că fiecare zâmbet merită să fie încredințat
              unei echipe care pune pacientul pe primul loc. Combinăm tehnologie
              modernă cu o abordare umană, pentru a-ți oferi cea mai bună
              experiență dentală.
            </p>
            <p className="text-sv-dark/80 leading-relaxed">
              Echipa noastră de medici specialiști acoperă toate domeniile
              stomatologiei – de la prevenție și igienă, până la cosmetica
              dentară și implantologie. Viziunea noastră: să transformăm vizitele
              la dentist într-o experiență plăcută, într-un spațiu cald și
              profesionist.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {features.map((f, i) => (
              <article
                key={f.title}
                className={`rounded-2xl p-6 sm:p-8 ${
                  i === 2 ? 'bg-sv-accent' : 'bg-sv-white'
                }`}
              >
                <h2 className="font-bold text-sv-dark mb-2">{f.title}</h2>
                <p
                  className={`text-sm ${
                    i === 2 ? 'text-sv-dark/90' : 'text-sv-dark/70'
                  }`}
                >
                  {f.description}
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/doctors"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sv-dark text-sv-white font-semibold rounded-lg hover:bg-sv-dark/90 transition-colors"
            >
              Cunoaște echipa
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sv-accent text-sv-dark font-semibold rounded-lg hover:bg-sv-accent/90 transition-colors"
            >
              Contact
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
