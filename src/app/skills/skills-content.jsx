"use client";

import { useState, useMemo } from "react";
import { IconSearch, IconBook, IconX } from "@tabler/icons-react";
import { skills } from "@/data/skills";
import { SkillCard } from "@/components/skill-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SkillsContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    if (!searchQuery.trim()) return skills;
    const q = searchQuery.toLowerCase();
    return skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(q) ||
        skill.description.toLowerCase().includes(q) ||
        skill.source.toLowerCase().includes(q) ||
        skill.category.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4">
          Popular <span className="text-orange-500">Skills</span> I Use
        </h1>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          A collection of developer skills and capabilities for AI coding
          agents.
        </p>
      </div>

      {/* Real-time Search Input Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative flex items-center">
          <IconSearch className="absolute left-4 w-5 h-5 text-muted-foreground pointer-events-none z-10" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills by name, source, or category..."
            className="w-full h-12 pl-12 pr-10 rounded-2xl border-border/80 bg-background/80 text-foreground placeholder:text-muted-foreground/70 shadow-sm focus-visible:ring-orange-500/50 text-sm"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 rounded-full text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <IconX className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Skills Card Grid */}
      {filteredSkills.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 border border-dashed border-border/80 rounded-3xl bg-card/30">
          <IconBook className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
          <h3 className="font-heading text-lg font-bold text-foreground mb-2">
            No matching skills found
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
            We couldn&apos;t find any skill matching &quot;{searchQuery}&quot;.
            Try searching for &quot;Design&quot; or something else.
          </p>
          <Button
            variant="default"
            onClick={() => setSearchQuery("")}
            className="rounded-xl px-4 py-2 bg-orange-500 text-white hover:bg-orange-600"
          >
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
}
