{
  import("next").NextConfig;
}

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: "export",
  ...(isGithubActions && {
    basePath: "/REPO_NAME",
    assetPrefix: "/REPO_NAME/",
  }),
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
