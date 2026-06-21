"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { Skeleton } from "./ui/skeleton";

export function SiteCard({ site }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group relative flex flex-col items-center max-w-[340px] mx-auto w-full">
      {/* Circular Portrait Image Container */}
      <Link
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full aspect-square mb-8"
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-background shadow-[0px_24px_48px_0px_rgba(0,0,0,0.08)] dark:shadow-none transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0px_32px_64px_0px_rgba(0,0,0,0.12)]">
          {!isLoaded && !hasError && (
            <Skeleton className="w-full h-full rounded-full" />
          )}
          {hasError ? (
            <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/40 font-heading text-4xl">
              {site.name.substring(0, 2).toUpperCase()}
            </div>
          ) : (
            <Image
              src={`/images/sites/${site.imageSlug}.jpg`}
              alt={site.name}
              fill
              className={cn(
                "object-cover transition-opacity duration-500",
                isLoaded ? "opacity-100" : "opacity-0",
              )}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
            />
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-md text-primary rounded-full shadow-sm border border-border/50">
            {site.category}
          </span>
        </div>

        {/* Satellite CTA */}
        <div className="absolute bottom-[5%] right-[5%] translate-x-1/4 translate-y-1/4 size-14 rounded-full bg-background text-primary flex items-center justify-center shadow-md transition-transform duration-300 group-hover:bg-[#CF4500] group-hover:text-white group-hover:scale-110 border border-border">
          <IconArrowRight
            size={24}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </Link>

      {/* Text Content */}
      <div className="text-center w-full px-4">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="size-1.5 rounded-full bg-[#F37338]"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#696969]">
            {site.category}
          </span>
        </div>
        <h3 className="font-heading text-2xl font-medium tracking-tight text-primary mb-2">
          {site.name}
        </h3>
        <p className="text-primary font-[450] opacity-80 text-sm leading-relaxed max-w-[280px] mx-auto">
          {site.description}
        </p>
      </div>
    </div>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
