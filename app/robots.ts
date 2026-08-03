// =====================================================
// app/robots.ts
//
// PURPOSE
// --------
// This file tells search engines:
//
// ✔ Which pages they may crawl.
// ✔ Where the sitemap is located.
//
// When someone visits:
//
// https://yourwebsite.com/robots.txt
//
// Next.js automatically generates the file.
//
// Learn more:
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
// =====================================================

import type { MetadataRoute } from "next";

// =====================================================
// Next.js automatically calls this function.
//
// It returns instructions for search engines.
// =====================================================
export default function robots(): MetadataRoute.Robots {

  
  // ---------------------------------------------------
  const baseUrl =
    "https://prathamesh-portfolio-ruddy.vercel.app";

  return {

    // ----------------------------------------------
    // Tell every search engine ("*")
    // that it may crawl every page.
    // ----------------------------------------------
    rules: {
      userAgent: "*",
      allow: "/",
    },

    // ----------------------------------------------
    // Tell search engines where the sitemap lives.
    // ----------------------------------------------
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}