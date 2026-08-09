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
          border-none
          bg-card
          shadow-2xs
          transition-all
          duration-300
          hover:border-accent/50
          hover:shadow-md
          flex
          flex-col
          justify-between
        "
      >
        <CardHeader className="px-4 py-4 flex flex-col gap-2 flex-grow border-0">
          {skill.category && (
            <div className="mb-0.5">
              <Badge
                variant="outline"
                className="bg-muted/60 text-muted-foreground border-border/60 h-auto px-2.5 py-0.5 font-mono text-[10px] font-medium"
              >
                {skill.category}
              </Badge>
            </div>
          )}

          <div className="flex items-start justify-between gap-3 w-full">
            <CardTitle
              className="
                text-xl
                font-heading
                font-semibold
                tracking-tight
                text-card-foreground
                transition-colors
                duration-200
                group-hover:text-accent
              "
            >
              {skill.name}
            </CardTitle>

            {/* Hover Arrow Component */}
            <div
              className="
                flex size-7 shrink-0 items-center justify-center
                rounded-full
                bg-muted
                text-muted-foreground
                transition-all
                duration-200
                group-hover:bg-accent
                group-hover:text-accent-foreground
                opacity-0
                -translate-x-1
                group-hover:opacity-100
                group-hover:translate-x-0
              "
            >
              <IconArrowUpRight size={14} stroke={2.5} aria-hidden="true" />
              <span className="sr-only">View {skill.name} on skills.sh</span>
            </div>
          </div>

          <p className="font-mono text-xs text-muted-foreground/90 break-all">
            {skill.source}
          </p>

          <CardDescription
            className="
              text-xs
              leading-relaxed
              line-clamp-3
              text-muted-foreground
              mt-1
            "
          >
            {skill.description}
          </CardDescription>
        </CardHeader>

        {/* Copy CLI Row */}
        <div className="flex items-center justify-between gap-2.5 border-t border-border/60 px-4 py-3 bg-muted/20 rounded-b-lg">
          <code className="max-w-[200px] sm:max-w-[240px] truncate rounded bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground">
            {skill.copyCommand}
          </code>

          <Button
            size="sm"
            variant="outline"
            onClick={handleCopy}
            className="h-7 shrink-0 gap-1 px-2.5 rounded-md text-xs transition-colors border-border/80 hover:bg-muted"
          >
            {copied ? (
              <>
                <IconCheck className="h-3.5 w-3.5 text-accent" />
                <span className="font-medium text-accent">Copied</span>
              </>
            ) : (
              <>
                <IconCopy className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Copy</span>
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
    <Card className="h-full w-full max-w-[400px] p-2.5 border border-border/80 bg-card shadow-2xs flex flex-col justify-between">
      <CardHeader className="px-4 py-4 flex flex-col gap-3 flex-grow border-0">
        <Skeleton className="h-4 w-20 rounded" />
        <div className="flex items-start justify-between gap-4 w-full">
          <Skeleton className="h-6 w-2/3" />
        </div>
        <Skeleton className="h-3.5 w-1/2" />
        <div className="flex flex-col gap-2 mt-1">
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-4/5" />
        </div>
      </CardHeader>
      <div className="flex items-center justify-between gap-3 border-t border-border/60 px-4 py-3 bg-muted/20">
        <Skeleton className="h-5 w-28 rounded" />
        <Skeleton className="h-7 w-16 rounded" />
      </div>
    </Card>
  );
}
