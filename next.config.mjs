/** @type {import('next').NextConfig} */
const nextConfig = {
     eslint: {
    ignoreDuringBuilds: true,
  },
   env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

export default nextConfig;
