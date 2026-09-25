import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectPages = projects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ];
}
