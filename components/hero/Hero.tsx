"use client";

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import HeroTitle from "@/components/hero/HeroTitle";

export default function Hero() {
  // Scroll smoothly to the next page section
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");

    projectsSection?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen bg-[#f5f3ee] pb-10 pt-32">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1800px] flex-col justify-between px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Reusable title component */}
        <HeroTitle
          line1="Computational"
          line2="intelligence &"
          line3="digital experiences."
        />

        {/* Hero bottom content */}
        <div className="mt-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Introduction text */}
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
            <p className="text-lg leading-relaxed text-neutral-700">
              I design and build intelligent digital products that combine AI,
              modern web technologies, and human-centered design to create
              meaningful user experiences.
            </p>
          </motion.div>

          {/* Button that scrolls to the projects section */}
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
            <button
              type="button"
              onClick={scrollToProjects}
              aria-label="Scroll to projects"
              className="group flex h-28 w-28 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-105"
            >
              <ArrowDownRight
                size={34}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}