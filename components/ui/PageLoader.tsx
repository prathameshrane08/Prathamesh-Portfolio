"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep the loader visible briefly on the first page load
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1300);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black text-white"
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="text-5xl font-medium tracking-[-0.07em] md:text-7xl"
            >
              PR<span className="text-[#ff4d2e]">.</span>
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="mx-auto mt-7 h-px w-28 origin-left bg-white/50"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.35,
              }}
              className="mt-5 text-xs uppercase tracking-[0.25em] text-white/50"
            >
              Portfolio 2026
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}