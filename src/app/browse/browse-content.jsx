"use client";

import React from "react";
import { SiteCard } from "@/components/site-card";
import { SearchFilterBar } from "@/components/search-filter-bar";
import { sites, siteCategories } from "@/data/sites";
import { useQueryState } from "nuqs";
import { VirtuosoGrid } from "react-virtuoso";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
} from "@/components/ui/empty";
import { IconSearch } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { shuffleArray, filterSites } from "@/lib/utils";

const virtuosoComponents = {
  List: React.forwardRef(({ style, children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      style={style}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16 justify-items-center"
    >
      {children}
    </div>
  )),
  Item: React.forwardRef(({ children, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className="w-full max-w-[400px] flex justify-center"
    >
      {children}
    </div>
  )),
};

virtuosoComponents.List.displayName = "VirtuosoGridList";
virtuosoComponents.Item.displayName = "VirtuosoGridItem";

export function BrowseContent() {
  const [activeCategory, setActiveCategory] = useQueryState("category", {
    defaultValue: "All",
  });
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  const [shuffledAll, setShuffledAll] = React.useState(sites);

  React.useEffect(() => {
    if (activeCategory === "All") {
      setShuffledAll(shuffleArray(sites));
    }
  }, [activeCategory]);

  const sourceSites = activeCategory === "All" ? shuffledAll : sites;

  const filteredSites = filterSites(sourceSites, {
    category: activeCategory,
    query: searchQuery,
  });

  return (
    <>
      <SearchFilterBar
        title="Browse the Directory"
        searchPlaceholder="Search components, templates, animations... (Ctrl+K)"
        ariaLabel="Search directory"
        categories={siteCategories}
      />

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 min-h-[50vh]">
        {/* Results Counter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-8 pb-3 border-b border-border/40 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span>Showing</span>
            <span className="font-semibold text-foreground font-mono bg-muted/60 px-2 py-0.5 rounded-md text-xs">
              {filteredSites.length}
            </span>
            <span>{filteredSites.length === 1 ? "resource" : "resources"}</span>
          </div>

          {(searchQuery || activeCategory !== "All") && (
            <div className="text-xs text-muted-foreground/80 flex items-center gap-1.5 flex-wrap">
              {activeCategory !== "All" && (
                <span>
                  in{" "}
                  <span className="font-medium text-foreground">
                    {activeCategory}
                  </span>
                </span>
              )}
              {searchQuery && (
                <span>
                  {activeCategory !== "All" ? "matching" : "for"}{" "}
                  <span className="font-medium text-foreground">
                    &quot;{searchQuery}&quot;
                  </span>
                </span>
              )}
            </div>
          )}
        </div>

        {filteredSites.length === 0 ? (
          <Empty className="py-32 border-none">
            <EmptyMedia variant="icon" className="size-16 rounded-2xl mb-2">
              <IconSearch className="size-8" />
            </EmptyMedia>
            <EmptyHeader>
              <EmptyTitle className="text-xl">No sites found</EmptyTitle>
              <EmptyDescription>
                Try adjusting your search or selecting a different category.
              </EmptyDescription>
            </EmptyHeader>
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  setSearchQuery(null);
                  setActiveCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </Empty>
        ) : (
          <VirtuosoGrid
            useWindowScroll
            data={filteredSites}
            components={virtuosoComponents}
            itemContent={(index, site) => (
              <SiteCard site={site} priority={index < 6} />
            )}
          />
        )}
      </section>
    </>
  );
}
