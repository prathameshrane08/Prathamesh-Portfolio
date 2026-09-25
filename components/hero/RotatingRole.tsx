"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ============================================================
// ROTATING ROLE
//
// PURPOSE
// -------
// Cycles through your main technical areas.
//
// Only the role changes.
// The surrounding hero sentence stays stable.
//
// Example:
//
// Exploring Artificial Intelligence
// Exploring Machine Learning
// Exploring Robotics
// ============================================================

const roles = [
  "Artificial Intelligence",
  "Machine Learning",
  "Robotics",
  "Simulation",
  "Data Visualization",
  "Software Engineering",
];

export default function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Slow enough for visitors to read each role.
    const interval = window.setInterval(() => {
      setIndex((currentIndex) => {
        return (currentIndex + 1) % roles.length;
      });
    }, 3200);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="
        relative
        inline-grid
        h-[1.15em]
        min-w-[290px]
        overflow-hidden
        align-bottom
        sm:min-w-[340px]
        md:min-w-[430px]
      "
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          // New role begins below the visible area,
          // slightly blurred and transparent.
          initial={{
            y: "90%",
            opacity: 0,
            filter: "blur(8px)",
          }}
          // Moves into its normal position.
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          // Old role exits upward.
          exit={{
            y: "-90%",
            opacity: 0,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            col-start-1
            row-start-1
            whitespace-nowrap
            text-[#ff4d2e]
          "
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}