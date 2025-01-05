/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'npx serve@latest out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
