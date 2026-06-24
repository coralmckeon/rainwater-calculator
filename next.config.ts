import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rainwater-calculator",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
