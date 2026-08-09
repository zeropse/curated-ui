"use client";

import Link from "next/link";
import Image from "next/image";
import { version } from "../../../package.json";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  IconHelp,
  IconPlus,
  IconBug,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconShieldLock,
  IconFileText,
  IconArrowUpRight,
  IconSparkles,
  IconCompass,
} from "@tabler/icons-react";

const year = new Date().getFullYear();

const resourceLinks = [
  { name: "Browse Sites", href: "/browse", icon: IconCompass },
  { name: "Popular Skills", href: "/skills", icon: IconSparkles },
  { name: "FAQ", href: "/faq", icon: IconHelp },
  { name: "Privacy Policy", href: "/privacy", icon: IconShieldLock },
  { name: "Terms of Service", href: "/terms", icon: IconFileText },
];

const contributeLinks = [
  {
    name: "Add a Site",
    href: "https://github.com/zeropse/ui-zeropse/issues/new?template=site_submission.yml",
    icon: IconPlus,
  },
  {
    name: "Add a Skill",
    href: "https://github.com/zeropse/ui-zeropse/issues/new?template=skill_submission.yml",
    icon: IconSparkles,
  },
  {
    name: "Report a Bug",
    href: "https://github.com/zeropse/ui-zeropse/issues/new?template=bug_report.yml",
    icon: IconBug,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/zeropse/curated-ui",
    icon: IconBrandGithub,
  },
  { name: "Twitter", href: "https://x.com/zer0pse", icon: IconBrandX },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zeropse/",
    icon: IconBrandLinkedin,
  },
];

export function Footer() {
  return (
    <footer className="mt-32 rounded-t-4xl border-t border-border/60 bg-card/60 backdrop-blur-xl px-6 pt-24 pb-12 text-foreground md:rounded-t-[4rem] md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-1 sm:col-span-2 flex flex-col items-center text-center sm:items-start sm:text-left gap-4 md:pr-8">
            <Link
              href="/"
              className="font-heading inline-flex items-center justify-center sm:justify-start gap-2 text-2xl font-semibold tracking-tight text-foreground hover:opacity-90 transition-opacity"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/icon1.png"
                  alt="Curated UI Logo"
                  width={40}
                  height={40}
                  className="rounded-sm object-contain dark:hidden"
                />
                <Image
                  src="/icon0.svg"
                  alt="Curated UI Logo"
                  width={40}
                  height={40}
                  className="rounded-sm object-contain hidden dark:block"
                />
              </div>
              <span>
                Curated<span className="text-accent"> UI</span>
              </span>
              <Badge
                variant="outline"
                className="ml-1 font-mono text-[10px] font-medium border-accent/30 text-accent bg-accent/5 px-2 py-0.5 rounded-full"
              >
                v{version}
              </Badge>
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              A handpicked directory of modern UI component libraries, design
              systems, and AI agent skills for developers and designers building
              modern web apps.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-4">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Resources
            </h3>

            <ul className="flex flex-col items-center sm:items-start gap-1.5 w-full">
              {resourceLinks.map((link) => (
                <li
                  key={link.name}
                  className="w-full flex justify-center sm:justify-start"
                >
                  <Button
                    render={<Link href={link.href} />}
                    nativeButton={false}
                    variant="ghost"
                    className="justify-center sm:justify-start h-8 px-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 gap-2 w-full max-w-xs sm:max-w-none"
                  >
                    <link.icon
                      size={15}
                      className="text-muted-foreground/70 shrink-0"
                    />
                    <span>{link.name}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-4">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Contribute
            </h3>

            <ul className="flex flex-col items-center sm:items-start gap-1.5 w-full">
              {contributeLinks.map((link) => (
                <li
                  key={link.name}
                  className="w-full flex justify-center sm:justify-start"
                >
                  <Button
                    render={
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    nativeButton={false}
                    variant="ghost"
                    className="justify-center sm:justify-start h-8 px-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 gap-2 w-full max-w-xs sm:max-w-none group"
                  >
                    <link.icon
                      size={15}
                      className="text-muted-foreground/70 shrink-0"
                    />
                    <span className="truncate">{link.name}</span>
                    <IconArrowUpRight
                      size={13}
                      className="ml-1 sm:ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground"
                    />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row text-center sm:text-left">
          <p className="text-xs font-mono text-muted-foreground">
            © {year} Curated UI. Built for the modern web.
          </p>

          <div className="flex items-center justify-center gap-1.5">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                render={
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
                variant="outline"
                size="sm"
                className="h-8 px-3 text-xs gap-1.5 rounded-full border-border/60 hover:bg-muted/60"
              >
                <link.icon size={14} className="text-muted-foreground" />
                <span>{link.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
