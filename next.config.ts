import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/destinations",
        destination: "/#destinations",
        permanent: false,
      },
      {
        source: "/experiences",
        destination: "/#destinations",
        permanent: false,
      },
      {
        source: "/experiences/:slug",
        destination: "/destinations/:slug",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
