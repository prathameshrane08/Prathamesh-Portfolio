"use client";

import { AnimatePresence, motion } from "motion/react";

import { useTransition } from "@/components/transitions/TransitionContext";

// ============================================================
// TransitionOverlay.tsx
//
// PURPOSE
// -------
// Displays the black full-screen layer used during navigation.
//
// When `active` becomes true:
// 1. The overlay slides upward into the screen.
// 2. It briefly covers the current page.
// 3. Navigation happens.
// 4. The overlay leaves on the new page.
// ============================================================

export default function TransitionOverlay() {
  // Read the global transition state.
  const { active } = useTransition();

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          // Start below the viewport.
          initial={{
            y: "100%",
          }}
          // Cover the screen.
          animate={{
            y: 0,
          }}
          // Leave through the top.
          exit={{
            y: "-100%",
          }}
          transition={{
            duration: 0.65,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="pointer-events-none fixed inset-0 z-[12000] flex items-center justify-center bg-[#111111] text-white"
          aria-hidden="true"
        >
          {/* Branding shown during the transition */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
              delay: 0.15,
            }}
            className="text-center"
          >
            <p className="text-5xl font-medium tracking-[-0.07em] md:text-7xl">
              PR<span className="text-[#ff4d2e]">.</span>
            </p>

            <p className="mt-5 text-xs uppercase tracking-[0.25em] text-white/45">
              Loading project
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}