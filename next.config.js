/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // We'll add basePath during deployment
  // basePath: process.env.NODE_ENV === 'production' ? '/likeonce' : '',
}

module.exports = nextConfig
