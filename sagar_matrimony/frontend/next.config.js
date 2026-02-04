/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
    async rewrites() {
        return [
            {
                source: '/api/auth/:path*',
                destination: 'http://gateway/api/auth/:path*' // Proxy to Nginx Gateway service
            },
            {
                source: '/api/profile/:path*',
                destination: 'http://gateway/api/profile/:path*'
            }
        ]
    },
    output: 'standalone',
};

module.exports = nextConfig;
