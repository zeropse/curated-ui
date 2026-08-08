export const skills = [
  {
    name: "Karpathy Guidelines",
    category: "Coding Guidelines",
    description:
      "Core coding guidelines to reduce LLM errors: think before coding, make surgical edits, prefer simplicity, and verify explicitly.",
    source: "szkocot/andrej-karpathy-skills",
    url: "https://skills.sh/szkocot/andrej-karpathy-skills",
    copyCommand: "npx skills add szkocot/andrej-karpathy-skills",
  },
  {
    name: "Next.js Best Practices",
    category: "Next.js & Frameworks",
    description:
      "App Router patterns, Server Components, client boundaries, async APIs, caching strategies, and route organization.",
    source: "vercel-labs/next-skills",
    url: "https://skills.sh/vercel-labs/next-skills",
    copyCommand: "npx skills add vercel-labs/next-skills",
  },
  {
    name: "Shadcn UI Component Manager",
    category: "UI & Component Systems",
    description:
      "Manage, search, extend, and compose shadcn/ui components, component registries, presets, and accessibility standards.",
    source: "shadcn/ui",
    url: "https://skills.sh/shadcn/ui",
    copyCommand: "npx skills add shadcn/ui",
  },
  {
    name: "Tailwind CSS v4 Docs",
    category: "Styling & Design Tokens",
    description:
      "Comprehensive Tailwind CSS v4 reference: CSS-first theme configuration, utilities, variants, and v3 to v4 migration rules.",
    source: "lombiq/tailwind-agent-skills",
    url: "https://skills.sh/lombiq/tailwind-agent-skills",
    copyCommand: "npx skills add lombiq/tailwind-agent-skills",
  },
  {
    name: "React Composition Patterns",
    category: "Architecture & Patterns",
    description:
      "React composition patterns that scale: compound components, render props, context providers, and React 19 APIs.",
    source: "vercel-labs/agent-skills",
    url: "https://skills.sh/vercel-labs/agent-skills",
    copyCommand: "npx skills add vercel-labs/agent-skills",
  },
  {
    name: "React Performance Best Practices",
    category: "Performance & Optimization",
    description:
      "Performance optimization guidelines from Vercel Engineering: bundle size reduction, memoization, and rendering efficiency.",
    source: "vercel-labs/agent-skills",
    url: "https://skills.sh/vercel-labs/agent-skills",
    copyCommand: "npx skills add vercel-labs/agent-skills",
  },
  {
    name: "Web Design & UX Guidelines",
    category: "UI & Design UX",
    description:
      "Web interface standards for visual hierarchy, responsiveness, accessibility, typography scales, and micro-animations.",
    source: "vercel-labs/agent-skills",
    url: "https://skills.sh/vercel-labs/agent-skills",
    copyCommand: "npx skills add vercel-labs/agent-skills",
  },
];

export const skillCategories = [
  "All",
  ...Array.from(new Set(skills.map((s) => s.category))),
];
