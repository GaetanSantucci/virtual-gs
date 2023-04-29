/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['https://images.pexels.com/'],
  },
}

module.exports = nextConfig
