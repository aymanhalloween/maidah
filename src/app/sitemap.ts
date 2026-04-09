import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://maidah.org";

  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), priority: 0.7 },
    {
      url: `${base}/blog/introducing-maidah`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${base}/blog/the-maidah-memo`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
