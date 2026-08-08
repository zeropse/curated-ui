import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  IconSparkles,
  IconBolt,
  IconTerminal,
  IconCompass,
} from "@tabler/icons-react";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "Curated UI - Directory of Web UI Resources & AI Agent Skills",
  description:
    "Discover a handpicked collection of modern UI libraries, design systems, and AI agent skills to build exceptional web applications faster.",
  openGraph: {
    title: "Curated UI - Directory of Web UI Resources & AI Agent Skills",
    description:
      "Discover a handpicked collection of modern UI libraries, design systems, and AI agent skills to build exceptional web applications faster.",
  },
};

const features = [
  {
    title: "Handpicked Quality",
    description:
      "Every library, UI kit, and AI skill is manually vetted for modern aesthetics, clean documentation, and active maintenance.",
    icon: IconSparkles,
  },
  {
    title: "AI Agent Ready",
    description:
      "Equip coding agents (Claude, Cursor, Antigravity) with repository guidelines, framework rules, and instant CLI commands.",
    icon: IconTerminal,
  },
  {
    title: "Fast Workflow",
    description:
      "Stop endlessly bookmarking scattered links. Instantly find categorized components, design tools, and developer capabilities.",
    icon: IconBolt,
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Curated UI",
    url: "https://ui.zeropse.me",
    description:
      "A hand-curated directory of modern UI components, design systems, and AI agent skills.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ui.zeropse.me/browse?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="px-6 pt-24 md:px-16 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <FadeIn delay={0.1} className="text-center">
            <Badge
              variant="outline"
              className="mb-8 rounded-full border-border bg-background p-4 text-xs font-medium"
            >
              <IconSparkles className="text-orange-500" />
              Modern UI Directory
            </Badge>

            <h1 className="mx-auto max-w-5xl font-heading text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-[6.5rem]">
              The curated directory
              <br />
              for the modern web.
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Discover a handpicked collection of UI libraries, design systems,
              and AI agent skills. Built for designers and developers.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-16">
            <HeroCarousel />
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto mt-24 max-w-[1400px] overflow-hidden rounded-[3rem] bg-neutral-950 px-6 py-20 text-white md:px-16 md:py-28"
      >
        <div className="relative mx-auto max-w-6xl">
          {/* subtle grid */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

          <div className="relative">
            <FadeIn>
              <div className="flex flex-col gap-6">
                <h2 className="mx-auto max-w-4xl text-center font-heading text-4xl font-medium leading-[1.05] tracking-[-0.05em] md:text-7xl">
                  A better way to discover
                  <span className="text-orange-500"> what to build with.</span>
                </h2>

                <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-neutral-400 md:text-xl">
                  We were tired of scouring the web for high-quality components
                  and fragmented AI agent guidelines. Curated UI brings modern
                  design systems and AI coding capabilities into one seamless
                  directory.
                </p>
              </div>
            </FadeIn>

            <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <FadeIn key={feature.title} delay={index * 0.1}>
                    <div className="group flex h-full flex-col justify-between bg-neutral-950 p-8 transition-colors hover:bg-neutral-900">
                      <div>
                        <div className="mb-10 flex items-center justify-between">
                          <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-orange-400">
                            <Icon size={22} />
                          </div>

                          <span className="text-sm font-mono text-white/30">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="font-heading text-2xl font-medium tracking-tight">
                          {feature.title}
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Button
                  render={<Link href="/skills" />}
                  nativeButton={false}
                  variant="outline"
                  className="rounded-full gap-2 px-7 py-6 text-base font-medium border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <IconSparkles size={18} className="text-orange-500" />
                  <span>Explore Skills</span>
                </Button>

                <Button
                  render={<Link href="/browse" />}
                  nativeButton={false}
                  className="rounded-full gap-2 px-7 py-6 text-base font-medium"
                >
                  <IconCompass size={18} />
                  <span>Browse Directory</span>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
