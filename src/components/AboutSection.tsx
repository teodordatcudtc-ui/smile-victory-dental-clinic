'use client'

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Echipament de ultimă generație',
    description:
      'Investim în tehnologie de vârf pentru diagnostic precis și tratamente eficiente.',
    highlight: false,
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Echipă experimentată și dedicată',
    description:
      'Medicii noștri combină experiența cu abordarea caldă și profesională.',
    highlight: false,
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: 'Tratamente fără durere, fără stres',
    description:
      'Prioritizăm confortul tău. Folosim tehnici moderne pentru experiențe plăcute.',
    highlight: true,
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: 'Abordare personalizată pentru fiecare pacient',
    description:
      'Fiecare plan de tratament este adaptat nevoilor și obiectivelor tale.',
    highlight: false,
  },
]

export default function AboutSection() {
  return (
    <section
      className="py-16 sm:py-24 bg-sv-bg"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm font-medium tracking-wider text-sv-dark/50 uppercase mb-3">
          De ce să ne alegeți
        </p>
        <h2
          id="about-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sv-dark mb-8 sm:mb-10"
        >
          Despre Smile Victory Dental Clinic
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <p className="text-sv-dark/80 leading-relaxed">
            La Smile Victory credem că fiecare zâmbet merită să fie încredințat
            unei echipe care pune pacientul pe primul loc. Combinăm tehnologie
            modernă cu o abordare umană, pentru a-ți oferi cea mai bună
            experiență dentală.
          </p>
          <p className="text-sv-dark/80 leading-relaxed">
            Echipa noastră de medici specialiști acoperă toate domeniile
            stomatologiei – de la prevenție și igienă, până la cosmetica dentară
            și implantologie. Viziunea noastră: să transformăm vizitele la
            dentist într-o experiență plăcută, într-un spațiu cald și
            profesionist.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className={`rounded-2xl p-6 sm:p-8 ${
                f.highlight
                  ? 'bg-sv-accent text-sv-dark shadow-lg'
                  : 'bg-sv-white text-sv-dark'
              }`}
            >
              <div
                className={`mb-4 ${f.highlight ? 'text-sv-dark' : 'text-sv-dark'}`}
              >
                {f.icon}
              </div>
              <h3
                className={`font-bold mb-2 ${
                  f.highlight ? 'text-sv-dark' : 'text-sv-dark'
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`text-sm ${
                  f.highlight ? 'text-sv-dark/90' : 'text-sv-dark/70'
                }`}
              >
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
