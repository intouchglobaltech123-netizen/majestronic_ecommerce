/** @type {import("next").NextConfig} */
const year = "public, max-age=31536000, immutable";
const month = "public, max-age=2592000, stale-while-revalidate=86400";
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      { source: "/store.js", headers: [{ key: "Cache-Control", value: year }] },
      { source: "/desc.json", headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }] },
      { source: "/po/:path*", headers: [{ key: "Cache-Control", value: month }] },
      { source: "/comp/:path*", headers: [{ key: "Cache-Control", value: month }] },
      { source: "/p/:path*", headers: [{ key: "Cache-Control", value: month }] },
      { source: "/hd/:path*", headers: [{ key: "Cache-Control", value: month }] },
      { source: "/pi/:path*", headers: [{ key: "Cache-Control", value: month }] },
    ];
  },
};
export default nextConfig;
