// =====================================================
// app/sitemap.ts
//
// PURPOSE
// --------
// Next.js automatically serves this file at:
//
// https://yourwebsite.com/sitemap.xml
//
// Search engines like Google, Bing and DuckDuckGo
// use a sitemap to discover every page on your website.
//
// Without a sitemap:
// Google must "guess" your pages.
//
// With a sitemap:
// Google immediately knows all your pages.
//
// Learn more:
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
// =====================================================

import type { MetadataRoute } from "next";

// Import every project from our data file.
// This allows the sitemap to update automatically
// whenever a new project is added.
import { projects } from "@/data/projects";

// =====================================================
// Next.js automatically calls this function.
//
// It MUST return an array of page objects.
// =====================================================
export default function sitemap(): MetadataRoute.Sitemap {

  // ---------------------------------------------------
  const baseUrl =
    "https://prathamesh-portfolio-ruddy.vercel.app";

  // ===================================================
  // Create sitemap entries for every project page.
  //
  // If you add Project #5 later,
  // it automatically appears here.
  // ===================================================
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,

    // Tell Google when this page changed.
    lastModified: new Date(),

    // The content doesn't change daily,
    // so monthly is appropriate.
    changeFrequency: "monthly" as const,

    // Home page = 1
    // Project pages = 0.8
    priority: 0.8,
  }));

  // ===================================================
  // Return every page on the website.
  // ===================================================
  return [
    {
      // Homepage
      url: baseUrl,

      lastModified: new Date(),

      changeFrequency: "monthly",

      priority: 1,
    },

    // Spread all project pages here.
    ...projectPages,
  ];
}