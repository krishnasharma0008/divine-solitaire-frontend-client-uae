/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "api.rsdpl.com",
      },
      {
        protocol: "http",
        hostname: "api.rsdpl.com",
      },
    ],
  },
};

module.exports = nextConfig;
