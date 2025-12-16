/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages subdirectory deployment
  basePath: '/First-Commits-Website',
  assetPrefix: '/First-Commits-Website/',
}

module.exports = nextConfig
