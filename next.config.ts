import type { NextConfig } from 'next';

/** Replace this with your actual backend URL */
const BACKEND_URL = process.env.BACKEND_URL!;

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/pokemon',
        destination: `${BACKEND_URL}/Prod/pokemon`,
      },
      {
        source: '/api/pokemon/:id',
        destination: `${BACKEND_URL}/Prod/pokemon/:id`,
      },
    ];
  },
};

export default nextConfig;
