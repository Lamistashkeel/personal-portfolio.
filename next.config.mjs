/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // auto-converts PNGs → WebP/AVIF (fixes your slow loading)
  },
};

export default nextConfig;