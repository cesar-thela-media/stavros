/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'utils', 'components', 'lib', 'src'],
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
