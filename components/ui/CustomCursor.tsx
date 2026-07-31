"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Store the live mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth the cursor movement
  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.2,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.2,
  });

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    // Detect interactive elements
    const detectHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const interactiveElement = target.closest(
        "a, button, input, textarea, select, [data-cursor-hover]",
      );

      setIsHovering(Boolean(interactiveElement));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseover", detectHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseover", detectHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Small central cursor */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black lg:block"
      />

      {/* Large outer cursor */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering
            ? "rgba(17,17,17,0.12)"
            : "rgba(17,17,17,0)",
        }}
        transition={{
          duration: 0.2,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/50 lg:block"
      />
    </>
  );
}