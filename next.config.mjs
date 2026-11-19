/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static site for GitHub Pages
  images: {
    unoptimized: true, // no image server on Pages
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
