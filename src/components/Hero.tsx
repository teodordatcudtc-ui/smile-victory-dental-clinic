'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const today = new Date()
  const dayNames = [
    'Duminică',
    'Luni',
    'Marți',
    'Miercuri',
    'Joi',
    'Vineri',
    'Sâmbătă',
  ]
  const day = dayNames[today.getDay()]
  const time = today.toLocaleTimeString('ro-RO', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <section
      className="relative min-h-[65vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Mobil: imagine fundal */}
      <div className="lg:hidden absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=85"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          aria-hidden
        />
        <div className="absolute inset-0 bg-white/75" aria-hidden />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 lg:bg-sv-bg lg:rounded-[2rem] xl:rounded-[3rem] overflow-hidden lg:shadow-sm">
          {/* Coloana stânga – text și CTA (~45%) */}
          <div className="flex-[0.45] flex flex-col justify-center items-center lg:items-stretch text-center lg:text-left pl-4 sm:pl-6 lg:pl-12 xl:pl-16 pr-4 sm:pr-6 lg:pr-6 py-8 sm:py-12 lg:py-16 order-2 lg:order-1">
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[2.75rem] font-bold text-sv-dark leading-[1.15] mb-4 sm:mb-6"
            >
              Zâmbetul tău perfect
              <br />
              începe la Smile Victory
            </h1>
            <p className="text-base sm:text-lg text-sv-dark/70 mb-6 sm:mb-8 max-w-md">
              Îngrijire dentală avansată cu un plus de blândețe. Programează-te
              astăzi.
            </p>

            {/* Working Hours + CTA – simetrice, centrate pe mobil */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-stretch w-full max-w-md sm:max-w-none mx-auto sm:mx-0">
              <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-stretch gap-4 sm:gap-5">
                <div className="flex-1 w-full bg-sv-white rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between min-h-[120px] sm:min-h-[140px] text-center lg:text-left">
                  <div>
                    <p className="text-sm font-bold text-sv-dark mb-2">
                      Program de lucru
                    </p>
                    <p className="text-sv-dark/80 text-sm">Luni – Vineri 9:00 – 21:00</p>
                    <p className="text-sv-dark/80 text-sm">Sâmbătă, Duminică 10:00 – 18:00</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-sv-dark/5">
                    <p className="text-xs text-sv-dark/60">
                      Astăzi {day}, {time}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contacts#programare"
                  className="flex-1 w-full min-h-[120px] sm:min-h-[140px] flex items-center justify-center lg:justify-between gap-4 bg-sv-accent hover:bg-sv-accent/90 text-sv-dark font-bold rounded-2xl px-5 sm:px-6 py-5 sm:py-6 transition-colors group"
                >
                  <span className="text-center lg:text-left">Programează-te acum</span>
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-sv-white/50 flex items-center justify-center group-hover:bg-sv-white/70 transition-colors">
                    <svg
                      className="w-5 h-5 text-sv-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Coloana dreapta – imagine (~55%), ascunsă pe mobil (imaginea e fundal) */}
          <div className="hidden lg:flex flex-[0.55] relative min-h-[45vh] sm:min-h-[50vh] lg:min-h-[85vh] order-1 lg:order-2">
            <div className="absolute inset-0 lg:rounded-r-[2rem] lg:rounded-r-[3rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=85"
                alt="Pacient fericit la Smile Victory Dental Clinic"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
