"use client";

import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex min-h-[90vh] w-[calc(100%-32px)] max-w-[1600px] flex-col justify-between py-24 md:w-[calc(100%-64px)] md:py-32"
    >
      {/* Availability and location */}
      <div className="flex flex-col justify-between gap-6 md:flex-row">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-sm uppercase tracking-[0.18em]"
        >
          Available for research, internships and software engineering
          opportunities.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="text-sm text-black/45"
        >
          {siteConfig.location}
        </motion.p>
      </div>

      {/* Main contact heading */}
      <motion.div
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="py-28"
      >
        <h2 className="text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.84] tracking-[-0.075em]">
          Let&apos;s build
          <br />
          something meaningful.
        </h2>

        <div className="mt-14 flex flex-wrap gap-4">
          {/* Email button */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/85"
          >
            <Mail
              size={18}
              className="text-white"
            />

            <span className="text-white">
              Start a conversation
            </span>

            <ArrowUpRight
              size={17}
              className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* CV download button */}
          <a
            href={siteConfig.cv}
            download
            className="group inline-flex items-center gap-3 rounded-full border border-black/25 px-7 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
          >
            <Download size={18} />

            Download CV
          </a>
        </div>
      </motion.div>

      {/* Footer links */}
      <div className="flex flex-col justify-between gap-8 border-t border-black/20 pt-6 md:flex-row md:items-center">
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-lg underline decoration-1 underline-offset-8 md:text-xl"
        >
          {siteConfig.email}
        </a>

        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-50"
          >
            <FaLinkedin className="h-5 w-5" />
            LinkedIn
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-50"
          >
            <FaGithub className="h-5 w-5" />
            GitHub
          </a>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 transition-opacity hover:opacity-50"
          >
            Back to top

            <ArrowDownRight
              size={15}
              className="rotate-180"
            />
          </button>
        </div>
      </div>
    </section>
  );
}