/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: 'export',  // Enable static exports
  basePath: '/Ihor-Khomenko.github.io', // Replace with your repository name
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 