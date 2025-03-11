import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration options
  output: "export", // This enables static export
  images: {
    unoptimized: true, // This disables the default Image Optimization API for static exports
  },
};

export default nextConfig;
