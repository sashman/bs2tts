/** @type {import('next').NextConfig} */

// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/bs2tts/' : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
