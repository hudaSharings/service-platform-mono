import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  // Disable static generation for admin routes
  async generateStaticParams() {
    return [];
  },
  // Enable static exports if needed
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
};

export default nextConfig;
