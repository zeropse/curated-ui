"use client";

import React from "react";
import { motion } from "motion/react";
import { SkillCard } from "@/components/skill-card";
import { SearchFilterBar } from "@/components/search-filter-bar";
import { skills, skillCategories } from "@/data/skills";
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
import { shuffleArray, filterSkills } from "@/lib/utils";

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
    <motion.div
      {...props}
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full max-w-[400px] flex justify-center"
    >
      {children}
    </motion.div>
  )),
};

virtuosoComponents.List.displayName = "VirtuosoGridList";
virtuosoComponents.Item.displayName = "VirtuosoGridItem";

export function SkillsContent() {
  const [activeCategory, setActiveCategory] = useQueryState("category", {
    defaultValue: "All",
  });
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  const shuffledSkills = React.useMemo(() => shuffleArray(skills), []);
  const sourceSkills = activeCategory === "All" ? shuffledSkills : skills;

  const filteredSkills = filterSkills(sourceSkills, {
    category: activeCategory,
    query: searchQuery,
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SearchFilterBar
          title="Popular AI Skills I Use"
          searchPlaceholder="Search skills, guidelines, frameworks... (Ctrl+K)"
          ariaLabel="Search skills"
          categories={skillCategories}
          totalResults={filteredSkills.length}
          itemSingular="skill"
          itemPlural="skills"
        />
      </motion.div>

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 min-h-[50vh]">
        {filteredSkills.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Empty className="py-32 border-none">
              <EmptyMedia variant="icon" className="size-16 rounded-2xl mb-2">
                <IconSearch className="size-8" />
              </EmptyMedia>
              <EmptyHeader>
                <EmptyTitle className="text-xl">No skills found</EmptyTitle>
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
          </motion.div>
        ) : (
          <VirtuosoGrid
            useWindowScroll
            data={filteredSkills}
            components={virtuosoComponents}
            itemContent={(index, skill) => <SkillCard skill={skill} />}
          />
        )}
      </section>
    </>
  );
}
