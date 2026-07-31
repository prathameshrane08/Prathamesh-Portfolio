import type { Metadata } from "next";

import AppEffects from "@/components/AppEffects";
import SmoothScroll from "@/components/SmoothScroll";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Prathamesh Rane | AI, Robotics & Software Engineering",
    template: "%s | Prathamesh Rane",
  },

  description:
    "Portfolio of Prathamesh Rane, a Computational Modeling and Simulation master's student working across artificial intelligence, robotics, data visualization and software engineering.",

  keywords: [
    "Prathamesh Rane",
    "Artificial Intelligence",
    "Machine Learning",
    "Robotics",
    "Software Engineering",
    "Data Visualization",
    "Computational Modeling",
    "Simulation",
    "TU Dresden",
    "Portfolio",
  ],

  authors: [
    {
      name: "Prathamesh Rane",
    },
  ],

  creator: "Prathamesh Rane",

  openGraph: {
    title: "Prathamesh Rane | AI, Robotics & Software Engineering",
    description:
      "Portfolio showcasing work in artificial intelligence, robotics, data visualization and software engineering.",
    type: "website",
    locale: "en_US",
    siteName: "Prathamesh Rane Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prathamesh Rane | AI, Robotics & Software Engineering",
    description:
      "Portfolio showcasing work in artificial intelligence, robotics, data visualization and software engineering.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className="bg-[#f1efe9] text-[#111111] antialiased">
        <AppEffects />

        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}