"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import TransitionLink from "@/components/transitions/TransitionLink";
import { projects } from "@/data/projects";

// ============================================================
// PROJECTS SECTION
//
// RESPONSIVE STRATEGY
// -------------------
//
// 390 / 430 / 768:
// → 1 column
//
// 1024 / 1280 / 1440+:
// → 2 columns
//
// Card height is content-driven.
// No fixed min-height.
// No bottom-positioned absolute content.
//
// This prevents:
// ✓ image/text overlap
// ✓ cramped titles
// ✓ huge blank areas
// ✓ inconsistent card heights
// ============================================================

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        mx-auto
        w-[calc(100%-32px)]
        max-w-[1600px]
        pb-24
        md:w-[calc(100%-64px)]
        md:pb-40
        lg:pb-44
      "
    >
      {/* =====================================================
          LEGACY ANCHOR

          Keeps older /#work links working.
      ====================================================== */}

      <div
        id="work"
        className="scroll-mt-24"
      />

      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <div
        className="
          mb-12
          flex
          items-end
          justify-between
          md:mb-16
        "
      >
        <div>
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mb-4
              text-xs
              uppercase
              tracking-[0.22em]
              text-black/50
              md:mb-5
              md:text-sm
            "
          >
            Selected work
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-[clamp(3.3rem,7vw,8rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.07em]
            "
          >
            Featured projects
          </motion.h2>
        </div>

        <span className="hidden text-sm text-black/40 md:block">
          2024 — Present
        </span>
      </div>

      {/* =====================================================
          PROJECT GRID

          Important:
          We intentionally wait until lg before using 2 columns.

          768px remains 1 column.
      ====================================================== */}

      <div
        className="
          grid
          gap-6
          lg:grid-cols-2
          lg:gap-7
          xl:gap-8
        "
      >
        {projects.map((project, index) => {
          // With an odd number of projects, the last card spans
          // both columns so the grid doesn't end with a gap.
          const isWide =
            projects.length % 2 === 1 &&
            index === projects.length - 1;

          return (
            <motion.article
              key={project.slug}
              className={isWide ? "lg:col-span-2" : undefined}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* =================================================
                  PROJECT CARD
              ================================================== */}

              <TransitionLink
                href={`/work/${project.slug}`}
                data-cursor="VIEW"
                className={`
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden

                  rounded-[28px]

                  ${project.background}

                  transition-all
                  duration-700
                  ease-[cubic-bezier(.22,1,.36,1)]

                  hover:-translate-y-2
                  hover:shadow-[0_30px_60px_rgba(0,0,0,0.16)]

                  md:rounded-[32px]
                `}
              >
                {/* =================================================
                    PROJECT IMAGE
                ================================================== */}

                {project.cardImage && (
                  <div
                    className={`
                      relative

                      mx-4
                      mt-4

                      aspect-[4/3]

                      overflow-hidden
                      rounded-[22px]
                      bg-black/5

                      sm:aspect-[16/10]

                      md:mx-5
                      md:mt-5
                      md:aspect-[16/9]
                      md:rounded-[24px]

                      ${isWide ? "lg:aspect-[21/9]" : "lg:aspect-[16/10] xl:aspect-[16/9]"}
                    `}
                  >
                    <Image
                      src={project.cardImage}
                      alt={`${project.title} preview`}
                      fill
                      sizes={
                        isWide
                          ? "100vw"
                          : "(max-width: 1023px) 100vw, 50vw"
                      }
                      className="
                        object-cover

                        transition-transform
                        duration-[1400ms]
                        ease-out

                        group-hover:scale-[1.05]
                      "
                    />

                    {/* Subtle image hover overlay */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-black/30
                        via-black/5
                        to-transparent

                        opacity-0

                        transition-opacity
                        duration-700

                        group-hover:opacity-100
                      "
                    />
                  </div>
                )}

                {/* =================================================
                    FALLBACK IMAGE AREA
                ================================================== */}

                {!project.cardImage && (
                  <div
                    className={`
                      relative

                      mx-4
                      mt-4

                      aspect-[4/3]

                      overflow-hidden
                      rounded-[22px]

                      bg-black/[0.04]

                      sm:aspect-[16/10]

                      md:mx-5
                      md:mt-5
                      md:aspect-[16/9]
                      md:rounded-[24px]

                      ${isWide ? "lg:aspect-[4/1]" : ""}
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        right-2
                        top-2

                        text-[9rem]
                        font-medium
                        leading-none
                        tracking-[-0.1em]

                        text-black/[0.05]

                        sm:text-[12rem]
                        md:text-[15rem]
                      "
                    >
                      {project.number}
                    </span>
                  </div>
                )}

                {/* =================================================
                    PROJECT NUMBER + ARROW
                ================================================== */}

                <div
                  className="
                    absolute

                    left-7
                    right-7
                    top-7

                    z-20

                    flex
                    items-start
                    justify-between

                    md:left-8
                    md:right-8
                    md:top-8
                  "
                >
                  {/* Project number */}
                  <span
                    className="
                      rounded-full

                      bg-white/90

                      px-4
                      py-2

                      text-sm

                      backdrop-blur-md

                      shadow-sm
                    "
                  >
                    {project.number}
                  </span>

                  {/* Arrow */}
                  <span
                    className="
                      flex

                      h-12
                      w-12

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-black/25

                      bg-white/90

                      backdrop-blur-md

                      transition-all
                      duration-500

                      group-hover:rotate-45
                      group-hover:scale-105
                      group-hover:bg-black
                      group-hover:text-white

                      md:h-14
                      md:w-14
                    "
                  >
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.7}
                    />
                  </span>
                </div>

                {/* =================================================
                    PROJECT CONTENT

                    Normal flow at every breakpoint.
                ================================================== */}

                <div
                  className="
                    relative
                    z-20

                    flex
                    flex-1
                    flex-col

                    px-6
                    pb-7
                    pt-8

                    sm:px-7
                    sm:pb-8

                    md:px-8
                    md:pb-9
                    md:pt-10

                    xl:px-9
                    xl:pb-10
                  "
                >
                  {/* Category */}
                  <p
                    className="
                      mb-4

                      max-w-full

                      text-[11px]
                      uppercase
                      leading-[1.6]
                      tracking-[0.18em]

                      text-black/55

                      transition-colors
                      duration-500

                      group-hover:text-black/75

                      sm:text-xs
                      md:text-sm
                    "
                  >
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      max-w-3xl

                      text-[clamp(2.35rem,10vw,3.8rem)]

                      font-medium

                      leading-[0.94]
                      tracking-[-0.06em]

                      transition-transform
                      duration-700

                      group-hover:-translate-y-1

                      md:text-[clamp(3rem,6vw,5.2rem)]

                      lg:text-[clamp(2.8rem,4vw,4.5rem)]
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mb-7
                      mt-5

                      max-w-3xl

                      text-base
                      leading-[1.65]

                      text-black/60

                      transition-colors
                      duration-500

                      group-hover:text-black/85

                      md:mb-9
                      md:mt-6
                      md:text-lg
                    "
                  >
                    {project.description}
                  </p>

                  {/* =================================================
                      CARD FOOTER
                  ================================================== */}

                  <div
                    className="
                      mt-auto

                      flex
                      items-center
                      justify-between

                      gap-5

                      border-t
                      border-black/20

                      pt-5
                    "
                  >
                    <span
                      className="
                        flex
                        items-center
                        gap-2

                        text-sm
                      "
                    >
                      View case study

                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform
                          duration-500

                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </span>

                    <span
                      className="
                        shrink-0
                        text-sm
                        text-black/45
                      "
                    >
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    SUBTLE BORDER
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    rounded-[28px]

                    ring-1
                    ring-inset
                    ring-black/0

                    transition-all
                    duration-700

                    group-hover:ring-black/10

                    md:rounded-[32px]
                  "
                />
              </TransitionLink>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}