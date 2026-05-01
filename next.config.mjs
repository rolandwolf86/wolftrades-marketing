/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },
  async redirects() {
    return [
      // /pro retired 2026-05-01 — Pro is now an in-funnel upsell only.
      // Preserve link equity for any inbound bookmarks/backlinks by sending
      // them to the primary paid offer.
      {
        source: "/pro",
        destination: "/wolfpack",
        permanent: true,
      },
      {
        source: "/pro/:path*",
        destination: "/wolfpack",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
