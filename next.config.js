/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'Ihor-Khomenko.github.io';

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: isProduction ? 'export' : undefined,
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
    domains: ['github.com'],
  },
  trailingSlash: true,
}

module.exports = nextConfig 