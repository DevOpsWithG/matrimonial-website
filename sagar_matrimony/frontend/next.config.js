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
                destination: 'http://localhost/api/auth/:path*' // Proxy to Nginx Gateway
            },
            {
                source: '/api/profile/:path*',
                destination: 'http://localhost/api/profile/:path*'
            }
        ]
    },
    output: 'standalone',
};

module.exports = nextConfig;
