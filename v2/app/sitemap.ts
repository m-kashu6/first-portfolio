import type { MetadataRoute } from "next";

const SITE_URL = "https://maki-kashu-pf.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/legacy/koyuki/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
