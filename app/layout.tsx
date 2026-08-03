// =============================================================
// app/layout.tsx
//
// PURPOSE
// -------
// This is the Root Layout.
//
// Every page in the application is rendered inside this file.
//
// Responsibilities:
//
// ✓ Global Metadata (SEO)
// ✓ Open Graph
// ✓ Twitter Cards
// ✓ Global CSS
// ✓ Smooth Scrolling
// ✓ Custom Cursor
// ✓ Loading Effects
// ✓ Font & Theme
//
// Documentation:
// https://nextjs.org/docs/app/api-reference/file-conventions/layout
// =============================================================

import type { Metadata } from "next";

import AppEffects from "@/components/AppEffects";
import SmoothScroll from "@/components/SmoothScroll";

import "./globals.css";

// =============================================================
// WEBSITE URL
//
// Replace this after deployment if your final URL changes.
//
// Example:
//
// https://prathameshrane.com
//
// or
//
// https://prathamesh-portfolio.vercel.app
// =============================================================
const WEBSITE_URL =
  "https://prathamesh-portfolio-ruddy.vercel.app";;

// =============================================================
// GLOBAL WEBSITE METADATA
//
// Search engines, LinkedIn, WhatsApp, Twitter,
// Discord and many others use this information.
//
// This metadata automatically applies to
// every page unless overridden.
// =============================================================
export const metadata: Metadata = {
  // -----------------------------------------------------------
  // Base URL
  //
  // Allows relative URLs like:
  //
  // "/opengraph-image.png"
  //
  // to automatically become:
  //
  // https://yourwebsite.com/opengraph-image.png
  // -----------------------------------------------------------
  metadataBase: new URL(WEBSITE_URL),

  // -----------------------------------------------------------
  // Browser Title
  // -----------------------------------------------------------
  title: {
    default:
      "Prathamesh Rane | AI, Robotics & Software Engineering",

    template: "%s | Prathamesh Rane",
  },

  // -----------------------------------------------------------
  // Description
  // -----------------------------------------------------------
  description:
    "Portfolio of Prathamesh Rane, a Computational Modeling and Simulation master's student at TU Dresden working across Artificial Intelligence, Robotics, Machine Learning, Data Visualization and Software Engineering.",

  // -----------------------------------------------------------
  // Keywords
  //
  // These don't carry much ranking weight today,
  // but they're still useful metadata.
  // -----------------------------------------------------------
  keywords: [
    "Prathamesh Rane",
    "Portfolio",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Robotics",
    "Robot Learning",
    "Computer Vision",
    "Simulation",
    "Computational Modeling",
    "Software Engineering",
    "Data Visualization",
    "Data Storytelling",
    "Python",
    "C++",
    "TypeScript",
    "React",
    "Next.js",
    "TU Dresden",
    "Germany",
  ],

  // -----------------------------------------------------------
  // Author Information
  // -----------------------------------------------------------
  authors: [
    {
      name: "Prathamesh Rane",
      url: WEBSITE_URL,
    },
  ],

  creator: "Prathamesh Rane",

  publisher: "Prathamesh Rane",

  // -----------------------------------------------------------
  // Robots
  //
  // Tell search engines to index every page.
  // -----------------------------------------------------------
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // -----------------------------------------------------------
  // Open Graph
  //
  // Used by:
  //
  // ✓ LinkedIn
  // ✓ Facebook
  // ✓ Discord
  // ✓ Slack
  // ✓ WhatsApp
  // -----------------------------------------------------------
  openGraph: {
    title:
      "Prathamesh Rane | AI, Robotics & Software Engineering",

    description:
      "Portfolio showcasing Artificial Intelligence, Robotics, Machine Learning, Data Visualization and Software Engineering projects.",

    url: WEBSITE_URL,

    siteName: "Prathamesh Rane Portfolio",

    locale: "en_US",

    type: "website",
  },

  // -----------------------------------------------------------
  // Twitter (X)
  // -----------------------------------------------------------
  twitter: {
    card: "summary_large_image",

    title:
      "Prathamesh Rane | AI, Robotics & Software Engineering",

    description:
      "Portfolio showcasing Artificial Intelligence, Robotics, Machine Learning and Software Engineering.",

    images: ["/opengraph-image.png"],

    creator: "@YOUR_TWITTER_USERNAME",
  },

  // -----------------------------------------------------------
  // Icons
  //
  // Next.js automatically finds:
  //
  // app/icon.png
  //
  // but explicitly declaring them is recommended.
  // -----------------------------------------------------------
  icons: {
    icon: "/icon.png",

    shortcut: "/icon.png",

    apple: "/icon.png",
  },

  // -----------------------------------------------------------
  // Category
  // -----------------------------------------------------------
  category: "technology",
};

// =============================================================
// Root Layout
//
// Everything rendered by the application appears here.
//
// SmoothScroll wraps every page,
// giving the entire website smooth scrolling.
// =============================================================
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          bg-[#f1efe9]
          text-[#111111]
          antialiased
          overflow-x-hidden
        "
      >
        {/* Global cursor + loading effects */}
        <AppEffects />

        {/* Smooth scrolling */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}