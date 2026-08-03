import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  Clock3,
  Code2,
  ExternalLink,
  Layers3,
  UserRound,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import TransitionLink from "@/components/transitions/TransitionLink";

import {
  getNextProject,
  getProjectBySlug,
  projects,
} from "@/data/projects";

// ============================================================
// PROJECT PAGE PROPS
//
// The slug identifies which project should be displayed.
//
// Example:
//
// /work/robocasa-robot-learning
//
// slug = "robocasa-robot-learning"
// ============================================================

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// ============================================================
// STATIC PROJECT ROUTES
//
// Next.js creates every project page during the build.
//
// Adding a new project to data/projects.ts automatically
// adds a new static project page.
// ============================================================

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// ============================================================
// DYNAMIC PROJECT METADATA
//
// Every project receives its own browser title
// and search-engine description.
// ============================================================

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

// ============================================================
// VALIDATE PROJECT LINKS
//
// Placeholder links use "#".
//
// We hide GitHub and live-demo buttons until a real URL
// is added inside data/projects.ts.
// ============================================================

function isValidProjectLink(link?: string) {
  return Boolean(link && link !== "#");
}

// ============================================================
// PROJECT PAGE
// ============================================================

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);

  const hasGitHubLink = isValidProjectLink(project.github);
  const hasLiveDemoLink = isValidProjectLink(project.liveDemo);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f1efe9] text-[#111111]">
      {/* =====================================================
          PROJECT HERO
      ====================================================== */}

      <section
        className={`relative min-h-screen overflow-hidden ${project.background}`}
      >
        {/* Decorative project number */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-12 text-[18rem] font-medium leading-none tracking-[-0.12em] text-black/[0.045] sm:text-[24rem] lg:text-[34rem]"
        >
          {project.number}
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-[calc(100%-32px)] max-w-[1600px] flex-col justify-between py-8 md:w-[calc(100%-64px)] md:py-10">
          {/* Hero navigation */}
          <div className="flex items-center justify-between">
            <TransitionLink
              href="/#projects"
              className="group inline-flex items-center gap-3 text-sm font-medium"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/25 transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </span>

              <span>Back to projects</span>
            </TransitionLink>

            <span className="hidden text-sm text-black/50 sm:block">
              {project.year}
            </span>
          </div>

          {/* Hero content */}
          <div className="py-20 md:py-28">
            <p className="mb-6 max-w-2xl text-xs uppercase tracking-[0.2em] text-black/55 md:text-sm">
              {project.category}
            </p>

            <h1 className="max-w-[1300px] text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.84] tracking-[-0.075em]">
              {project.title}
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-black/65 md:text-2xl">
              {project.description}
            </p>
          </div>

          {/* Hero details */}
          <div className="grid gap-6 border-t border-black/20 py-7 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-2 text-black/45">Role</p>
              <p>{project.role}</p>
            </div>

            <div>
              <p className="mb-2 text-black/45">Institution</p>
              <p>{project.institution}</p>
            </div>

            <div>
              <p className="mb-2 text-black/45">Duration</p>
              <p>{project.duration}</p>
            </div>

            <div className="lg:text-right">
              <p className="mb-2 text-black/45">Project</p>

              <p>
                {project.number} /{" "}
                {String(projects.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT METADATA
      ====================================================== */}

      <section className="border-b border-black/15">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1600px] md:w-[calc(100%-64px)] md:grid-cols-2 lg:grid-cols-4">
          {/* Year */}
          <article className="border-b border-black/15 py-10 md:border-r md:px-8 lg:border-b-0">
            <CalendarDays
              size={22}
              strokeWidth={1.5}
              className="mb-8"
            />

            <p className="text-sm text-black/45">Year</p>

            <p className="mt-2 text-xl font-medium">
              {project.year}
            </p>
          </article>

          {/* Duration */}
          <article className="border-b border-black/15 py-10 md:px-8 lg:border-b-0 lg:border-r">
            <Clock3
              size={22}
              strokeWidth={1.5}
              className="mb-8"
            />

            <p className="text-sm text-black/45">Duration</p>

            <p className="mt-2 text-xl font-medium">
              {project.duration}
            </p>
          </article>

          {/* Role */}
          <article className="border-b border-black/15 py-10 md:border-r md:px-8 lg:border-b-0">
            <UserRound
              size={22}
              strokeWidth={1.5}
              className="mb-8"
            />

            <p className="text-sm text-black/45">My role</p>

            <p className="mt-2 text-xl font-medium">
              {project.role}
            </p>
          </article>

          {/* Institution */}
          <article className="py-10 md:px-8">
            <Building2
              size={22}
              strokeWidth={1.5}
              className="mb-8"
            />

            <p className="text-sm text-black/45">
              Institution
            </p>

            <p className="mt-2 text-xl font-medium">
              {project.institution}
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ====================================================== */}

      <section className="mx-auto grid w-[calc(100%-32px)] max-w-[1400px] gap-14 py-28 md:w-[calc(100%-64px)] md:grid-cols-[0.65fr_1.35fr] md:py-40">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-black/45 md:text-sm">
            01 · Overview
          </p>
        </div>

        <div>
          <h2 className="max-w-5xl text-[clamp(2.8rem,5.5vw,6rem)] font-medium leading-[0.95] tracking-[-0.06em]">
            Building a thoughtful solution for a complex problem.
          </h2>

          <p className="mt-10 max-w-4xl text-xl leading-relaxed text-black/60 md:text-2xl">
            {project.overview}
          </p>
        </div>
      </section>

      {/* =====================================================
          PROJECT METRICS
      ====================================================== */}

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1600px] pb-28 md:w-[calc(100%-64px)] md:pb-40">
        <div className="grid border-t border-black/20 sm:grid-cols-2 lg:grid-cols-4">
          {project.metrics.map((metric, index) => (
            <article
              key={`${metric.label}-${metric.value}`}
              className="border-b border-black/20 py-10 sm:px-8 sm:odd:border-r lg:border-r lg:last:border-r-0"
            >
              <span className="text-xs text-black/35">
                0{index + 1}
              </span>

              <p className="mt-16 text-[clamp(3.5rem,6vw,6.5rem)] font-medium leading-none tracking-[-0.07em]">
                {metric.value}
              </p>

              <p className="mt-5 text-sm text-black/50 md:text-base">
                {metric.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          MAIN PROJECT IMAGE
      ====================================================== */}

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1600px] md:w-[calc(100%-64px)]">
        {project.heroImage ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-black/5 md:rounded-[48px]">
            <Image
              src={project.heroImage}
              alt={`${project.title} project preview`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1600px"
              className="object-cover transition-transform duration-1000 hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div
            className={`relative flex min-h-[65vh] items-center justify-center overflow-hidden rounded-[28px] ${project.background} md:min-h-[80vh] md:rounded-[48px]`}
          >
            <div
              aria-hidden="true"
              className="absolute text-[18rem] font-medium leading-none tracking-[-0.12em] text-black/[0.05] sm:text-[27rem] lg:text-[40rem]"
            >
              {project.number}
            </div>

            <div className="relative z-10 max-w-2xl px-8 text-center">
              <Layers3
                size={38}
                strokeWidth={1.3}
                className="mx-auto mb-8"
              />

              <p className="text-xs uppercase tracking-[0.22em] text-black/50">
                Project visual
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                {project.shortTitle}
              </h2>

              <p className="mx-auto mt-6 max-w-xl leading-relaxed text-black/55">
                Project screenshots and diagrams will be added here.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* =====================================================
          CHALLENGE, APPROACH AND OUTCOME
      ====================================================== */}

      <section className="mx-auto w-[calc(100%-32px)] max-w-[1400px] py-28 md:w-[calc(100%-64px)] md:py-44">
        <div className="grid border-t border-black/20">
          {[
            {
              number: "02",
              title: "The challenge",
              content: project.challenge,
            },
            {
              number: "03",
              title: "The approach",
              content: project.approach,
            },
            {
              number: "04",
              title: "The outcome",
              content: project.outcome,
            },
          ].map((item) => (
            <article
              key={item.number}
              className="grid gap-10 border-b border-black/20 py-16 md:grid-cols-[0.65fr_1.35fr] md:py-24"
            >
              <div>
                <span className="text-sm text-black/40">
                  {item.number}
                </span>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em]">
                  {item.title}
                </h2>
              </div>

              <p className="max-w-4xl text-xl leading-relaxed text-black/60 md:text-2xl">
                {item.content}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          PROJECT GALLERY
      ====================================================== */}

      {project.gallery && project.gallery.length > 0 && (
        <section className="mx-auto w-[calc(100%-32px)] max-w-[1600px] pb-28 md:w-[calc(100%-64px)] md:pb-44">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-black/45 md:text-sm">
              05 · Project gallery
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Inside the process.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((galleryImage, index) => (
              <figure
                key={galleryImage.src}
                className={
                  index === 0 ? "md:col-span-2" : ""
                }
              >
                <div
                  className={`relative overflow-hidden rounded-[28px] bg-black/5 ${
                    index === 0
                      ? "aspect-[16/9]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={galleryImage.src}
                    alt={galleryImage.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, 1600px"
                        : "(max-width: 768px) 100vw, 800px"
                    }
                    className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>

                {galleryImage.caption && (
                  <figcaption className="mt-4 max-w-3xl text-sm leading-relaxed text-black/50">
                    {galleryImage.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* =====================================================
          DEVELOPMENT PROCESS
      ====================================================== */}

      <section className="bg-[#111111] text-white">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1600px] py-28 md:w-[calc(100%-64px)] md:py-40">
          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/45 md:text-sm">
                06 · Development process
              </p>

              <h2 className="mt-6 max-w-4xl text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                From idea to implementation.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-white/50 md:justify-self-end md:text-xl">
              A structured workflow used to understand the problem,
              design the system and develop the project.
            </p>
          </div>

          <div className="mt-24 grid border-t border-white/20 md:grid-cols-2">
            {project.process.map((step) => (
              <article
                key={`${step.number}-${step.title}`}
                className="min-h-[360px] border-b border-white/20 py-10 md:border-r md:p-10 md:even:border-r-0"
              >
                <div className="flex h-full flex-col justify-between">
                  <span className="text-sm text-white/35">
                    {step.number}
                  </span>

                  <div className="mt-24">
                    <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                      {step.title}
                    </h3>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}

      <section className="mx-auto grid w-[calc(100%-32px)] max-w-[1400px] gap-14 py-28 md:w-[calc(100%-64px)] md:grid-cols-[0.65fr_1.35fr] md:py-40">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-black/45 md:text-sm">
            07 · Technology
          </p>

          <Code2
            size={34}
            strokeWidth={1.3}
            className="mt-8"
          />
        </div>

        <div>
          <h2 className="text-[clamp(3rem,5vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
            Tools and technologies.
          </h2>

          {/* Technology pills */}
          <div className="mt-14 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-black/20 px-6 py-3 text-sm transition-colors duration-300 hover:bg-black hover:text-white md:px-7 md:py-4 md:text-base"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* External project links */}
          {(hasGitHubLink || hasLiveDemoLink) && (
            <div className="mt-14 flex flex-wrap gap-4">
              {/* =============================================
                  GITHUB BUTTON FIX

                  The text and icons are explicitly white.

                  !text-white overrides any inherited global
                  anchor colour that may otherwise turn them black.
              ============================================== */}

              {hasGitHubLink && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/85"
                >
                  <FaGithub className="h-[19px] w-[19px] shrink-0 text-white" />

                  <span className="text-white">
                    View GitHub
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              )}

              {/* Live project button */}
              {hasLiveDemoLink && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open the live ${project.title} project`}
                  className="group inline-flex items-center gap-3 rounded-full border border-black/25 px-7 py-4 text-black transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:!text-white"
                >
                  <ExternalLink
                    size={18}
                    className="shrink-0"
                  />

                  <span>View live project</span>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              )}
            </div>
          )}

          {/* Placeholder message */}
          {!hasGitHubLink && !hasLiveDemoLink && (
            <p className="mt-12 max-w-xl text-sm leading-relaxed text-black/45">
              Repository and live-project links will appear here after
              valid URLs are added to the project data.
            </p>
          )}
        </div>
      </section>

      {/* =====================================================
          NEXT PROJECT
      ====================================================== */}

      <section className={nextProject.background}>
        <TransitionLink
          href={`/work/${nextProject.slug}`}
          className="group mx-auto block w-[calc(100%-32px)] max-w-[1600px] py-28 md:w-[calc(100%-64px)] md:py-40"
        >
          <div className="flex items-center justify-between border-b border-black/20 pb-7">
            <p className="text-xs uppercase tracking-[0.2em] text-black/50 md:text-sm">
              Next project
            </p>

            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black/25 transition-all duration-500 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
              <ArrowUpRight size={20} />
            </span>
          </div>

          <div className="grid gap-12 pt-16 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-6 text-sm text-black/50">
                {nextProject.category}
              </p>

              <h2 className="max-w-6xl text-[clamp(3.8rem,9vw,10rem)] font-medium leading-[0.84] tracking-[-0.075em]">
                {nextProject.title}
              </h2>
            </div>

            <div className="flex items-center gap-3 text-sm">
              Explore case study

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
        </TransitionLink>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#111111] text-white">
        <div className="mx-auto flex w-[calc(100%-32px)] max-w-[1600px] flex-col justify-between gap-6 py-8 text-sm text-white/50 md:w-[calc(100%-64px)] md:flex-row">
          <p>
            © {new Date().getFullYear()} Prathamesh Rane
          </p>

          <TransitionLink
            href="/"
            className="transition-colors duration-300 hover:text-white"
          >
            Return home
          </TransitionLink>
        </div>
      </footer>
    </main>
  );
}