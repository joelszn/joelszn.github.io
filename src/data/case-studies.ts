export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  cardDescription: string;
  image: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  sections: {
    problem: string;
    approach: string;
    outcome: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "windows-recall",
    title: "Windows Recall",
    subtitle: "AI-Powered Memory for Your PC",
    cardDescription:
      "Took an AI-powered memory feature from single-chip prototype to 90% of the Windows market — reaching 490M users while navigating regulatory requirements across the EU and China.",
    image: "/images/recall.png",
    metrics: [
      { label: "TAM Unlocked", value: "90%" },
      { label: "Global Reach", value: "490M MAU" },
      { label: "Dogfood Adoption", value: "80%" },
    ],
    tags: ["0→1", "GenAI", "Windows"],
    sections: {
      problem:
        "Users constantly lose track of information they've previously seen on their PC. Traditional search requires remembering exact file names, folder locations, or browser history — a model that breaks down as people work across dozens of apps and hundreds of documents daily. Microsoft needed a fundamentally new approach to personal computing memory.",
      approach:
        "Led the expansion of Windows Recall from its initial Qualcomm-only launch to Intel and AMD devices, dramatically broadening accessibility. Partnered with Data Science to define model KPIs and launch gates, briefing senior leadership on readiness decisions. Designed and drove a grassroots GenAI dogfood program across 1,600 FTEs that achieved 80% adoption, validating novel features before public release. Drove global expansion into the EU and China, aligning with DMA/CTA regulatory and localization requirements.",
      outcome:
        "Recall shipped as the flagship AI feature for Copilot+ PCs, announced at Microsoft Build — the biggest Windows launch in a decade. Expanding from Qualcomm-only to Intel and AMD unlocked 90% of the total addressable market. Global compliance work expanded TAM by 35%, reaching approximately 490M monthly active Windows users. The internal dogfood program became the model for validating GenAI features across the entire Windows organization.",
    },
  },
  {
    slug: "copilot",
    title: "Microsoft Copilot",
    subtitle: "AI Assistant Entry Point Optimization",
    cardDescription:
      "Drove a 15% engagement lift by optimizing how Copilot surfaces contextually relevant actions — then expanded it globally across 490M monthly active users.",
    image: "/images/copilot.jpg",
    metrics: [
      { label: "Engagement Lift", value: "+15%" },
      { label: "TAM Expansion", value: "+35%" },
      { label: "Global Reach", value: "490M MAU" },
    ],
    tags: ["GenAI", "Engagement", "Global Scale"],
    sections: {
      problem:
        "Microsoft Copilot needed to be more than an AI chatbot — it needed to meet users in context, surfacing relevant actions at the right moment within Windows. Early entry points weren't optimized for how users actually interacted with the assistant, leading to lower-than-expected engagement and discovery.",
      approach:
        "Optimized Copilot's entry point to surface more contextually relevant actions based on user behavior and system state. Partnered cross-functionally with design, engineering, and data science to iterate on placement, triggers, and action recommendations. Led Copilot's global expansion, ensuring the experience met regulatory requirements (DMA/CTA) and localization standards across the EU and China.",
      outcome:
        "Entry point optimization drove a 15% increase in user engagement — a meaningful lift at Windows scale. Global expansion extended Copilot's reach by 35% of TAM, bringing the AI assistant to approximately 490M monthly active users across regions. These improvements established Copilot as a central, indispensable part of the Windows experience.",
    },
  },
];
