/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: 'export',
  basePath: '/Ihor-Khomenko.github.io',
  assetPrefix: '/Ihor-Khomenko.github.io/',
  images: {
    unoptimized: true,
    domains: ['github.com'],
  },
  trailingSlash: true,
}

module.exports = nextConfig 