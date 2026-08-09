"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn, getSiteImageSrc } from "@/lib/utils";

export function SiteCard({ site, priority = false }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      href={site.url}
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
        "
      >
        {/* Inset Image Frame */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/40 border border-border/40">
          {site.category && (
            <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
              <Badge
                variant="outline"
                className="bg-background/90 text-foreground border-border/60 h-auto px-2.5 py-0.5 font-mono text-[10px] font-medium backdrop-blur-md"
              >
                {site.category}
              </Badge>
            </div>
          )}

          {!imageLoaded && !hasError && (
            <Skeleton className="absolute inset-0 h-full w-full" />
          )}

          {hasError ? (
            <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-4xl font-heading font-semibold">
              {site.name.substring(0, 2).toUpperCase()}
            </div>
          ) : (
            <Image
              src={getSiteImageSrc(site)}
              alt={site.name}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                "object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]",
                imageLoaded ? "opacity-100" : "opacity-0",
              )}
              onLoad={() => setImageLoaded(true)}
              onError={() => setHasError(true)}
            />
          )}
        </div>

        {/* Content Section Below Image */}
        <CardHeader className="px-3.5 py-4 flex flex-col gap-1.5 flex-grow border-0">
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
              {site.name}
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
              <span className="sr-only">Visit {site.name}</span>
            </div>
          </div>

          <CardDescription
            className="
              text-xs
              leading-relaxed
              line-clamp-2
              text-muted-foreground
            "
          >
            {site.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export function SiteCardSkeleton() {
  return (
    <Card className="h-full w-full max-w-[400px] p-2.5 border border-border/80 bg-card shadow-2xs flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/40">
        <Skeleton className="absolute inset-0 h-full w-full" />
      </div>
      <CardHeader className="px-3.5 py-4 flex flex-col gap-3 flex-grow border-0">
        <div className="flex items-start justify-between gap-4 w-full">
          <Skeleton className="h-6 w-2/3" />
        </div>
        <div className="flex flex-col gap-2 mt-1">
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-4/5" />
        </div>
      </CardHeader>
    </Card>
  );
}
