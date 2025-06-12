import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.sanity.io",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "plus.unsplash.com",
      "lh3.googleusercontent.com",
    ],
  },
};

export default nextConfig;
