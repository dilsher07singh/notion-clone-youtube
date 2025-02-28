import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // ✅ Enables React Strict Mode
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignores ESLint errors in production
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Prevents TypeScript errors from blocking builds
  },
};

export default nextConfig;
