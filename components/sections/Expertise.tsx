"use client";

import { motion } from "motion/react";
import {
  Bot,
  BrainCircuit,
  CodeXml,
  Database,
} from "lucide-react";

const expertise = [
  {
    title: "Artificial Intelligence",
    description:
      "Machine learning, explainable AI, language models and intelligent decision-making systems.",
    icon: BrainCircuit,
  },
  {
    title: "Robotics",
    description:
      "Robot learning, simulation environments, manipulation tasks and language-conditioned control.",
    icon: Bot,
  },
  {
    title: "Software Engineering",
    description:
      "Full-stack products built with Python, TypeScript, React, Next.js and scalable backend systems.",
    icon: CodeXml,
  },
  {
    title: "Data Systems",
    description:
      "Data engineering, interactive visualization, semantic networks and AI-powered storytelling.",
    icon: Database,
  },
];

export default function Expertise() {
  return (
    <section className="mx-auto w-[calc(100%-32px)] max-w-[1600px] py-28 md:w-[calc(100%-64px)] md:py-40">
      {/* Section heading */}
      <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs uppercase tracking-[0.22em] text-black/50 md:text-sm"
          >
            Core expertise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.9] tracking-[-0.07em]"
          >
            What I work on
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: 0.15,
          }}
          className="max-w-xl text-lg leading-relaxed text-black/55 md:justify-self-end md:text-xl"
        >
          A multidisciplinary approach combining intelligent systems,
          simulation, data and product development.
        </motion.p>
      </div>

      {/* Expertise cards */}
      <div className="grid border-t border-black/20 md:grid-cols-2">
        {expertise.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden border-b border-black/20 py-10 md:min-h-[340px] md:p-10 md:odd:border-r"
            >
              {/* Hover background */}
              <div className="absolute inset-0 translate-y-full bg-black transition-transform duration-500 ease-out group-hover:translate-y-0" />

              <div className="relative z-10 flex h-full flex-col justify-between transition-colors duration-500 group-hover:text-white">
                <div className="flex items-start justify-between">
                  <span className="text-sm text-black/40 transition-colors duration-500 group-hover:text-white/45">
                    0{index + 1}
                  </span>

                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black/20 transition-all duration-500 group-hover:rotate-6 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                    <Icon size={23} strokeWidth={1.6} />
                  </span>
                </div>

                <div className="mt-24">
                  <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-relaxed text-black/55 transition-colors duration-500 group-hover:text-white/55 md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}