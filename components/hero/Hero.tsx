"use client";

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

import HeroTitle from "@/components/hero/HeroTitle";
import RotatingRole from "@/components/hero/RotatingRole";
import MagneticButton from "@/components/ui/MagneticButton";

// ============================================================
// HERO SECTION
//
// PURPOSE
// -------
// This is the first major section visitors see.
//
// It contains:
//
// ✓ Animated main headline
// ✓ Rotating technical role
// ✓ Introductory paragraph
// ✓ Magnetic scroll button
// ✓ Subtle background decoration
//
// The goal is to make the first screen feel dynamic
// without adding too much visual noise.
// ============================================================

export default function Hero() {
  // ==========================================================
  // SCROLL TO PROJECTS
  //
  // Finds the section with id="projects"
  // and scrolls to it smoothly.
  // ==========================================================
  const scrollToProjects = () => {
    const projectsSection =
      document.querySelector("#projects");

    projectsSection?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="top"
      className="
        relative
        flex
        min-h-[calc(100vh-90px)]
        items-center
        overflow-hidden
        pb-10
        pt-12
        md:pb-16
        md:pt-20
      "
    >
      {/* =====================================================
          MAIN CONTENT CONTAINER
      ====================================================== */}
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] md:w-[calc(100%-64px)]">
        {/* ===================================================
            SMALL INTRO LABEL
        ==================================================== */}
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
            duration: 0.6,
            delay: 0.05,
          }}
          className="
            mb-8
            flex
            items-center
            gap-3
            text-xs
            uppercase
            tracking-[0.22em]
            text-black/50
            md:text-sm
          "
        >
          {/* Small animated availability dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff4d2e] opacity-50" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff4d2e]" />
          </span>

          AI · Robotics · Software Engineering
        </motion.div>

        {/* ===================================================
            MAIN HERO TITLE

            HeroTitle already animates each line separately.
        ==================================================== */}
        <HeroTitle
          line1="Building intelligent"
          line2="systems people"
          line3="can actually use."
        />

        {/* ===================================================
            ROTATING ROLE

            Only the specialization changes.

            Example:

            Exploring Artificial Intelligence
            Exploring Machine Learning
            Exploring Robotics
        ==================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.48,
          }}
          className="
            mt-8
            flex
            flex-wrap
            items-baseline
            gap-x-2
            text-xl
            font-medium
            tracking-[-0.035em]
            md:text-3xl
          "
        >
          <span className="text-black/35">
            Exploring
          </span>

          <RotatingRole />
        </motion.div>

        {/* ===================================================
            HERO BOTTOM CONTENT
        ==================================================== */}
        <div className="mt-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* =================================================
              INTRODUCTION
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="max-w-xl"
          >
            <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">
              I design and build intelligent digital systems
              combining artificial intelligence, robotics,
              simulation, data and modern software engineering
              to turn technically complex ideas into useful
              experiences.
            </p>
          </motion.div>

          {/* =================================================
              MAGNETIC SCROLL BUTTON

              MagneticButton controls only the movement.

              The actual button remains responsible
              for the click behaviour.
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="flex items-center justify-start lg:justify-end"
          >
            <MagneticButton>
              <button
                type="button"
                onClick={scrollToProjects}
                aria-label="Scroll to projects"
                className="
                  group
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  !text-white
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:bg-[#ff4d2e]
                  md:h-32
                  md:w-32
                "
              >
                <ArrowDownRight
                  size={34}
                  className="
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:translate-y-1
                  "
                />
              </button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BACKGROUND DECORATION

          These circles are purely decorative.

          pointer-events-none means they cannot interfere
          with buttons or mouse interactions.
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[15vw]
          top-[10%]
          -z-10
          h-[45vw]
          w-[45vw]
          rounded-full
          border
          border-black/[0.06]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[5vw]
          top-[20%]
          -z-10
          h-[25vw]
          w-[25vw]
          rounded-full
          border
          border-black/[0.05]
        "
      />
    </section>
  );
}