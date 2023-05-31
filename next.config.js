/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://picsum.photos/", "picsum.photos"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
