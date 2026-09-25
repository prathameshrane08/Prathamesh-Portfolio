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

  overviewHeading: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;

  technologies: string[];
  metrics: ProjectMetric[];
  process: ProjectProcessStep[];

  // Optional overrides for the "Development process" section
  processHeading?: string;
  processIntro?: string;

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

    overviewHeading:
      "Building a robot-learning pipeline for household manipulation.",

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

    cardImage: "/projects/robocasa/card.webp",
    heroImage: "/projects/robocasa/hero.png",

    gallery: [
      {
        src: "/projects/robocasa/overview.webp",
        alt: "RoboCasa robot learning platform overview",
        caption:
          "RoboCasa combines diverse kitchen environments, household objects, manipulation skills and long-horizon robot-learning tasks.",
      },
      {
        src: "/projects/robocasa/layouts.png",
        alt: "Different RoboCasa kitchen layouts",
        caption:
          "RoboCasa provides visually and structurally diverse kitchen environments for household robot-learning experiments.",
      },
      {
        src: "/projects/robocasa/environment-01.png",
        alt: "RoboCasa simulated kitchen environment with robot",
        caption:
          "A simulated household environment used to explore robot interaction, manipulation and task execution.",
      },
      {
        src: "/projects/robocasa/environment-02.png",
        alt: "Alternative RoboCasa kitchen simulation",
        caption:
          "Different scene configurations help evaluate robot behaviour across varied household environments.",
      },
    ],
    github: "https://github.com/prathameshrane08",
  },

  {
    slug: "banking-ai-dashboard",
    number: "02",
    title: "AI-Powered Banking Dashboard",
    shortTitle: "Banking AI",
    category: "GENERATIVE AI · DATA STORYTELLING",

    description:
      "An ongoing personal-finance project exploring how AI-generated narratives can turn transaction data into understandable stories and actionable insights.",

    year: "2026",
    duration: "Ongoing",
    role: "Product Designer and Developer",
    institution: "Independent Project",

    background: "bg-[#ff7557]",

    overviewHeading: "Turning financial data into understandable stories.",

    overview:
      "This ongoing project explores an AI-powered data-storytelling experience for personal finance. Instead of requiring users to interpret charts independently, the dashboard is designed to combine visual exploration with concise natural-language explanations of their spending behaviour.",

    challenge:
      "Traditional banking dashboards provide balances, charts and transaction histories, but users still have to determine what changed, what caused the change and whether it requires attention.",

    approach:
      "I designed the concept around three storytelling questions: what changed, why did it change and what could the user do next. The proposed workflow combines transaction categorisation, period comparisons, interactive visualisations and AI-generated explanations.",

    outcome:
      "The current concept establishes the dashboard structure, storytelling framework and interaction flow. Development is ongoing, with the next stage focused on implementing the data pipeline and AI-generated narrative layer.",

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
        value: "3",
        label: "Story layers",
      },
      {
        value: "3",
        label: "Exploration levels",
      },
      {
        value: "AI",
        label: "Narrative layer",
      },
      {
        value: "WIP",
        label: "Project status",
      },
    ],

    process: [
      {
        number: "01",
        title: "Problem discovery",
        description:
          "Identified the gap between displaying financial data and helping users understand what their spending patterns actually mean.",
      },
      {
        number: "02",
        title: "Story framework",
        description:
          "Structured each financial narrative around three questions: what changed, why did it change and what could the user do next.",
      },
      {
        number: "03",
        title: "Exploration design",
        description:
          "Designed a drill-down experience from monthly spending patterns to categories, weekly behaviour and individual transactions.",
      },
      {
        number: "04",
        title: "AI narrative layer",
        description:
          "Designed the architecture for connecting structured financial data with personalised natural-language explanations and actionable insights.",
      },
    ],

    cardImage: "/projects/banking/card.png",
    heroImage: "/projects/banking/card.png",

    /*
    Gallery will be enabled once the dashboard
    prototype visuals are ready.

    gallery: [
      {
        src: "/projects/banking/spending-story.png",
        alt: "AI-powered personal finance spending story",
        caption:
          "A narrative layer designed to explain significant changes in a user's spending behaviour.",
      },
      {
        src: "/projects/banking/category-view.png",
        alt: "Interactive spending category exploration",
        caption:
          "A drill-down interface for exploring spending by category, time period and transaction.",
      },
      {
        src: "/projects/banking/insights.png",
        alt: "Personalised financial insight concept",
        caption:
          "A concept for turning detected financial patterns into understandable and actionable recommendations.",
      },
    ],
    */

    github: "https://github.com/prathameshrane08",
  },

  {
    slug: "cutato-booking-platform",
    number: "03",
    title: "Cutato Booking Platform",
    shortTitle: "Cutato",
    category: "Full-Stack Development · Conversational AI",
    description:
      "An intelligent haircut-booking platform combining live availability, dynamic pricing, AI-assisted discovery and a guided hairstyle consultation.",

    year: "2026",
    duration: "Ongoing",
    role: "Full-Stack Developer",
    institution: "Independent Product",

    background: "bg-[#b8a6ff]",

    overviewHeading: "Designing an intelligent booking experience.",

    overview:
      "Cutato is a full-stack booking platform designed to simplify how customers discover barbers, compare services and availability, receive personalised guidance and complete appointments through a unified digital experience.",

    challenge:
      "A modern booking experience must coordinate changing availability, service duration, appointment slots, pricing, payments and booking conflicts while remaining simple for the customer. The challenge was to bring these workflows together without making the booking process feel complicated.",

    approach:
      "I built an end-to-end booking flow with dynamic slot generation, availability checking, reservation handling, demand-aware pricing and appointment management. I also developed a conversational assistant for service discovery and a guided hairstyle consultation that captures user characteristics and preferences to provide more personalised recommendations.",

    outcome:
      "The resulting platform supports the customer journey from barber and service discovery through live availability, intelligent pricing, appointment selection, payment and booking management, while AI-assisted features provide additional guidance before the appointment.",

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
      {
        value: "End-to-end",
        label: "Booking flow",
      },
    ],

    process: [
      {
        number: "01",
        title: "Booking experience",
        description:
          "Designed the customer journey from barber and service discovery through slot selection, payment, confirmation and appointment management.",
      },
      {
        number: "02",
        title: "Scheduling engine",
        description:
          "Built dynamic slot generation, availability checking, reservation handling and appointment rescheduling around service duration and barber availability.",
      },
      {
        number: "03",
        title: "Dynamic pricing",
        description:
          "Introduced demand-aware pricing so appointment prices can respond to quieter, normal and busier booking periods.",
      },
      {
        number: "04",
        title: "AI-assisted experience",
        description:
          "Integrated a conversational booking assistant and a guided hairstyle consultation to help users explore services and receive more personalised recommendations.",
      },
    ],

    cardImage: "/projects/cutato/hero.png",
    heroImage: "/projects/cutato/hero.png",

    gallery: [
      {
        src: "/projects/cutato/hero.png",
        alt: "Cutato barber booking platform",
        caption:
          "The Cutato customer experience combines barber discovery, live availability and intelligent booking.",
      },
      {
        src: "/projects/cutato/booking.png",
        alt: "Cutato booking flow",
        caption:
          "Customers can select a barber and service while reviewing live availability, pricing and booking details.",
      },
      {
        src: "/projects/cutato/assistant.png",
        alt: "Cutato conversational booking assistant",
        caption:
          "The conversational assistant helps users understand services and navigate the booking experience.",
      },
      {
        src: "/projects/cutato/consultation.png",
        alt: "Cutato AI hairstyle consultation",
        caption:
          "A guided hairstyle consultation provides personalised recommendations based on the user's characteristics and preferences.",
      },
      {
        src: "/projects/cutato/consultation-flow.png",
        alt: "Cutato hairstyle consultation flow",
        caption:
          "The multi-step consultation captures information such as face shape, hair characteristics and styling preferences.",
      },
    ],

    github: "https://github.com/prathameshrane08",
    liveDemo: "https://github.com/prathameshrane08",
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

    overviewHeading: "Inferring semantic structure from linguistic data.",

    overview:
      "This research explores how semantic maps can be inferred automatically by representing lexical observations as connectivity constraints and constructing sparse graphs that preserve those constraints.",
    
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
        label: "Randomised runs",
      },
      {
        value: "13",
        label: "Semantic frames",
      },
      {
        value: "20",
        label: "Connectivity constraints",
      },
      {
        value: "2",
        label: "Stability measures",
      },
    ],

    process: [
      {
        number: "01",
        title: "Constraint modelling",
        description:
          "Represented semantic frames as graph vertices and lexical observations as connectivity constraints that must induce connected subgraphs.",
      },
      {
        number: "02",
        title: "Greedy inference",
        description:
          "Selected edges according to how much they reduced the number of disconnected components across the active constraints.",
      },
      {
        number: "03",
        title: "Repeated-run aggregation",
        description:
          "Repeated the randomised tie-breaking procedure across multiple runs and counted how frequently each edge was selected.",
      },
      {
        number: "04",
        title: "Stability evaluation",
        description:
          "Evaluated agreement between inferred networks using pairwise Jaccard similarity and entropy-based stability.",
      },
    ],

    processHeading: "From constraints to an inferred network.",
    processIntro:
      "A structured research workflow transforming linguistic connectivity constraints into interpretable semantic networks.",

    cardImage: "/projects/semantic-map/core.png",
    heroImage: "/projects/semantic-map/aggregated.png",

    gallery: [
      {
        src: "/projects/semantic-map/core.png",
        alt: "Core inferred semantic map",
        caption:
          "The final constraint-preserving network retains the most stable connections found across repeated inference runs.",
      },
      {
        src: "/projects/semantic-map/aggregated.png",
        alt: "Aggregated semantic map from repeated greedy inference runs",
        caption:
          "Edges selected repeatedly across randomised runs are aggregated, with higher frequencies indicating more stable structural relationships.",
      },
      {
        src: "/projects/semantic-map/colexification.png",
        alt: "Initial frame colexification network",
        caption:
          "The original colexification graph is much denser and serves as the starting structure from which a sparse interpretable network is inferred.",
      },
      {
        src: "/projects/semantic-map/manual-map.png",
        alt: "Manually constructed semantic map",
        caption:
          "A manually constructed semantic map provides a qualitative reference for comparing the structure recovered by the inference algorithm.",
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