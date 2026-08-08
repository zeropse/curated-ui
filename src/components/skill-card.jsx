"use client";

import { useState } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function SkillCard({ skill }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(skill.copyCommand);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full h-full flex flex-col justify-between group relative overflow-hidden border border-border/40 bg-background shadow-sm transition-all duration-500 animate-in fade-in zoom-in-95 motion-safe:hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl dark:hover:shadow-none">
      <div className="flex flex-col gap-3">
        <CardHeader className="space-y-2">
          {skill.category && (
            <Badge
              variant="outline"
              className="w-fit rounded-md text-[11px] font-medium"
            >
              {skill.category}
            </Badge>
          )}

          <CardTitle className="text-xl font-heading font-medium tracking-tight transition-colors duration-300 group-hover:text-primary">
            {skill.name}
          </CardTitle>

          <CardDescription className="truncate font-mono text-xs text-muted-foreground">
            {skill.source}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {skill.description}
          </p>
        </CardContent>
      </div>

      <CardFooter className="flex items-center justify-between gap-3 border-t border-border/50 px-6 py-4">
        <code className="max-w-[180px] truncate rounded-md bg-background px-2 py-1 font-mono text-xs text-muted-foreground">
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
      </CardFooter>
    </Card>
  );
}
