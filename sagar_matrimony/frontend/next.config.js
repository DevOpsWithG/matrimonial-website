/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
    async rewrites() {
        return [
            {
                // Internal proxy directly to Auth Service
                source: '/api/auth/:path*',
                destination: 'http://auth-service:8000/:path*'
            },
            {
                // Internal proxy directly to Profile Service
                source: '/api/profile/:path*',
                destination: 'http://profile-service:8000/:path*'
            }
        ]
    },
    output: 'standalone',
};

module.exports = nextConfig;
