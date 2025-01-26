/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        pathname: '/dpurgotxn/**',
      },
    ],
    domains: ['res.cloudinary.com'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      // Redirection des anciennes URLs
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/produit.html',
        destination: '/produits',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/produits',
        permanent: true,
      },
      {
        source: '/cgi-sys/suspendedpage.cgi',
        destination: '/',
        permanent: true,
      },
      // Nettoyage des URLs avec #!
      {
        source: '/#!',
        destination: '/',
        permanent: true,
      },
      {
        source: '/produit.html#!',
        destination: '/produits',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig

