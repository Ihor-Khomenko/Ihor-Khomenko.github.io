/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '/Ihor-Khomenko.github.io' : '',
  images: {
    unoptimized: process.env.NODE_ENV === 'production' ? true : undefined,
  },
}

module.exports = nextConfig 