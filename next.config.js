/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  // Add basePath
  basePath: '/dynamic-form-editor',
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
