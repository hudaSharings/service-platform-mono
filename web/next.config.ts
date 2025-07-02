import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  // Disable static generation for admin routes
  async generateStaticParams() {
    return [];
  },
  env:{
    NEXT_PUBLIC_API_URL:'http://localhost:5111/api',
    NEXT_PUBLIC_USE_MOCK_API:'true'
  }
  // Enable static exports if needed
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
};

export default nextConfig;
