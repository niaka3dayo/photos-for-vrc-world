import type { NextConfig } from 'next';

/**
 * Define the Next.js configuration.
 */
const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
