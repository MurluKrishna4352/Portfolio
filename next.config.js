/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅  Disable ESLint and TypeScript errors during ‘next build’
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
