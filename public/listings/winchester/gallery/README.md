# Winchester Property Gallery

This folder contains additional gallery images for the 112 Winchester property listing.

## Adding Images

1. Place high-quality images in this folder
2. Use descriptive filenames (e.g., `kitchen-view.jpg`, `master-bedroom.jpg`, `exterior-front.jpg`)
3. Recommended formats: JPG, PNG, WebP
4. Recommended resolution: At least 1920x1080 for best quality

## Image Guidelines

- Use professional, well-lit photography
- Ensure images showcase the property's best features
- Include various angles and rooms
- Consider both interior and exterior shots

## Update Code

After adding images, update the `gallery` array in:
`/src/app/listings/[slug]/page.tsx`

Example:
```javascript
gallery: [
  '/listings/winchester/gallery/kitchen-view.jpg',
  '/listings/winchester/gallery/master-bedroom.jpg',
  '/listings/winchester/gallery/exterior-front.jpg'
]
```

The PropertyGallery component will automatically display thumbnails and allow navigation between images.
