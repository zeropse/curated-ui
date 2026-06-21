import { SiteCard } from "@/components/SiteCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { sites } from "@/lib/data";

export default async function ListPage(props) {
  const searchParams = await props.searchParams;
  const activeCategory = searchParams?.category || "All";
  const searchQuery = searchParams?.q || "";

  let filteredSites =
    activeCategory === "All"
      ? sites
      : sites.filter((site) => site.category === activeCategory);

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredSites = filteredSites.filter(
      (site) =>
        site.name.toLowerCase().includes(q) ||
        site.description.toLowerCase().includes(q),
    );
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-background pt-32">
      {/* Categories & Directory */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 min-h-[50vh]">
        <div className="mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-primary">
            All Sites
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Browse the complete directory.
          </p>
        </div>

        <div className="mb-16 flex justify-start sticky top-28 z-40">
          <div className="bg-background/80 backdrop-blur-xl py-4 rounded-full px-2 border border-border/40 shadow-[0px_8px_32px_rgba(0,0,0,0.04)] dark:shadow-none">
            <CategoryFilter />
          </div>
        </div>

        {filteredSites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <h3 className="font-heading text-2xl font-medium text-primary mb-4">
              No sites found
            </h3>
            <p className="text-muted-foreground">
              Try selecting a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 md:gap-y-32">
            {filteredSites.map((site, index) => (
              <div
                key={site.url}
                className={`flex justify-center ${index % 3 === 1 ? "md:translate-y-16 lg:translate-y-24" : ""} ${index % 3 === 2 ? "lg:translate-y-12" : ""}`}
              >
                <SiteCard site={site} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Background Ghost Text */}
      <div className="fixed top-1/4 left-0 w-full overflow-hidden -z-0 pointer-events-none select-none flex justify-center opacity-40 dark:opacity-10">
        <span className="font-heading text-[15vw] font-medium tracking-tighter text-primary/10 whitespace-nowrap">
          DIRECTORY
        </span>
      </div>
    </main>
  );
}
