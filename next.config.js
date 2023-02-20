/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        port: '',
        pathname: '/data/products/**/**',
      },
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform, if false, Warning: Props `className` did not match between server and client side.
    // Other hand can config in .babelrc
    styledComponents: true,
  },
}

module.exports = nextConfig
