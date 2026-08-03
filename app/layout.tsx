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
// ✓ Loading Screen
// ✓ Scroll Progress Bar
// ✓ Page Transition Provider
// ✓ Transition Overlay
// ✓ Page Fade Animation
//
// Documentation:
// https://nextjs.org/docs/app/api-reference/file-conventions/layout
// =============================================================

import type { Metadata } from "next";

import "./globals.css";

import AppEffects from "@/components/AppEffects";
import SmoothScroll from "@/components/SmoothScroll";

import PageTransition from "@/components/transitions/PageTransition";
import TransitionOverlay from "@/components/transitions/TransitionOverlay";
import { TransitionProvider } from "@/components/transitions/TransitionContext";

// =============================================================
// WEBSITE URL
//
// IMPORTANT
// ----------
// Update this if you connect a custom domain.
//
// Example:
//
// https://prathameshrane.com
//
// =============================================================
const WEBSITE_URL =
  "https://prathamesh-portfolio-ruddy.vercel.app";

// =============================================================
// GLOBAL METADATA
//
// Search engines, LinkedIn, WhatsApp,
// Discord, Slack and Twitter use this.
//
// This metadata automatically applies
// to every page.
// =============================================================
export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),

  title: {
    default:
      "Prathamesh Rane | AI, Robotics & Software Engineering",

    template: "%s | Prathamesh Rane",
  },

  description:
    "Portfolio of Prathamesh Rane, a Computational Modeling and Simulation master's student at TU Dresden working across Artificial Intelligence, Robotics, Machine Learning, Data Visualization and Software Engineering.",

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

  authors: [
    {
      name: "Prathamesh Rane",
      url: WEBSITE_URL,
    },
  ],

  creator: "Prathamesh Rane",

  publisher: "Prathamesh Rane",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

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

  twitter: {
    card: "summary_large_image",

    title:
      "Prathamesh Rane | AI, Robotics & Software Engineering",

    description:
      "Portfolio showcasing Artificial Intelligence, Robotics, Machine Learning and Software Engineering.",

    creator: "Prathamesh Rane",
  },

  icons: {
    icon: "/icon.png",

    shortcut: "/icon.png",

    apple: "/icon.png",
  },

  category: "technology",
};

// =============================================================
// ROOT LAYOUT
//
// Everything inside the application is rendered here.
//
// Order:
//
// TransitionProvider
//      ↓
//
// AppEffects
//      ↓
//
// TransitionOverlay
//      ↓
//
// SmoothScroll
//      ↓
//
// PageTransition
//      ↓
//
// Current Page
// =============================================================
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className="
          bg-[#f1efe9]
          text-[#111111]
          antialiased
          overflow-x-hidden
        "
      >
        {/* ===================================================
            Global Transition Manager
        ==================================================== */}
        <TransitionProvider>

          {/* Loader + Cursor + Scroll Progress */}
          <AppEffects />

          {/* Black transition overlay */}
          <TransitionOverlay />

          {/* Smooth scrolling */}
          <SmoothScroll>

            {/* Fade animation for every page */}
            <PageTransition>

              {children}

            </PageTransition>

          </SmoothScroll>

        </TransitionProvider>
      </body>
    </html>
  );
}