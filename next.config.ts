import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
      },
    ],
    // domains: ['cdn.imagin.studio'],
  },
  /* config options here */
};

export default nextConfig;
