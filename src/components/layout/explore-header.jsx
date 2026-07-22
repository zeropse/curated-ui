"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
  InputGroupButton,
} from "@/components/ui/input-group";
import { categories } from "@/data/categories";
import { useQueryState } from "nuqs";
import {
  IconSearch,
  IconLayoutGrid,
  IconList,
  IconX,
} from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useTransition } from "react";

export function ExploreHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const view = pathname === "/explore/list" ? "list" : "grid";

  const handleViewChange = (newView) => {
    const newPath = newView === "list" ? "/explore/list" : "/explore";
    const currentSearch = searchParams.toString();
    const query = currentSearch ? `?${currentSearch}` : "";
    startTransition(() => {
      router.push(`${newPath}${query}`, { scroll: false });
    });
  };

  const [activeCategory, setActiveCategory] = useQueryState("category", {
    defaultValue: "All",
  });
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  return (
    <>
      {/* Header and Search */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto relative">
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl md:text-6xl font-medium tracking-tight text-primary mb-6">
            Explore the Directory
          </h1>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <InputGroup className="h-14 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:border-border transition-all duration-300 [&:has(input:focus-visible)]:border-primary [&:has(input:focus-visible)]:ring-1 [&:has(input:focus-visible)]:ring-primary">
              <InputGroupAddon align="inline-start" className="pl-5 pr-2">
                <InputGroupText>
                  <IconSearch className="text-muted-foreground group-focus-within/input-group:text-primary transition-colors" />
                </InputGroupText>
              </InputGroupAddon>

              <InputGroupInput
                ref={inputRef}
                id="search-query"
                name="q"
                type="text"
                aria-label="Search directory"
                autoComplete="off"
                placeholder="Search components, templates, animations... (Ctrl+K)"
                className="text-base placeholder:text-muted-foreground/70 bg-transparent"
                value={searchQuery || ""}
                onChange={(e) => setSearchQuery(e.target.value || null)}
              />

              <InputGroupAddon align="inline-end" className="pr-3">
                {searchQuery && (
                  <InputGroupButton
                    variant="ghost"
                    className="size-8 p-0 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
                    onClick={() => {
                      setSearchQuery(null);
                      inputRef.current?.focus();
                    }}
                  >
                    <IconX size={16} />
                  </InputGroupButton>
                )}
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground hidden sm:inline-block">
              View:
            </span>
            <Tabs value={view} onValueChange={handleViewChange}>
              <TabsList className="flex h-9 bg-muted/50 p-0.5 rounded-lg border border-border/50 shadow-sm backdrop-blur-md">
                <TabsTrigger
                  value="grid"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground"
                >
                  <IconLayoutGrid size={14} aria-hidden="true" />
                  Grid
                </TabsTrigger>
                <TabsTrigger
                  value="list"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground"
                >
                  <IconList size={14} aria-hidden="true" />
                  List
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Sticky Categories */}
      <div className="sticky top-16 md:top-20 z-40 w-full mb-12">
        <div className="w-full bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur-xl border-y border-border/40 shadow-sm py-2">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative">
            <ScrollArea className="w-full">
              <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                <TabsList className="flex flex-nowrap justify-start gap-1 md:gap-2 bg-transparent h-auto p-0 w-max">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="px-4 py-2 rounded-lg font-medium transition-all text-sm whitespace-nowrap text-muted-foreground hover:text-foreground hover:bg-muted/50 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <ScrollBar orientation="horizontal" className="hidden" />
            </ScrollArea>
            {/* Soft fade edges for scrolling indication */}
            <div className="absolute top-0 right-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </>
  );
}
