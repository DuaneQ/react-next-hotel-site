{import('next').NextConfig}

const nextConfig = {
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

module.exports = nextConfig;
