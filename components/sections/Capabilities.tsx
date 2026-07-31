"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Research",
    content:
      "Building intelligent systems through robotics, explainable AI, semantic networks and data storytelling.",
  },
  {
    number: "02",
    title: "Engineering",
    content:
      "Developing scalable software using Python, C++, TypeScript, React, Next.js, PostgreSQL and cloud technologies.",
  },
  {
    number: "03",
    title: "Design",
    content:
      "Designing modern user experiences that transform complex technical systems into intuitive digital products.",
  },
];

export default function Capabilities() {
  return (
    <section className="border-y border-black/20 bg-[#f1efe9]">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] md:w-[calc(100%-64px)]">

        {/* Heading */}
        <div className="py-20">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs uppercase tracking-[0.22em] text-black/50"
          >
            Capabilities
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.07em]"
          >
            From research to production-ready software.
          </motion.h2>
        </div>

        {/* Capability cards */}
        <div className="grid border-t border-black/20 md:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden border-b border-black/20 py-12 md:min-h-[380px] md:border-b-0 md:border-r md:p-10 md:last:border-r-0"
            >
              {/* Hover background */}
              <div className="absolute inset-0 translate-y-full bg-black transition-transform duration-500 ease-out group-hover:translate-y-0" />

              <div className="relative z-10 flex h-full flex-col justify-between transition-colors duration-500 group-hover:text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/45 transition-colors duration-500 group-hover:text-white/45">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={22}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <div className="mt-24">
                  <h3 className="text-4xl font-medium tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-black/55 transition-colors duration-500 group-hover:text-white/60">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}