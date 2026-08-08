import { Suspense } from "react";
import { SkillsContent } from "./skills-content";
import { Skeleton } from "@/components/ui/skeleton";
import { skills } from "@/data/skills";

export const metadata = {
  title: "Popular Skills | Curated UI",
  description:
    "Explore popular developer AI agent skills, coding guidelines, and architectural patterns used in Curated UI.",
  openGraph: {
    title: "Popular Skills | Curated UI",
    description:
      "Explore popular developer AI agent skills, coding guidelines, and architectural patterns used in Curated UI.",
  },
};

export default function SkillsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Curated AI Agent Skills",
    description:
      "A collection of active and popular developer skills for AI coding agents.",
    numberOfItems: skills.length,
    itemListElement: skills.map((skill, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: skill.name,
      description: skill.description,
    })),
  };

  return (
    <main
      id="main-content"
      className="min-h-screen relative overflow-hidden py-32"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense
        fallback={
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Skeleton className="h-8 w-40 mx-auto rounded-full mb-6" />
              <Skeleton className="h-12 w-3/4 mx-auto rounded-xl mb-4" />
              <Skeleton className="h-6 w-full mx-auto rounded-lg mb-8" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-64 w-full rounded-2xl" />
              ))}
            </div>
          </div>
        }
      >
        <SkillsContent />
      </Suspense>
    </main>
  );
}
