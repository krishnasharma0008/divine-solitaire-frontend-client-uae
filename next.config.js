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
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
