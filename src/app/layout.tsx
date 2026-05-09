import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lubangocands.co.za'),
  title: {
    template: '%s | Lubango Security & Cleaning',
    default: 'Lubango Security & Cleaning | Professional Services Across South Africa',
  },
  description:
    'Lubango C&S provides professional security guarding, commercial cleaning, and consulting services across Cape Town, Knysna, and Uitenhage. Licensed, vetted, and available 24/7.',
  keywords: [
    'security company South Africa',
    'cleaning services Cape Town',
    'office cleaning Kuilsriver',
    'security guards Knysna',
    'building security Uitenhage',
    'commercial cleaning services',
    'PSIRA registered security',
    'Lubango security cleaning',
  ],
  authors: [{ name: 'Lubango Security & Cleaning' }],
  creator: 'Lubango Security & Cleaning',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.lubangocands.co.za',
    siteName: 'Lubango Security & Cleaning',
    title: 'Lubango Security & Cleaning | Professional Services Across South Africa',
    description:
      'Professional security guarding, commercial cleaning, and consulting services. Licensed, vetted personnel serving Cape Town, Knysna, and Uitenhage.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lubango Security & Cleaning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lubango Security & Cleaning',
    description: 'Professional security and cleaning services across South Africa.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
