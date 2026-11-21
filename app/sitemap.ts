import type { MetadataRoute } from "next";
import products from "../lib/products";

const SITE = "https://majestronic-ecommerce.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: "weekly", priority: 1 },
    ...products.map(([, , s], i) => ({ url: `${SITE}/product/${i}-${s}`, changeFrequency: "weekly" as const, priority: 0.7 })),
  ];
}
