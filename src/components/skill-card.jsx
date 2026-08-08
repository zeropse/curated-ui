"use client";

import { useState } from "react";
import Link from "next/link";
import { IconCheck, IconCopy, IconArrowUpRight } from "@tabler/icons-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function SkillCard({ skill }) {
  const [copied, setCopied] = useState(false);
  const skillUrl = skill.url || `https://skills.sh/${skill.source}`;

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(skill.copyCommand);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Link
      href={skillUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full h-full"
    >
      <Card
        className="
          h-full
          p-2.5
          border border-border/40
          bg-background
          shadow-sm
          transition-all
          duration-500
          animate-in fade-in zoom-in-95
          motion-safe:hover:-translate-y-2
          hover:border-primary/20
          hover:shadow-xl
          dark:hover:shadow-none
          flex
          flex-col
          justify-between
        "
      >
        <CardHeader className="px-4 py-5 flex flex-col gap-1.5 flex-grow border-0">
          {skill.category && (
            <div className="mb-1">
              <Badge
                variant="outline"
                className="bg-muted/80 h-auto px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm"
              >
                {skill.category}
              </Badge>
            </div>
          )}

          <div className="flex items-start justify-between gap-4 w-full">
            <CardTitle
              className="
                text-2xl
                font-heading
                font-medium
                tracking-tight
                transition-colors
                duration-300
                group-hover:text-primary
              "
            >
              {skill.name}
            </CardTitle>

            {/* Hover Arrow Component */}
            <div
              className="
                flex size-8 shrink-0 items-center justify-center
                rounded-full
                bg-muted/50
                text-muted-foreground
                transition-all
                duration-300
                group-hover:bg-primary
                group-hover:text-primary-foreground
                opacity-0
                -translate-x-2
                group-hover:opacity-100
                group-hover:translate-x-0
              "
            >
              <IconArrowUpRight size={16} stroke={2.5} aria-hidden="true" />
              <span className="sr-only">View {skill.name} on skills.sh</span>
            </div>
          </div>

          <p className="truncate font-mono text-xs text-muted-foreground/80 mb-2">
            {skill.source}
          </p>

          <CardDescription
            className="
              text-sm
              leading-relaxed
              line-clamp-3
              text-muted-foreground/80
            "
          >
            {skill.description}
          </CardDescription>
        </CardHeader>

        {/* Copy CLI Row */}
        <div className="flex items-center justify-between gap-3 border-t border-border/40 px-4 py-3">
          <code className="max-w-[240px] truncate rounded-md bg-muted/50 px-2 py-1 font-mono text-xs text-muted-foreground">
            {skill.copyCommand}
          </code>

          <Button
            size="sm"
            variant="outline"
            onClick={handleCopy}
            className="h-8 shrink-0 gap-1.5 rounded-lg text-xs transition-colors"
          >
            {copied ? (
              <>
                <IconCheck className="h-3.5 w-3.5 text-emerald-500" />
                <span className="font-medium text-emerald-500">Copied</span>
              </>
            ) : (
              <>
                <IconCopy className="h-3.5 w-3.5" />
                <span>Copy CLI</span>
              </>
            )}
          </Button>
        </div>
      </Card>
    </Link>
  );
}

export function SkillCardSkeleton() {
  return (
    <Card className="h-full w-full max-w-[400px] p-2.5 border border-border/40 bg-background shadow-sm flex flex-col justify-between">
      <CardHeader className="px-4 py-5 flex flex-col gap-3 flex-grow border-0">
        <Skeleton className="h-5 w-24 rounded-md" />
        <div className="flex items-start justify-between gap-4 w-full">
          <Skeleton className="h-8 w-2/3" />
        </div>
        <Skeleton className="h-4 w-1/2" />
        <div className="flex flex-col gap-2 mt-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </CardHeader>
      <div className="flex items-center justify-between gap-3 border-t border-border/40 px-4 py-3 mt-2">
        <Skeleton className="h-6 w-32 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-lg" />
      </div>
    </Card>
  );
}
