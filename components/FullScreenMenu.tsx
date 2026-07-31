"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

type FullScreenMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuLinks = [
  { number: "01", label: "Home", href: "/#top" },
  { number: "02", label: "Projects", href: "/#projects" },
  { number: "03", label: "About", href: "/#about" },
  { number: "04", label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "Email",
    href: "mailto:prathamesh.r2018@gmail.com",
  },
];

export default function FullScreenMenu({
  isOpen,
  onClose,
}: FullScreenMenuProps) {
  const [time, setTime] = useState("");

  // Update Dresden time
  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Berlin",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());

      setTime(currentTime);
    };

    updateTime();

    const interval = window.setInterval(updateTime, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  // Prevent background scrolling while menu is open
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu with Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[1000] overflow-y-auto bg-[#ff4d2e] text-black"
        >
          <div className="mx-auto flex min-h-screen w-[calc(100%-32px)] max-w-[1600px] flex-col md:w-[calc(100%-64px)]">
            {/* Menu header */}
            <div className="flex items-center justify-between py-6">
              <Link
                href="/"
                onClick={onClose}
                className="text-xl font-semibold tracking-[-0.06em]"
                aria-label="Prathamesh Rane homepage"
              >
                PR<span className="text-white">.</span>
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/40 transition-colors duration-300 hover:bg-black hover:text-white"
                aria-label="Close navigation menu"
              >
                <X
                  size={22}
                  className="transition-transform duration-300 group-hover:rotate-90"
                />
              </button>
            </div>

            {/* Menu links */}
            <div className="flex flex-1 flex-col justify-center py-14 md:py-16">
              <nav aria-label="Full-screen navigation">
                {menuLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{
                      opacity: 0,
                      y: 70,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: 0.2 + index * 0.09,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group grid grid-cols-[40px_1fr_auto] items-center gap-3 border-t border-black/30 py-4 last:border-b md:grid-cols-[70px_1fr_auto] md:gap-6 md:py-5"
                    >
                      <span className="self-start pt-2 text-xs text-black/50 md:text-sm">
                        {link.number}
                      </span>

                      <span className="text-[clamp(3.2rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.075em] transition-transform duration-500 group-hover:translate-x-3 md:group-hover:translate-x-5">
                        {link.label}
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/30 transition-all duration-300 group-hover:bg-black group-hover:text-white md:h-14 md:w-14">
                        <ArrowUpRight
                          size={24}
                          strokeWidth={1.4}
                          className="transition-transform duration-300 group-hover:rotate-45 md:h-8 md:w-8"
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Menu footer */}
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
                delay: 0.65,
                duration: 0.5,
              }}
              className="grid gap-8 border-t border-black/30 py-6 text-sm md:grid-cols-3 md:items-end"
            >
              <div>
                <p className="mb-1 text-black/50">Location</p>
                <p>Dresden, Germany</p>
              </div>

              <div>
                <p className="mb-1 text-black/50">Local time</p>
                <p>{time || "--:--:--"} CET</p>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-1"
                  >
                    <span className="transition-opacity group-hover:opacity-50">
                      {link.label}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}