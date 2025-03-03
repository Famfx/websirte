/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
  },
}

module.exports = nextConfig
