/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "plus.unsplash.com",
    ],
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;
