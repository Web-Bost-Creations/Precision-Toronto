/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const baseConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'o2ftva8bhe.ufs.sh',
          },
        ],
        formats: ['image/avif', 'image/webp'],
    },
    compress: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['lucide-react'],
    },
    async headers() {
        return [
            {
                source: '/:path*\\.(svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|woff2?)',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ],
            },
        ];
    },
};

const withBundleAnalyzer = (await import('@next/bundle-analyzer')).default({
    enabled: process.env.ANALYZE === 'true',
});

const config = withBundleAnalyzer(baseConfig);

export default config;
