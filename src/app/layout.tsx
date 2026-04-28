import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://stavrosrealty.com'),
  title: 'Stavros Realty - Luxury Real Estate in Central Texas | Keller Williams',
  description: 'Premier luxury real estate services in Central Texas with 26+ years of experience. Search properties, get home valuations, and access comprehensive real estate tools powered by Keller Williams.',
  keywords: 'luxury real estate, Central Texas, Austin, homes for sale, property search, home valuation, Keller Williams, Spero Stavros, mortgage calculator, market reports',
  openGraph: {
    title: 'Stavros Realty Team — Luxury Real Estate in Central Texas',
    description: 'Premier luxury real estate services in Central Texas with 26+ years of experience.',
    url: 'https://stavrosrealty.com',
    siteName: 'Stavros Realty Team',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stavros Realty Team — Luxury Real Estate in Central Texas',
    description: 'Premier luxury real estate services in Central Texas with 26+ years of experience.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
