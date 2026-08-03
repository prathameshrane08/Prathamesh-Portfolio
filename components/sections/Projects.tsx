"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import TransitionLink from "@/components/transitions/TransitionLink";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-[calc(100%-32px)] max-w-[1600px] pb-28 md:w-[calc(100%-64px)] md:pb-44"
    >
      {/* Keeps old #work links functional */}
      <div
        id="work"
        className="scroll-mt-24"
      />

      {/* Section heading */}
      <div className="mb-16 flex items-end justify-between">
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
            className="mb-5 text-xs uppercase tracking-[0.22em] text-black/50 md:text-sm"
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
            className="text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.9] tracking-[-0.07em]"
          >
            Featured projects
          </motion.h2>
        </div>

        <span className="hidden text-sm text-black/40 md:block">
          2024 — Present
        </span>
      </div>

      {/* Project cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* This link now starts the black page transition */}
            <TransitionLink
              href={`/work/${project.slug}`}
              className={`group relative block min-h-[620px] overflow-hidden rounded-[32px] ${project.background} md:min-h-[720px]`}
            >
              {/* Project preview image */}
              {project.cardImage && (
                <div className="absolute inset-x-4 top-4 h-[48%] overflow-hidden rounded-[24px] bg-black/5 md:inset-x-5 md:top-5">
                  <Image
                    src={project.cardImage}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                </div>
              )}

              {/* Fallback when no image exists */}
              {!project.cardImage && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="absolute right-2 top-16 text-[13rem] font-medium leading-none tracking-[-0.1em] text-black/[0.045] transition-transform duration-700 group-hover:scale-110 md:text-[17rem]">
                    {project.number}
                  </span>
                </>
              )}

              {/* Card top */}
              <div className="absolute inset-x-6 top-6 z-20 flex items-start justify-between md:inset-x-8 md:top-8">
                <span
                  className={`text-sm ${
                    project.cardImage
                      ? "rounded-full bg-white/90 px-4 py-2 backdrop-blur-md"
                      : ""
                  }`}
                >
                  {project.number}
                </span>

                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black/25 bg-white/80 backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              {/* Card content */}
              <div className="absolute inset-x-7 bottom-7 z-20 md:inset-x-9 md:bottom-9">
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-black/55 md:text-sm">
                  {project.category}
                </p>

                <h3 className="max-w-2xl text-4xl font-medium leading-[0.92] tracking-[-0.06em] transition-transform duration-500 group-hover:translate-x-1 md:text-6xl">
                  {project.title}
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
                  {project.description}
                </p>

                <div className="mt-9 flex items-center justify-between border-t border-black/20 pt-5">
                  <span className="flex items-center gap-2 text-sm">
                    View case study

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>

                  <span className="text-sm text-black/45">
                    {project.year}
                  </span>
                </div>
              </div>
            </TransitionLink>
          </motion.article>
        ))}
      </div>
    </section>
  );
}