'use client'

import Image from 'next/image'

const testimonials = [
  {
    name: 'Maria Stan',
    rating: 5,
    text: 'Am fost foarte mulțumită de experiență. Personalul este cald, explicațiile sunt clare, iar tratamentul a fost fără durere. Recomand cu căldură Smile Victory.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Andrei Munteanu',
    rating: 5,
    text: 'După experiențe neplăcute în trecut, am găsit aici un medic blând și competent. Mi-a făcut o plombare perfectă și m-am simțit în siguranță.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Ioana Pop',
    rating: 5,
    text: 'După ani de ezitare am decis să-mi fac albirea dentară. Rezultatul a depășit așteptările. Echipa Smile Victory știe ce face.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
]

export default function TestimonialsSection() {
  return (
    <section
      className="py-16 sm:py-24 bg-sv-bg"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm font-medium tracking-wider text-sv-dark/50 uppercase mb-3">
          Păreri pacienți
        </p>
        <h2
          id="testimonials-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sv-dark mb-8 sm:mb-12"
        >
          Ce spun pacienții noștri
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-sv-white rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-sv-bg shrink-0">
                  <Image
                    src={t.avatar}
                    alt={`${t.name}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sv-dark">{t.name}</h3>
                  <p className="text-sv-accent font-medium text-sm">
                    {t.rating}.0 ★
                  </p>
                </div>
              </div>
              <p className="text-sv-dark/80 text-sm leading-relaxed">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
