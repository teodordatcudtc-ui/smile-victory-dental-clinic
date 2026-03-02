import type { Metadata, Viewport } from 'next'
import { Unbounded } from 'next/font/google'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://smilevictory.ro'),
  title: {
    default: 'Smile Victory Dental Clinic | Clinica de stomatologie Timișoara',
    template: '%s | Smile Victory Dental Clinic',
  },
  description:
    'Smile Victory Dental Clinic – Clinica de stomatologie în Timișoara. Îngrijire dentală avansată, echipă experimentată, tratamente fără durere. Programează-te acum.',
  keywords: [
    'stomatologie Timișoara',
    'dentist Timișoara',
    'clinica dentara',
    'Smile Victory',
  ],
  authors: [{ name: 'Smile Victory Dental Clinic' }],
  creator: 'Smile Victory Dental Clinic',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={unbounded.variable}>
      <body className="font-unbounded antialiased bg-sv-white text-sv-dark">
        {children}
      </body>
    </html>
  )
}
