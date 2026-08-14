"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

// ============================================================
// IMAGE LIGHTBOX
//
// PURPOSE
// -------
// Opens a project image fullscreen.
//
// Features:
//
// ✓ Fade + scale animation
// ✓ Close button
// ✓ Click outside to close
// ✓ Escape key to close
// ✓ Prevent background scrolling while open
// ============================================================

type ImageLightboxProps = {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
};

export default function ImageLightbox({
  isOpen,
  imageSrc,
  imageAlt,
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    // ========================================================
    // ESCAPE KEY
    // ========================================================
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // ========================================================
    // LOCK PAGE SCROLL
    //
    // Without this, the page behind the lightbox can still
    // move while the fullscreen image is open.
    // ========================================================
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}

          // Clicking the dark background closes the lightbox.
          onClick={onClose}

          role="dialog"
          aria-modal="true"
          aria-label="Expanded project image"

          className="
            fixed
            inset-0
            z-[15000]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
            backdrop-blur-sm
            md:p-10
          "
        >
          {/* ==================================================
              CLOSE BUTTON
          =================================================== */}
          <button
            type="button"
            onClick={(event) => {
              // Prevent overlay click from firing again.
              event.stopPropagation();

              onClose();
            }}
            aria-label="Close expanded image"
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              text-white
              transition-all
              duration-300
              hover:rotate-90
              hover:bg-white
              hover:text-black
              md:right-8
              md:top-8
            "
          >
            <X size={22} />
          </button>

          {/* ==================================================
              FULLSCREEN IMAGE
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}

            // Clicking the image itself should NOT close it.
            onClick={(event) => {
              event.stopPropagation();
            }}

            className="
              relative
              h-[80vh]
              w-full
              max-w-[1500px]
              overflow-hidden
              rounded-[24px]
              bg-black
            "
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </motion.div>

          {/* Keyboard hint */}
          <p
            aria-hidden="true"
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-white/35
              md:bottom-7
            "
          >
            ESC to close
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}