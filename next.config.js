/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  productionBrowserSourceMaps: true,

  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset",
      resourceQuery: /url/,
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
