/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: undefined,
  assetPrefix: undefined,
  images: {
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig
