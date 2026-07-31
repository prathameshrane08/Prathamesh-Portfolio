"use client";

import { motion } from "motion/react";

// Props accepted by the reusable animation component
type AnimatedTextProps = {
  children: React.ReactNode; // Text or JSX displayed inside
  delay?: number; // Optional animation delay
  className?: string; // Optional Tailwind classes
};

export default function AnimatedText({
  children,
  delay = 0, // Default delay when none is provided
  className = "",
}: AnimatedTextProps) {
  return (
    <motion.span
      // Starting state
      initial={{
        opacity: 0,
        y: 80,
      }}
      // Final visible state
      animate={{
        opacity: 1,
        y: 0,
      }}
      // Animation settings
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      // block puts every title part on a separate line
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  );
}