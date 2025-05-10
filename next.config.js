/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ⬅️ ovo je ključno!
  },
};

module.exports = nextConfig;
