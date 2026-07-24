import { Suspense } from "react";
import { ExploreContent } from "./explore-content";
import { SiteCardSkeleton } from "@/components/site-card";
import { Skeleton } from "@/components/ui/skeleton";
import { sites } from "@/data/sites";

export const metadata = {
  title: "Explore",
  description: "Browse the curated directory of modern UI tools and libraries.",
};

export default function ExplorePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Curated UI Directory",
    description:
      "A curated directory of modern UI components, libraries, and design tools.",
    numberOfItems: sites.length,
    itemListElement: sites.map((site, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: site.name,
      url: site.url,
      description: site.description,
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
          <div className="w-full animate-fade-in">
            {/* Header Skeleton */}
            <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-12 flex flex-col items-center justify-center">
              <Skeleton className="h-12 w-3/4 max-w-md rounded-xl mb-6" />
              <Skeleton className="h-14 w-full max-w-2xl rounded-2xl mb-8" />
              <div className="flex gap-2 overflow-hidden w-full max-w-3xl justify-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-9 w-24 rounded-lg shrink-0" />
                ))}
              </div>
            </div>
            {/* Skeleton Grid */}
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 min-h-[50vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16 justify-items-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <SiteCardSkeleton key={i} />
                ))}
              </div>
            </section>
          </div>
        }
      >
        <ExploreContent />
      </Suspense>
    </main>
  );
}
