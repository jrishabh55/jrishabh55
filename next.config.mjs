/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pagepro.co",
      },
    ],
  },
};

export default nextConfig;
