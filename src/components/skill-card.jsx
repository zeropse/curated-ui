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
} from "@/components/ui/card";

export function SkillCard({ skill }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(skill.copyCommand);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="group relative overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <CardHeader className="space-y-3">
        {skill.category && (
          <Badge
            variant="secondary"
            className="w-fit rounded-md px-2 py-0.5 text-[11px] font-medium"
          >
            {skill.category}
          </Badge>
        )}

        <div className="space-y-1">
          <CardTitle className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
            {skill.name}
          </CardTitle>

          <p className="truncate font-mono text-xs text-muted-foreground">
            {skill.source}
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {skill.description}
        </p>
      </CardContent>

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
