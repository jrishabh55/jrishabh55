/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pagepro.co",
      },
      {
        hostname: "qph.cf2.quoracdn.net",
      },
      {
        hostname: "images.crunchbase.com",
      },
      {
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
};

export default nextConfig;
