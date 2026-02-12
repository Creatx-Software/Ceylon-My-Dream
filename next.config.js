/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(process.env.NODE_ENV === 'production' && { output: 'standalone' }),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
