const withNextra = require('nextra')({
  // Tell Nextra to use the custom theme as the layout
  theme: './components/theme.jsx',
})

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: isProd ? '/dylanjohn-dev' : "",
  basePath: '/dylanjohn-dev',
}

module.exports = withNextra(nextConfig)