"use client";

import { motion, useScroll, useSpring } from "motion/react";

// =====================================================
// SCROLL PROGRESS BAR
//
// PURPOSE
// -------
// This component shows how far the visitor has scrolled
// through the current page.
//
// It stays fixed at the top of the browser and grows
// from left to right while scrolling.
// =====================================================

export default function ScrollProgress() {
  // scrollYProgress is a value between:
  //
  // 0 = top of the page
  // 1 = bottom of the page
  const { scrollYProgress } = useScroll();

  // Smooth the progress movement so it does not feel
  // abrupt or shaky while scrolling.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      // scaleX changes from 0 to 1 based on scroll progress.
      style={{
        scaleX: smoothProgress,
      }}
      // The bar should grow from the left side.
      className="
        fixed
        left-0
        top-0
        z-[9999]
        h-[3px]
        w-full
        origin-left
        bg-[#ff4d2e]
      "
      aria-hidden="true"
    />
  );
}