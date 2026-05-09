/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This makes Vercel handle the heavy lifting
    formats: ['image/avif', 'image/webp'],
    // This allows localhost to show images even if they are unoptimized
    unoptimized: process.env.NODE_ENV !== 'production',
  },
};

export default nextConfig;