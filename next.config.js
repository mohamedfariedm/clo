/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['codia-f2c.s3.us-west-1.amazonaws.com']
  },
  trailingSlash: true,
};

module.exports = nextConfig;