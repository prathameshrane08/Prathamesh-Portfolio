import type { Metadata } from "next";

import "./globals.css";

import AppEffects from "@/components/AppEffects";
import SmoothScroll from "@/components/SmoothScroll";

import TransitionOverlay from "@/components/transitions/TransitionOverlay";
import { TransitionProvider } from "@/components/transitions/TransitionContext";
import { siteConfig } from "@/data/site";

// =============================================================
// GLOBAL METADATA
//
// Search engines, LinkedIn, WhatsApp,
// Discord, Slack and Twitter/X use this.
//
// This metadata automatically applies
// to every page.
// =============================================================

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

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
      url: siteConfig.url,
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

  // ===========================================================
  // OPEN GRAPH
  //
  // Used by:
  //
  // LinkedIn
  // WhatsApp
  // Facebook
  // Discord
  // Slack
  // Telegram
  // ===========================================================

  openGraph: {
    title:
      "Prathamesh Rane | AI, Robotics & Software Engineering",

    description:
      "Portfolio showcasing Artificial Intelligence, Robotics, Machine Learning, Data Visualization and Software Engineering projects.",

    url: siteConfig.url,

    siteName: "Prathamesh Rane Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/social-preview.png",

        width: 1712,

        height: 896,

        alt:
          "Prathamesh Rane — AI, Robotics and Software Engineering Portfolio",
      },
    ],
  },

  // ===========================================================
  // TWITTER / X CARD
  // ===========================================================

  twitter: {
    card: "summary_large_image",

    title:
      "Prathamesh Rane | AI, Robotics & Software Engineering",

    description:
      "Portfolio showcasing Artificial Intelligence, Robotics, Machine Learning, Data Visualization and Software Engineering projects.",

    images: [
      "/social-preview.png",
    ],
  },

  category: "technology",
};

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
      <body>
        <TransitionProvider>
          <AppEffects />

          <TransitionOverlay />

          <SmoothScroll>{children}</SmoothScroll>
        </TransitionProvider>
      </body>
    </html>
  );
}