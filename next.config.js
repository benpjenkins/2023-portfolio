const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/robots.txt", destination: "/api/robots" }];
  },
};

module.exports = nextConfig;
