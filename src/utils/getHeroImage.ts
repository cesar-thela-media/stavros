import { readdirSync } from 'fs'
import { join } from 'path'

/**
 * Automatically detects the hero image for a property listing
 * by finding the first image file at the highest level of the property's folder
 * This function runs server-side during build/request time
 * @param propertyId - The property ID/slug (e.g., 'winchester', 'mountain-dew')
 * @returns The path to the hero image or null if none found
 */
export function getHeroImage(propertyId: string): string | null {
  try {
    const listingPath = join(process.cwd(), 'public', 'listings', propertyId)
    const files = readdirSync(listingPath)
    
    // Common image extensions
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif']
    
    // Find the first image file (excluding directories and README files)
    const heroImage = files.find(file => {
      // Skip directories and non-image files
      if (file.toLowerCase().includes('readme') || file.toLowerCase().includes('.md')) {
        return false
      }
      
      const extension = file.toLowerCase().substring(file.lastIndexOf('.'))
      return imageExtensions.includes(extension)
    })
    
    if (heroImage) {
      return `/listings/${propertyId}/${heroImage}`
    }
    
    return null
  } catch (error) {
    console.warn(`Could not find hero image for property: ${propertyId}`, error)
    return null
  }
}

/**
 * Gets the hero image for a property, with fallback to first gallery image
 * @param propertyId - The property ID/slug
 * @param galleryImages - Array of gallery image paths as fallback
 * @returns The path to the hero image
 */
export function getHeroImageWithFallback(propertyId: string, galleryImages: string[]): string {
  const heroImage = getHeroImage(propertyId)
  
  if (heroImage) {
    return heroImage
  }
  
  // Fallback to first gallery image if no hero image found
  if (galleryImages && galleryImages.length > 0) {
    return galleryImages[0]
  }
  
  // Ultimate fallback - could be a default property image
  return '/assets/hero2.png'
}
