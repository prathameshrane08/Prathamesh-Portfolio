"use client";

import { motion } from "motion/react";

type PageTransitionProps = {
  children: React.ReactNode;
};

// ============================================================
// PageTransition.tsx
//
// PURPOSE
// -------
// This component animates the new page content after navigation.
//
// The black overlay handles the transition between routes.
// This component handles how the incoming page appears.
//
// Flow:
//
// Route changes
//      ↓
// New page starts slightly lower and transparent
//      ↓
// New page fades and moves into place
// ============================================================

export default function PageTransition({
  children,
}: PageTransitionProps) {
  return (
    <motion.div
      // Starting state of the new page
      initial={{
        opacity: 0,
        y: 24,
      }}
      // Final visible state
      animate={{
        opacity: 1,
        y: 0,
      }}
      // Animation settings
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}