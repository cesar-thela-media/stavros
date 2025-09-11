import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Stavros Realty - Luxury Real Estate in Central Texas | Keller Williams',
  description: 'Premier luxury real estate services in Central Texas with 26+ years of experience. Search properties, get home valuations, and access comprehensive real estate tools powered by Keller Williams.',
  keywords: 'luxury real estate, Central Texas, Austin, homes for sale, property search, home valuation, Keller Williams, Spero Stavros, mortgage calculator, market reports',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
