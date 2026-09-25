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
  },

  {
    slug: "cutato-booking-platform",
    number: "02",
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

    github: "https://github.com/prathameshrane08/cutato-web",
    liveDemo: "https://cutato-web.vercel.app",
  },

  {
    slug: "semantic-map-inference",
    number: "03",
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

  },

  {
    slug: "llm-bias-explainability",
    number: "04",
    title: "Bias, Harm and False Refusals in LLMs",
    shortTitle: "LLM Bias",
    category: "Explainable AI · Large Language Models",
    description:
      "An explainability study of how Falcon-7B-Instruct responds to demographic prompt variations and benign prompts it may wrongly refuse.",

    year: "2025",
    duration: "One semester",
    role: "Model experiments and analysis (team project)",
    institution: "TU Dresden · Advanced AI course",

    background: "bg-[#ff7557]",

    overviewHeading: "Looking inside a language model's decisions.",

    overview:
      "This team project for the Advanced AI course investigated when a large language model produces biased, harmful or overly cautious responses, and used explainability methods to understand why. The experiments focused on Falcon-7B-Instruct, examining its behaviour across demographic prompt variations and on benign prompts that can be mistaken for unsafe ones.",

    challenge:
      "Language models can respond differently when only a demographic detail in a prompt changes, and safety tuning can cause them to refuse harmless requests. Observing these behaviours is not enough: the goal was to connect them to what happens inside the model when it processes a prompt.",

    approach:
      "I ran the Falcon-7B-Instruct experiments using PyTorch and Hugging Face Transformers. We built prompt variations that changed demographic descriptors, used XSTest examples to evaluate false refusals, and analysed token-level attention to see how the model processed different parts of each prompt. Post-hoc explanation methods such as LIME and SHAP complemented the attention analysis, and reflection-based prompting was explored as a mitigation technique.",

    outcome:
      "Changing demographic descriptors could produce differences in both the model's attention patterns and its behaviour. The project combined bias and toxicity analysis with false-refusal evaluation, showing how benign prompts can be treated as unsafe and how explainability methods help trace these behaviours back to the input.",

    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "Falcon-7B-Instruct",
      "XSTest",
      "LIME",
      "SHAP",
      "Attention Analysis",
    ],

    metrics: [
      {
        value: "7B",
        label: "Model parameters",
      },
      {
        value: "XSTest",
        label: "False-refusal evaluation",
      },
      {
        value: "3",
        label: "Explanation methods",
      },
      {
        value: "Token",
        label: "Attention analysis level",
      },
    ],

    process: [
      {
        number: "01",
        title: "Model setup",
        description:
          "Ran Falcon-7B-Instruct with PyTorch and Hugging Face Transformers so that both generated outputs and internal attention could be inspected.",
      },
      {
        number: "02",
        title: "Prompt design",
        description:
          "Created prompt variations that changed demographic attributes, and selected XSTest examples to probe false refusals on benign requests.",
      },
      {
        number: "03",
        title: "Behaviour analysis",
        description:
          "Compared the model's responses across prompt variations to identify biased, toxic or overly cautious behaviour.",
      },
      {
        number: "04",
        title: "Explainability",
        description:
          "Analysed token-level attention and applied LIME and SHAP to relate the observed behaviour to specific parts of each prompt.",
      },
    ],

    processHeading: "From prompts to explanations.",
    processIntro:
      "A structured workflow for probing model behaviour and tracing it back to how the model processes its input.",
  },

  {
    slug: "agrosahayak",
    number: "05",
    title: "AgroSahayak Agricultural Assistant",
    shortTitle: "AgroSahayak",
    category: "Machine Learning · Computer Vision · Agriculture",
    description:
      "A machine-learning web platform that recommends crops and fertilizers from soil and weather data and detects plant diseases from leaf images.",

    year: "2024",
    duration: "One semester",
    role: "Bachelor's thesis project",
    institution: "University of Mumbai",

    background: "bg-[#ffd166]",

    overviewHeading: "Bringing machine learning to everyday farming decisions.",

    overview:
      "AgroSahayak was a Bachelor's thesis project in the final semester of the B.E. in Information Technology at the University of Mumbai. It applies machine learning to three practical agricultural questions: which crop suits a field, how its soil nutrients should be corrected, and whether a plant shows signs of disease.",

    challenge:
      "Crop and fertilizer choices depend on several interacting factors, including soil nutrients, acidity, rainfall and local weather, and plant diseases are difficult to identify without expert knowledge. The challenge was to turn these inputs into clear recommendations through a simple web interface.",

    approach:
      "The platform is a Flask web application with three tools. Crop recommendation combines soil nitrogen, phosphorus, potassium, pH and rainfall with live temperature and humidity from the OpenWeatherMap API; six classifiers were compared and a Random Forest model is used in the app. Fertilizer suggestions compare the entered soil nutrients with each crop's requirements, and disease detection classifies uploaded leaf images with a ResNet9 convolutional network.",

    outcome:
      "The Random Forest model reached 99.1% accuracy on the held-out test set across 22 crops, and the disease model recognises 38 plant disease and healthy-leaf classes. Together the tools form a single assistant for crop planning, soil management and plant health.",

    technologies: [
      "Python",
      "Flask",
      "scikit-learn",
      "XGBoost",
      "PyTorch",
      "Pandas",
      "OpenWeatherMap API",
      "Jupyter",
    ],

    metrics: [
      {
        value: "99.1%",
        label: "Crop model test accuracy",
      },
      {
        value: "22",
        label: "Crops covered",
      },
      {
        value: "38",
        label: "Leaf disease classes",
      },
      {
        value: "6",
        label: "Classifiers compared",
      },
    ],

    process: [
      {
        number: "01",
        title: "Data preparation",
        description:
          "Merged and cleaned crop, fertilizer and yield datasets into a crop-recommendation dataset of soil and climate features.",
      },
      {
        number: "02",
        title: "Model comparison",
        description:
          "Trained and compared Decision Tree, Naive Bayes, SVM, Logistic Regression, Random Forest and XGBoost classifiers for crop recommendation.",
      },
      {
        number: "03",
        title: "Disease detection",
        description:
          "Integrated a ResNet9 image classifier that identifies plant diseases from uploaded leaf photos.",
      },
      {
        number: "04",
        title: "Web application",
        description:
          "Combined crop, fertilizer and disease tools in a Flask application that fetches live weather data for the user's city.",
      },
    ],

    github: "https://github.com/prathameshrane08/AgroSahayak",
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