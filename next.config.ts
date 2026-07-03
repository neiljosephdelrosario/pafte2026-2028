import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: "standalone",
  staticPageGenerationTimeout: 120,
};

export default nextConfig;