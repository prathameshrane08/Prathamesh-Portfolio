export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;

  year: string;
  duration: string;
  role: string;
  institution: string;

  background: string;

  overview: string;
  challenge: string;
  approach: string;
  outcome: string;

  technologies: string[];
  metrics: ProjectMetric[];
  process: ProjectProcessStep[];

  // Images used on the homepage and project page
  cardImage?: string;
  heroImage?: string;
  gallery?: ProjectGalleryImage[];

  // External project links
  github?: string;
  liveDemo?: string;
};

export const projects: Project[] = [
  {
    slug: "robocasa-robot-learning",
    number: "01",
    title: "RoboCasa Robot Learning Pipeline",
    shortTitle: "RoboCasa",
    category: "Robotics · Simulation · Artificial Intelligence",
    description:
      "An end-to-end robot-learning workflow for household manipulation using RoboCasa, robosuite and MuJoCo.",

    year: "2026",
    duration: "Ongoing",
    role: "Robotics Researcher",
    institution: "LASR Lab · TU Dresden",

    background: "bg-[#d9ff43]",

    overview:
      "This research project explores how household robots can learn manipulation tasks inside realistic kitchen environments. The work covers simulation setup, environment exploration, teleoperation, demonstration collection, task development and preparation for policy learning.",

    challenge:
      "Household robotics requires agents to operate across visually diverse environments, interpret task instructions and perform precise manipulation. Building a reliable learning pipeline is difficult because the simulation, robot controller, demonstrations, task definitions and policy-training workflow must operate together consistently.",

    approach:
      "I configured RoboCasa and robosuite locally, validated kitchen environments, explored teleoperation and playback workflows, and studied the architecture used to define atomic manipulation tasks. The next stage is creating a custom scenario, collecting demonstrations and preparing the resulting data for policy training.",

    outcome:
      "The project establishes the foundation for an end-to-end robot-learning workflow connecting environment configuration, human demonstrations, dataset playback, custom task development and future policy evaluation.",

    technologies: [
      "Python",
      "RoboCasa",
      "robosuite",
      "MuJoCo",
      "Robot Learning",
      "Teleoperation",
      "Imitation Learning",
      "Git",
    ],

    metrics: [
      {
        value: "120+",
        label: "Kitchen scenes",
      },
      {
        value: "2,500+",
        label: "Simulation assets",
      },
      {
        value: "100+",
        label: "Household tasks",
      },
      {
        value: "4",
        label: "Pipeline stages",
      },
    ],

    process: [
      {
        number: "01",
        title: "Environment setup",
        description:
          "Installed RoboCasa, robosuite and MuJoCo inside a dedicated Python environment and validated the setup using demonstration environments.",
      },
      {
        number: "02",
        title: "Simulation exploration",
        description:
          "Tested kitchen scenes, robot configurations and predefined manipulation tasks to understand the structure of the simulation environment.",
      },
      {
        number: "03",
        title: "Teleoperation",
        description:
          "Explored human-controlled robot interaction, controller behaviour and demonstration collection for household manipulation tasks.",
      },
      {
        number: "04",
        title: "Custom task development",
        description:
          "Studied atomic task implementations and prepared a custom pick-and-place scenario for the future learning pipeline.",
      },
    ],

    cardImage: "/projects/robocasa/hero.png",
    heroImage: "/projects/robocasa/hero.png",

    gallery: [
      {
        src: "/projects/robocasa/simulation.png",
        alt: "RoboCasa kitchen simulation environment",
        caption:
          "Exploring realistic household environments and robot configurations in RoboCasa.",
      },
      {
        src: "/projects/robocasa/teleoperation.png",
        alt: "Robot teleoperation inside a RoboCasa environment",
        caption:
          "Using human control to investigate robot movement and demonstration collection.",
      },
      {
        src: "/projects/robocasa/task-structure.png",
        alt: "Source-code structure of a RoboCasa atomic task",
        caption:
          "Studying task definitions, success conditions and environment configuration.",
      },
      {
        src: "/projects/robocasa/pipeline.png",
        alt: "Architecture of the RoboCasa robot-learning pipeline",
        caption:
          "The planned workflow from simulation and demonstrations to policy training and evaluation.",
      },
    ],

    // Replace # with the real repository URL
    github: "https://github.com/prathameshrane08",
  },

  {
    slug: "banking-ai-dashboard",
    number: "02",
    title: "AI-Powered Banking Dashboard",
    shortTitle: "Banking AI",
    category: "Generative AI · Data Storytelling",
    description:
      "A personal-finance dashboard that transforms transaction data into understandable stories and actionable recommendations.",

    year: "2026",
    duration: "Ongoing",
    role: "Product Designer and Developer",
    institution: "Independent Research Project",

    background: "bg-[#ff7557]",

    overview:
      "This project explores an AI-powered data-storytelling platform that helps users understand their spending behaviour without requiring them to interpret complex financial charts independently.",

    challenge:
      "Traditional banking dashboards present balances, charts and transaction lists but often fail to explain why spending changed, whether a pattern is risky or what the user can practically do next.",

    approach:
      "The system combines transaction categorisation, period comparisons, interactive visualisations and natural-language explanations. Its storytelling structure explains what changed, why it happened and which action could improve the user's financial situation.",

    outcome:
      "The dashboard is designed to provide clear explanations of spending changes, likely budget risks and practical recommendations based on the user's financial behaviour.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Large Language Models",
      "Data Visualisation",
      "PostgreSQL",
    ],

    metrics: [
      {
        value: "6+",
        label: "Spending categories",
      },
      {
        value: "3",
        label: "Story layers",
      },
      {
        value: "AI",
        label: "Generated insights",
      },
      {
        value: "24/7",
        label: "Financial guidance",
      },
    ],

    process: [
      {
        number: "01",
        title: "User problem",
        description:
          "Identified the difficulty users face when interpreting charts, categories and transaction changes in traditional banking dashboards.",
      },
      {
        number: "02",
        title: "Story framework",
        description:
          "Designed a narrative structure explaining what changed, why it changed and what the user could do next.",
      },
      {
        number: "03",
        title: "Dashboard design",
        description:
          "Created an interaction model supporting category, time-period and transaction-level exploration.",
      },
      {
        number: "04",
        title: "AI integration",
        description:
          "Prepared the architecture for generating personalised financial explanations and recommendations.",
      },
    ],

    cardImage: "/projects/banking/dashboard.png",
    heroImage: "/projects/banking/dashboard.png",

    gallery: [
      {
        src: "/projects/banking/spending-story.png",
        alt: "AI-generated personal finance spending story",
        caption:
          "A narrative explanation showing what changed in the user's spending.",
      },
      {
        src: "/projects/banking/category-view.png",
        alt: "Interactive spending category exploration",
        caption:
          "Category-level exploration with comparisons across different time periods.",
      },
      {
        src: "/projects/banking/insights.png",
        alt: "Personalised financial insights and recommendations",
        caption:
          "Actionable recommendations generated from transaction patterns.",
      },
    ],

    github: "https://github.com/prathameshrane08",
    liveDemo: "#",
  },

  {
    slug: "cutato-booking-platform",
    number: "03",
    title: "Cutato Booking Platform",
    shortTitle: "Cutato",
    category: "Full-Stack Development · Conversational AI",
    description:
      "A role-based haircut-booking platform with dynamic pricing, intelligent scheduling and a conversational booking assistant.",

    year: "2026",
    duration: "Ongoing",
    role: "Full-Stack Developer",
    institution: "Independent Product",

    background: "bg-[#b8a6ff]",

    overview:
      "Cutato is a digital booking platform connecting customers, barbers and salons through a unified service-discovery, scheduling and appointment-management experience.",

    challenge:
      "Salon booking involves multiple users, changing availability, service selection, dynamic prices, payments, appointment conflicts and different management responsibilities.",

    approach:
      "I developed role-based portals, dynamic slot generation, demand-based pricing, booking management and a conversational assistant designed to guide customers through service discovery and appointment creation.",

    outcome:
      "The platform provides a complete booking journey covering service selection, barber discovery, slot selection, pricing, payment, confirmation and appointment management.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Conversational AI",
    ],

    metrics: [
      {
        value: "3",
        label: "User roles",
      },
      {
        value: "30m",
        label: "Booking slots",
      },
      {
        value: "AI",
        label: "Booking assistant",
      },
      {
        value: "Live",
        label: "Dynamic pricing",
      },
    ],

    process: [
      {
        number: "01",
        title: "Booking flow",
        description:
          "Designed the complete customer journey from selecting a service to confirming and managing an appointment.",
      },
      {
        number: "02",
        title: "Scheduling engine",
        description:
          "Built dynamic slot generation, availability checking, reservation locking and appointment rescheduling.",
      },
      {
        number: "03",
        title: "Role-based portals",
        description:
          "Created separate experiences for customers, barbers and salon administrators.",
      },
      {
        number: "04",
        title: "Conversational assistant",
        description:
          "Integrated an assistant capable of answering questions and guiding users through the booking process.",
      },
    ],

    cardImage: "/projects/cutato/booking.png",
    heroImage: "/projects/cutato/booking.png",

    gallery: [
      {
        src: "/projects/cutato/services.png",
        alt: "Cutato service selection interface",
        caption:
          "Users can explore services, prices and available barbers.",
      },
      {
        src: "/projects/cutato/slots.png",
        alt: "Cutato appointment slot selection",
        caption:
          "Dynamic availability and demand-aware pricing during appointment selection.",
      },
      {
        src: "/projects/cutato/assistant.png",
        alt: "Cutato conversational booking assistant",
        caption:
          "An intelligent assistant that helps users complete the booking process.",
      },
    ],

    github: "https://github.com/prathameshrane08",
    liveDemo: "#",
  },

  {
    slug: "semantic-map-inference",
    number: "04",
    title: "Semantic Map Network Inference",
    shortTitle: "Semantic Maps",
    category: "Graph Algorithms · Computational Linguistics",
    description:
      "A network-inference approach for constructing semantic maps from linguistic connectivity constraints.",

    year: "2026",
    duration: "One semester",
    role: "Researcher and Algorithm Developer",
    institution: "TU Dresden",

    background: "bg-[#8ed8ff]",

    overview:
      "This research investigates how interpretable semantic maps can be inferred automatically from linguistic colexification and connectivity constraints.",

    challenge:
      "The goal is to construct a sparse graph in which the semantic frames associated with every lexical constraint induce a connected subgraph.",

    approach:
      "I implemented a greedy edge-selection algorithm, randomised tie-breaking, repeated-run aggregation and stability evaluation using pairwise Jaccard similarity and entropy-based measures.",

    outcome:
      "The workflow generates interpretable semantic networks and supports comparison with manually constructed semantic maps and Formal Concept Analysis representations.",

    technologies: [
      "Python",
      "NetworkX",
      "Pandas",
      "Graph Theory",
      "Formal Concept Analysis",
      "Data Analysis",
      "Jupyter",
    ],

    metrics: [
      {
        value: "100",
        label: "Algorithm runs",
      },
      {
        value: "8",
        label: "Semantic frames",
      },
      {
        value: "2",
        label: "Stability measures",
      },
      {
        value: "O(log R)",
        label: "Approximation",
      },
    ],

    process: [
      {
        number: "01",
        title: "Problem formalisation",
        description:
          "Represented semantic frames as graph vertices and lexical observations as connectivity constraints.",
      },
      {
        number: "02",
        title: "Greedy inference",
        description:
          "Added candidate edges according to their reduction in disconnected constraint components.",
      },
      {
        number: "03",
        title: "Run aggregation",
        description:
          "Repeated the randomised algorithm and aggregated frequently selected edges across multiple runs.",
      },
      {
        number: "04",
        title: "Stability analysis",
        description:
          "Evaluated agreement between inferred networks using pairwise Jaccard similarity and entropy.",
      },
    ],

    cardImage: "/projects/semantic-maps/network.png",
    heroImage: "/projects/semantic-maps/network.png",

    gallery: [
      {
        src: "/projects/semantic-maps/constraints.png",
        alt: "Semantic map connectivity constraints",
        caption:
          "Lexical observations represented as graph connectivity requirements.",
      },
      {
        src: "/projects/semantic-maps/aggregation.png",
        alt: "Aggregated semantic network edges",
        caption:
          "Frequently selected edges aggregated across repeated randomised runs.",
      },
      {
        src: "/projects/semantic-maps/stability.png",
        alt: "Semantic network stability evaluation",
        caption:
          "Agreement between inferred networks evaluated using Jaccard similarity and entropy.",
      },
    ],

    github: "https://github.com/prathameshrane08",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(currentSlug: string) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug,
  );

  if (currentIndex === -1) {
    return projects[0];
  }

  return projects[(currentIndex + 1) % projects.length];
}