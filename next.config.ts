import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mysoresareeudyog.com",
      },
      {
        protocol: "https",
        hostname: "www.mysoresareeudyog.com",
      },
    ],
  },
};

export default nextConfig;
