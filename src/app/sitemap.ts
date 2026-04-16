import { MetadataRoute } from 'next'
import { getActiveProperties } from '@/data/properties'

export default function sitemap(): MetadataRoute.Sitemap {
  const properties = getActiveProperties()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stavrosrealty.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/listings`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const propertyRoutes: MetadataRoute.Sitemap = properties.map((p) => ({
    url: `${baseUrl}/listings/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...propertyRoutes]
}
