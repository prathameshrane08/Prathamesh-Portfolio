"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

// ============================================================
// SMART CUSTOM CURSOR
//
// Normal page     → small dot + outline
// Project card    → VIEW
// External link   → OPEN
// Gallery image   → EXPAND
//
// Desktop/fine-pointer devices only.
// ============================================================

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const [cursorLabel, setCursorLabel] =
    useState<string | null>(null);

  // ----------------------------------------------------------
  // Mouse position
  //
  // We subtract half the normal cursor size here so we don't
  // rely on Tailwind translate transforms.
  // ----------------------------------------------------------

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 650,
    damping: 38,
    mass: 0.15,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 650,
    damping: 38,
    mass: 0.15,
  });

  useEffect(() => {
    // --------------------------------------------------------
    // Detect whether this device actually has a mouse/trackpad.
    //
    // This is better than using Tailwind's lg breakpoint
    // because screen width does NOT tell us input type.
    // --------------------------------------------------------

    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const updatePointerType = () => {
      setIsFinePointer(pointerQuery.matches);
    };

    updatePointerType();

    pointerQuery.addEventListener(
      "change",
      updatePointerType,
    );

    return () => {
      pointerQuery.removeEventListener(
        "change",
        updatePointerType,
      );
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer) {
      return;
    }

    // --------------------------------------------------------
    // Cursor movement
    // --------------------------------------------------------

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setIsVisible(true);

      // ----------------------------------------------
      // Detect custom cursor targets directly from
      // whatever is currently underneath the pointer.
      // ----------------------------------------------

      const target = event.target;

      if (!(target instanceof Element)) {
        setCursorLabel(null);
        return;
      }

      const customCursorElement =
        target.closest<HTMLElement>(
          "[data-cursor]",
        );

      if (customCursorElement) {
        setCursorLabel(
          customCursorElement.dataset.cursor ??
            null,
        );

        return;
      }

      // ----------------------------------------------
      // Normal interactive elements
      // get an enlarged cursor but no text.
      // ----------------------------------------------

      const interactiveElement =
        target.closest(
          "a, button, input, textarea, select, [data-cursor-hover]",
        );

      if (interactiveElement) {
        setCursorLabel("");
      } else {
        setCursorLabel(null);
      }
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      },
    );

    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave,
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );
    };
  }, [
    isFinePointer,
    mouseX,
    mouseY,
  ]);

  // Don't render a custom cursor at all on touch devices.
  if (!isFinePointer) {
    return null;
  }

  const isInteractive =
    cursorLabel !== null;

  const hasLabel =
    Boolean(
      cursorLabel &&
        cursorLabel.length > 0,
    );

  // Cursor dimensions
  const cursorSize = hasLabel ? 88 : 42;
  const cursorOffset =
    cursorSize / 2;

  return (
    <>
      {/* =====================================================
          CENTER DOT
      ====================================================== */}

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          marginLeft: -4,
          marginTop: -4,
        }}
        animate={{
          opacity:
            isVisible && !isInteractive
              ? 1
              : 0,

          scale:
            isInteractive ? 0 : 1,
        }}
        transition={{
          duration: 0.18,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[20000]
          h-2
          w-2
          rounded-full
          bg-black
        "
      />

      {/* =====================================================
          OUTER CURSOR
      ====================================================== */}

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,

          // Instead of Tailwind -translate, center it
          // explicitly using margins.
          marginLeft: -cursorOffset,
          marginTop: -cursorOffset,
        }}
        animate={{
          opacity:
            isVisible ? 1 : 0,

          width:
            hasLabel ? 88 : 42,

          height:
            hasLabel ? 88 : 42,

          scale:
            isInteractive &&
            !hasLabel
              ? 1.25
              : 1,

          backgroundColor: hasLabel
            ? "rgba(17,17,17,0.96)"
            : isInteractive
              ? "rgba(17,17,17,0.10)"
              : "rgba(17,17,17,0)",

          borderColor: hasLabel
            ? "rgba(17,17,17,0)"
            : "rgba(17,17,17,0.45)",
        }}
        transition={{
          duration: 0.22,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[19999]
          flex
          items-center
          justify-center
          rounded-full
          border
        "
      >
        <AnimatePresence mode="wait">
          {hasLabel && (
            <motion.span
              key={cursorLabel}
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
              }}
              transition={{
                duration: 0.18,
              }}
              className="
                select-none
                text-[10px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              {cursorLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}