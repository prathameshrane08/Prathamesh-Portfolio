"use client";

import { motion } from "motion/react";

const statistics = [
  {
    value: "5+",
    label: "Technical projects",
  },
  {
    value: "4",
    label: "Core disciplines",
  },
  {
    value: "3+",
    label: "Research areas",
  },
  {
    value: "2026",
    label: "Current portfolio",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-24 text-white md:py-40"
    >
      {/* Decorative background circle */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-white/10 md:h-[800px] md:w-[800px]" />

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-[1600px] md:w-[calc(100%-64px)]">
        <div className="grid gap-16 md:grid-cols-[0.7fr_2fr]">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.22em] text-white/60 md:text-sm"
          >
            About me
          </motion.p>

          <div>
            {/* Main statement */}
            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-6xl text-[clamp(3rem,6.5vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em]"
            >
              I transform technically complex ideas into systems people can
              understand, explore and use.
            </motion.h2>

            {/* Personal introduction */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="mt-12 max-w-4xl text-xl leading-snug text-white/60 md:text-3xl"
            >
              I&apos;m Prathamesh Rane, a Computational Modeling and Simulation
              master&apos;s student at TU Dresden. My work combines artificial
              intelligence, robotics, data visualization and modern software
              engineering.
            </motion.p>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-8 max-w-3xl text-base leading-relaxed text-white/45 md:text-lg"
            >
              I enjoy working on projects where research, engineering and
              design meet—turning experiments and technical concepts into
              useful, understandable products.
            </motion.p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-24 grid border-y border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((statistic, index) => (
            <motion.article
              key={statistic.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="border-b border-white/20 py-10 sm:px-8 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-7xl">
                {statistic.value}
              </p>

              <p className="mt-4 text-sm text-white/50">
                {statistic.label}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}