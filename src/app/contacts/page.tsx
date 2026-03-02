import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactează Smile Victory Dental Clinic din Timișoara. Program: Luni-Vineri 9-21, Sâmbătă-Duminică 10-18. Telefon: 0735 846 357.',
}

export default function ContactsPage() {
  return (
    <PageLayout>
      <section className="py-16 sm:py-24 bg-sv-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm font-medium tracking-wider text-sv-dark/50 uppercase mb-3">
            Hai să discutăm
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sv-dark mb-6 max-w-2xl">
            Contact
          </h1>
          <p className="text-sv-dark/70 max-w-xl mb-12">
            Suntem aici pentru tine. Programează-te telefonic sau vizitează-ne la
            clinica noastră din Timișoara.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="font-bold text-sv-dark mb-3">Adresă</h2>
                <address className="not-italic text-sv-dark/80">
                  Bulevardul Constantin Brâncoveanu 125/a
                  <br />
                  307200 Timișoara
                </address>
              </div>

              <div>
                <h2 className="font-bold text-sv-dark mb-3">Telefon</h2>
                <a
                  href="tel:0735846357"
                  className="text-sv-dark hover:text-sv-accent transition-colors text-lg"
                >
                  0735 846 357
                </a>
              </div>

              <div>
                <h2 className="font-bold text-sv-dark mb-3">Program</h2>
                <p className="text-sv-dark/80">Luni – Vineri: 9:00 – 21:00</p>
                <p className="text-sv-dark/80">Sâmbătă, Duminică: 10:00 – 18:00</p>
              </div>

              <div>
                <h2 className="font-bold text-sv-dark mb-3">Social</h2>
                <a
                  href="https://www.instagram.com/smilevictory_tm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sv-accent hover:underline"
                >
                  Instagram @smilevictory_tm
                </a>
              </div>

              <div id="programare" className="pt-8">
                <h2 className="font-bold text-sv-dark mb-3">Programează-te</h2>
                <p className="text-sv-dark/80 mb-4">
                  Sună la{' '}
                  <a
                    href="tel:0735846357"
                    className="text-sv-dark font-semibold hover:text-sv-accent"
                  >
                    0735 846 357
                  </a>{' '}
                  pentru a-ți rezerva o programare.
                </p>
                <a
                  href="tel:0735846357"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sv-dark text-sv-white font-semibold rounded-lg hover:bg-sv-dark/90 transition-colors"
                >
                  Sună acum
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-sv-white shadow-lg aspect-[4/3] min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2147.5837398208178!2d21.215025661106036!3d45.72966007747565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d17e2c1bfe7%3A0x9163cba53327cfdd!2sSmile%20Victory%20Dental%20Clinic!5e0!3m2!1sen!2sro!4v1772443560845!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Smile Victory Dental Clinic pe Google Maps"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
