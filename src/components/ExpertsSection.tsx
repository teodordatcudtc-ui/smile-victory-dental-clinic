'use client'

import Link from 'next/link'
import Image from 'next/image'

const doctors = [
  {
    name: 'Dr. Alexandra Popescu',
    role: 'Medic stomatolog',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  },
  {
    name: 'Dr. Mihai Ionescu',
    role: 'Chirurg oral',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  },
  {
    name: 'Dr. Elena Dumitrescu',
    role: 'Ortodont',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  },
]

export default function ExpertsSection() {
  return (
    <section
      className="py-16 sm:py-24 bg-sv-white"
      aria-labelledby="experts-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm font-medium tracking-wider text-sv-dark/50 uppercase mb-3">
          Echipa noastră
        </p>
        <h2
          id="experts-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sv-dark mb-8 sm:mb-12"
        >
          Experți de încredere
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sv-bg mb-4">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.role}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="font-bold text-sv-dark text-lg">{doctor.name}</h3>
              <p className="text-sv-dark/70 text-sm">{doctor.role}</p>
            </article>
          ))}
        </div>

        <Link
          href="/doctors"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-sv-dark text-sv-white font-semibold rounded-lg hover:bg-sv-dark/90 transition-colors"
        >
          Toți medicii
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
