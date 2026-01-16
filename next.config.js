const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias['@/lib/api'] = require('path').resolve(__dirname, 'lib/api');
    return config;
  },
};

module.exports = nextConfig;
