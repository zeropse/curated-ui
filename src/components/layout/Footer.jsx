"use client";

import Link from "next/link";
import Image from "next/image";
import { version } from "../../../package.json";
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
  { name: "Explore Sites", href: "/explore", icon: IconCompass },
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
    <footer className="mt-32 rounded-t-4xl border-t border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur-xl px-6 pt-24 pb-12 text-foreground md:rounded-t-[5rem] md:px-12 shadow-sm">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2 flex flex-col items-center gap-4 text-center md:col-span-2 md:items-start md:pr-8 md:text-left">
            <Link
              href="/"
              className="font-heading inline-flex items-center gap-1 rounded-sm text-3xl font-medium tracking-tight text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/icon1.png"
                  alt="Curated UI Logo"
                  width={50}
                  height={50}
                  className="rounded-sm object-contain dark:hidden"
                />
                <Image
                  src="/icon0.svg"
                  alt="Curated UI Logo"
                  width={50}
                  height={50}
                  className="rounded-sm object-contain hidden dark:block"
                />
              </div>
              <span>
                Curated<span className="text-orange-500"> UI</span>
              </span>
              <span className="ml-1.5 rounded-full bg-orange-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-orange-500 border border-orange-500/20">
                v{version}
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground/90 max-w-sm">
              A carefully curated collection of modern UI libraries, AI agent
              skills, design systems, and developer tools. Everything you need
              to build exceptional products with AI.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground/70">
              Resources
            </h3>

            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 py-0.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <link.icon
                      size={16}
                      className="text-muted-foreground/70 group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    />
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground/70">
              Contribute
            </h3>

            <ul className="flex flex-col gap-2.5">
              {contributeLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 py-0.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <link.icon
                      size={16}
                      className="text-muted-foreground/70 group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    />
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      {link.name}
                    </span>
                    <IconArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-muted-foreground group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-xs font-mono text-muted-foreground/80">
            © {year} Curated UI. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 border border-transparent hover:border-border/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <link.icon
                  size={15}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                  aria-hidden="true"
                />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
