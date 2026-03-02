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
      "Scaled a zero-to-one AI feature that lets users semantically search everything they've seen on their PC — from Qualcomm-only launch to Intel and AMD, unlocking 90% of the total addressable market.",
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
        "As AI Product Manager, I helped scale Windows Recall from its initial Qualcomm-only launch to support Intel and AMD devices, dramatically broadening accessibility. I partnered with Data Science to define model KPIs and launch gates, briefing leadership on readiness decisions. I designed and led a grassroots GenAI dogfood program across 1,600 FTEs that achieved 80% adoption, validating novel features before public release. I also assisted with global expansion into the EU and China, aligning with DMA/CTA regulatory and localization requirements.",
      outcome:
        "Recall shipped as the flagship AI feature for Copilot+ PCs, announced at Microsoft Build. The platform expansion from Qualcomm-only to Intel and AMD unlocked 90% of the total addressable market. The global compliance work expanded TAM by 35%, reaching approximately 490M monthly active users. The internal dogfood program became a model for validating GenAI features across the Windows organization.",
    },
  },
  {
    slug: "copilot",
    title: "Microsoft Copilot",
    subtitle: "AI Assistant Entry Point Optimization",
    cardDescription:
      "Optimized the Copilot entry point in Windows to surface more contextually relevant actions, driving a 15% increase in user engagement across the platform.",
    image: "/images/copilot.jpg",
    metrics: [
      { label: "Engagement Lift", value: "+15%" },
      { label: "TAM Expansion", value: "+35%" },
      { label: "FTEs in Dogfood", value: "1.6K" },
    ],
    tags: ["GenAI", "Engagement", "Global Scale"],
    sections: {
      problem:
        "Microsoft Copilot needed to be more than an AI chatbot — it needed to meet users in context, surfacing relevant actions at the right moment within Windows. Early entry points weren't optimized for how users actually interacted with the assistant, leading to lower-than-expected engagement and discovery.",
      approach:
        "I focused on optimizing Copilot's entry point to surface more contextually relevant actions based on user behavior and system state. Working cross-functionally with design, engineering, and data science teams, we iterated on placement, triggers, and action recommendations. I also contributed to Copilot's global expansion, ensuring the experience met regulatory requirements (DMA/CTA) and localization standards across the EU and China.",
      outcome:
        "The entry point optimization drove a 15% increase in user engagement. Global expansion efforts extended Copilot's reach by 35% of TAM, bringing the AI assistant to approximately 490M monthly active users across regions. These improvements helped establish Copilot as a central part of the Windows experience.",
    },
  },
];
