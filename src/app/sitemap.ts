import type { MetadataRoute } from "next";
import { experiences } from "@/data/experiences";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/why-sairr", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const experiencePages = experiences
    .filter((e) => e.hasDetailPage)
    .map((e) => ({
      url: `${siteConfig.url}/destinations/${e.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  return [
    ...staticPages.map((page) => ({
      url: `${siteConfig.url}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...experiencePages,
  ];
}
