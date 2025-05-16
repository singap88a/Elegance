// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raya.smartbrand-dev.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;