"use client";

import { motion } from "motion/react";

import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/site";

// ============================================================
// CONTACT + HOMEPAGE FOOTER
//
// PURPOSE
// -------
// This section acts as:
//
// ✓ Final contact CTA
// ✓ Social links
// ✓ Email link
// ✓ Back-to-top navigation
// ✓ Copyright footer
//
// IMPORTANT
// ---------
// We intentionally DO NOT use min-h-screen here.
//
// Earlier, a large minimum height caused unnecessary
// blank space below the footer.
// ============================================================

export default function Contact() {
  // ==========================================================
  // BACK TO TOP
  //
  // Scrolls smoothly back to the beginning of the page.
  // ==========================================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="
        mx-auto
        w-[calc(100%-32px)]
        max-w-[1600px]
        py-24
        md:w-[calc(100%-64px)]
        md:py-32
      "
    >
      {/* =====================================================
          TOP INFORMATION
      ====================================================== */}

      <div className="flex flex-col justify-between gap-6 md:flex-row">
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
            duration: 0.6,
          }}
          className="
            max-w-2xl
            text-sm
            uppercase
            tracking-[0.18em]
          "
        >
          Available for research, internships and software
          engineering opportunities.
        </motion.p>

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
            duration: 0.6,
            delay: 0.1,
          }}
          className="text-sm text-black/45"
        >
          {siteConfig.location}
        </motion.p>
      </div>

      {/* =====================================================
          MAIN CONTACT CTA
      ====================================================== */}

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

        // Reduced from py-28 to avoid excessive empty space.
        className="py-20 md:py-28"
      >
        <h2
          className="
            text-[clamp(4rem,10vw,10rem)]
            font-medium
            leading-[0.84]
            tracking-[-0.075em]
          "
        >
          Let&apos;s build
          <br />
          something meaningful.
        </h2>

        {/* ===================================================
            MAIN BUTTONS
        ==================================================== */}

        <div className="mt-14 flex flex-wrap gap-4">
          {/* START A CONVERSATION */}
          <MagneticButton>
            <a
              href={`mailto:${siteConfig.email}`}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-black
                px-7
                py-4
                !text-white
                transition-colors
                duration-300
                hover:bg-black/85
              "
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
                className="
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </MagneticButton>

          {/* DOWNLOAD CV */}
          <MagneticButton>
            <a
              href={siteConfig.cv}
              download
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-black/25
                px-7
                py-4
                text-black
                transition-colors
                duration-300
                hover:bg-black
                hover:!text-white
              "
            >
              <Download size={18} />

              <span>
                Download CV
              </span>
            </a>
          </MagneticButton>
        </div>
      </motion.div>

      {/* =====================================================
          FOOTER TOP ROW
      ====================================================== */}

      <div
        className="
          flex
          flex-col
          justify-between
          gap-8
          border-t
          border-black/20
          pt-6
          md:flex-row
          md:items-center
        "
      >
        {/* Email */}
        <a
          href={`mailto:${siteConfig.email}`}
          className="
            text-lg
            transition-opacity
            duration-300
            hover:opacity-50
            md:text-xl
          "
        >
          {siteConfig.email}
        </a>

        {/* Social links */}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-2
              transition-opacity
              hover:opacity-50
            "
          >
            <FaLinkedin className="h-5 w-5" />

            <span>
              LinkedIn
            </span>

            <ArrowUpRight
              size={13}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-2
              transition-opacity
              hover:opacity-50
            "
          >
            <FaGithub className="h-5 w-5" />

            <span>
              GitHub
            </span>

            <ArrowUpRight
              size={13}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          {/* =================================================
              MAGNETIC BACK TO TOP
          ================================================== */}

          <MagneticButton>
            <button
              type="button"
              onClick={scrollToTop}
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-black/20
                px-4
                py-2
                transition-colors
                duration-300
                hover:bg-black
                hover:text-white
              "
            >
              <span>
                Back to top
              </span>

              <ArrowDownRight
                size={15}
                className="
                  rotate-180
                  transition-transform
                  duration-300
                  group-hover:-translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </button>
          </MagneticButton>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT ROW

          This was missing from the previous Contact component,
          which is why no copyright appeared on the homepage.
      ====================================================== */}

      <div
        className="
          mt-10
          flex
          flex-col
          justify-between
          gap-3
          border-t
          border-black/10
          pt-5
          text-xs
          text-black/40
          sm:flex-row
          sm:items-center
        "
      >
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>

        <p>
          Designed &amp; developed by {siteConfig.name}
        </p>
      </div>
    </section>
  );
}