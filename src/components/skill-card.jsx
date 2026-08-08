"use client";

import { useState } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function SkillCard({ skill }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(skill.copyCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="h-full p-4 border border-border/40 bg-background shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg flex flex-col justify-between">
      <CardHeader className="p-0 border-0 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          {skill.category && (
            <Badge
              variant="outline"
              className="bg-muted/60 text-[11px] font-medium px-2.5 py-0.5 border-border/60"
            >
              {skill.category}
            </Badge>
          )}
        </div>

        <div>
          <CardTitle className="text-xl font-heading font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {skill.name}
          </CardTitle>
          <p className="text-xs font-mono text-muted-foreground mt-1 truncate">
            {skill.source}
          </p>
        </div>

        <CardDescription className="text-sm leading-relaxed text-muted-foreground/90 line-clamp-3">
          {skill.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="p-0 pt-4 border-t border-border/40 mt-4 flex items-center justify-between bg-transparent">
        <span className="text-xs font-mono text-muted-foreground/70 truncate max-w-[180px]">
          {skill.copyCommand}
        </span>

        <Button
          size="sm"
          variant="outline"
          onClick={handleCopy}
          className="h-8 gap-1.5 text-xs rounded-lg hover:bg-muted"
        >
          {copied ? (
            <>
              <IconCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-semibold">Copied</span>
            </>
          ) : (
            <>
              <IconCopy className="w-3.5 h-3.5" />
              <span>Copy CLI</span>
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
