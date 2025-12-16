/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and update if deploying to a repo subdirectory (e.g., username.github.io/repo-name)
  // basePath: '/First-Commits-Website',
  // assetPrefix: '/First-Commits-Website/',
}

module.exports = nextConfig
