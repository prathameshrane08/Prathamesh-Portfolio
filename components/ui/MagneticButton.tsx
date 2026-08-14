"use client";

import type {
  MouseEvent,
  ReactNode,
} from "react";

import { useRef } from "react";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

// ============================================================
// MAGNETIC BUTTON
//
// Moves subtly toward the pointer.
//
// MotionValues are used instead of React state so moving
// the mouse doesn't re-render the component continuously.
// ============================================================

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export default function MagneticButton({
  children,
  className = "",
  strength = 0.18,
}: MagneticButtonProps) {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth return/movement.
  const springX = useSpring(x, {
    stiffness: 300,
    damping: 22,
    mass: 0.4,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 22,
    mass: 0.4,
  });

  function handleMouseMove(
    event: MouseEvent<HTMLDivElement>,
  ) {
    const element =
      containerRef.current;

    if (!element) {
      return;
    }

    const rectangle =
      element.getBoundingClientRect();

    const centerX =
      rectangle.left +
      rectangle.width / 2;

    const centerY =
      rectangle.top +
      rectangle.height / 2;

    const distanceX =
      event.clientX - centerX;

    const distanceY =
      event.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  );
}