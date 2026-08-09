"use client";

import Link from "next/link";
import Image from "next/image";
import { version } from "../../../package.json";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconCompass, IconSparkles } from "@tabler/icons-react";

export function FloatingNav() {
  return (
    <header className="fixed top-4 md:top-6 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-3 sm:px-4 md:px-0">
      <nav className="flex items-center justify-between rounded-full border border-border/80 bg-background/85 px-4 py-2.5 sm:px-6 sm:py-3 backdrop-blur-xl shadow-sm transition-all duration-200">
        {/* Brand Logo & Title */}
        <Link
          href="/"
          className="font-heading flex items-center gap-2 text-base sm:text-lg font-semibold tracking-tight text-foreground hover:opacity-90 transition-opacity"
        >
          <div className="relative size-8 sm:size-9 flex-shrink-0">
            <Image
              src="/icon1.png"
              alt="Curated UI Logo"
              width={36}
              height={36}
              className="rounded-sm object-contain dark:hidden"
              priority
            />
            <Image
              src="/icon0.svg"
              alt="Curated UI Logo"
              width={36}
              height={36}
              className="rounded-sm object-contain hidden dark:block"
              priority
            />
          </div>
          <span>
            Curated<span className="text-accent"> UI</span>
          </span>
          <Badge
            variant="outline"
            className="hidden sm:inline-flex ml-1.5 font-mono text-[10px] font-medium border-accent/30 text-accent bg-accent/5 px-2 py-0.5 rounded-full"
          >
            v{version}
          </Badge>
        </Link>

        {/* Navigation Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />

          <Button
            render={<Link href="/skills" />}
            nativeButton={false}
            variant="outline"
            className="rounded-full gap-1.5 px-3.5 sm:px-4 text-xs sm:text-sm h-9 sm:h-10 border-border hover:bg-muted font-medium"
          >
            <IconSparkles size={16} className="text-accent shrink-0" />
            <span className="hidden sm:inline">Skills</span>
          </Button>

          <Button
            render={<Link href="/browse" />}
            nativeButton={false}
            className="rounded-full gap-1.5 px-3.5 sm:px-4 text-xs sm:text-sm h-9 sm:h-10 bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
          >
            <IconCompass size={16} className="shrink-0" />
            <span className="hidden sm:inline">Browse</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
