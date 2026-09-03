import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/quality-process",
        destination: "/export-process",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
