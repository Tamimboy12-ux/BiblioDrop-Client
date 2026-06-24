/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */

const nextConfig = {

  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],

    domains: [
      "images.unsplash.com"
    ],
  },

};


export default nextConfig;
