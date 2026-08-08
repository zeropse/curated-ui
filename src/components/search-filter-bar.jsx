"use client";

import React, { useEffect, useRef, useState } from "react";
import { useQueryState } from "nuqs";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { IconSearch, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function SearchFilterBar({
  title,
  searchPlaceholder = "Search... (Ctrl+K)",
  ariaLabel = "Search",
  categories = [],
  searchQueryParamKey = "q",
  categoryQueryParamKey = "category",
  defaultCategory = "All",
  className,
}) {
  const inputRef = useRef(null);

  const [activeCategory, setActiveCategory] = useQueryState(
    categoryQueryParamKey,
    {
      defaultValue: defaultCategory,
    },
  );

  const [searchQuery, setSearchQuery] = useQueryState(searchQueryParamKey, {
    defaultValue: "",
  });

  const [inputValue, setInputValue] = useState(searchQuery || "");

  // Sync local input value when URL query state changes externally
  useEffect(() => {
    setInputValue(searchQuery || "");
  }, [searchQuery]);

  // Debounce search query update to URL
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue !== (searchQuery || "")) {
        setSearchQuery(inputValue ? inputValue : null);
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [inputValue, searchQuery, setSearchQuery]);

  // Global keyboard shortcuts (Cmd+K / Ctrl+K and /)
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

  const handleClear = () => {
    setInputValue("");
    setSearchQuery(null);
    inputRef.current?.focus();
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Header Title & Search Bar */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto relative">
        <div className="text-center mb-8">
          {title && (
            <h1 className="font-heading text-4xl md:text-6xl font-medium tracking-tight text-primary mb-6">
              {title}
            </h1>
          )}

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <InputGroup className="h-14 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:border-border transition-all duration-300 [&:has(input:focus-visible)]:border-primary [&:has(input:focus-visible)]:ring-1 [&:has(input:focus-visible)]:ring-primary">
              <InputGroupAddon align="inline-start" className="pl-5 pr-2">
                <InputGroupText>
                  <IconSearch className="text-muted-foreground group-focus-within/input-group:text-primary transition-colors" />
                </InputGroupText>
              </InputGroupAddon>

              <InputGroupInput
                ref={inputRef}
                id="search-query"
                name={searchQueryParamKey}
                type="text"
                aria-label={ariaLabel}
                autoComplete="off"
                placeholder={searchPlaceholder}
                className="text-base placeholder:text-muted-foreground/70 bg-transparent"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <InputGroupAddon align="inline-end" className="pr-3">
                {inputValue && (
                  <InputGroupButton
                    variant="destructive"
                    className="size-8 p-0 rounded-full hover:bg-muted transition-colors"
                    onClick={handleClear}
                  >
                    <IconX size={16} />
                  </InputGroupButton>
                )}
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>

      {/* Sticky Categories Bar */}
      {categories && categories.length > 0 && (
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
      )}
    </div>
  );
}
