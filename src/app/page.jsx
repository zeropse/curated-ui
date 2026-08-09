import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  IconSparkles,
  IconBolt,
  IconTerminal,
  IconCompass,
  IconArrowRight,
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
    badge: "Vetted UI",
  },
  {
    title: "AI Agent Ready",
    description:
      "Equip coding agents (Claude, Cursor, Antigravity) with repository guidelines, framework rules, and instant CLI commands.",
    icon: IconTerminal,
    badge: "Agentic Tools",
  },
  {
    title: "Fast Workflow",
    description:
      "Stop endlessly bookmarking scattered links. Instantly find categorized components, design tools, and developer capabilities.",
    icon: IconBolt,
    badge: "Developer Speed",
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
      {/* Hallmark Hero Section — Marquee Hero Macrostructure */}
      <section className="px-6 pt-28 md:px-16 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <FadeIn
            delay={0.1}
            className="flex flex-col items-center text-center"
          >
            <Badge
              variant="outline"
              className="mb-8 rounded-full border-border bg-card/80 p-3 text-xs font-medium text-foreground gap-2 shadow-xs backdrop-blur-md"
            >
              <IconSparkles size={14} className="text-accent" />
              <span>Curated Web UI & AI Skills Directory</span>
            </Badge>

            <h1 className="mx-auto max-w-5xl font-heading text-4xl font-semibold leading-[1.0] tracking-[-0.04em] text-foreground md:text-[5.5rem]">
              The curated directory
              <br />
              <span className="text-muted-foreground font-normal">
                for the modern web.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
              Discover a handpicked collection of UI libraries, design systems,
              and AI agent skills. Built for designers and developers.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button
                render={<Link href="/browse" />}
                nativeButton={false}
                className="rounded-full gap-2 px-7 py-6 text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm"
              >
                <IconCompass size={18} />
                <span>Browse Directory</span>
                <IconArrowRight size={16} />
              </Button>

              <Button
                render={<Link href="/skills" />}
                nativeButton={false}
                variant="outline"
                className="rounded-full gap-2 px-7 py-6 text-sm font-medium border-border/80 bg-card hover:bg-muted"
              >
                <IconSparkles size={18} className="text-accent" />
                <span>Explore AI Skills</span>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-16">
            <HeroCarousel />
          </FadeIn>
        </div>
      </section>

      {/* About Section — Workbench Grid Macrostructure */}
      <section
        id="about"
        className="mx-auto mt-28 max-w-[1400px] overflow-hidden rounded-[2.5rem] bg-card border border-border/80 px-6 py-20 text-card-foreground md:px-16 md:py-28 shadow-xs"
      >
        <div className="relative mx-auto max-w-6xl">
          <div className="relative">
            <FadeIn>
              <div className="flex flex-col items-center gap-4 text-center">
                <Badge
                  variant="outline"
                  className="font-mono text-xs text-accent border-accent/30 bg-accent/5"
                >
                  Purpose & Vision
                </Badge>
                <h2 className="mx-auto max-w-4xl font-heading text-3xl font-semibold leading-[1.1] tracking-[-0.035em] md:text-6xl">
                  A better way to discover
                  <br />
                  <span className="text-accent">what to build with.</span>
                </h2>

                <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg mt-2">
                  We were tired of scouring the web for high-quality components
                  and fragmented AI agent guidelines. Curated UI brings modern
                  design systems and AI coding capabilities into one seamless
                  directory.
                </p>
              </div>
            </FadeIn>

            {/* Feature Cards Grid using Shadcn Card UI Primitives */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <FadeIn key={feature.title} delay={index * 0.1}>
                    <Card className="h-full border-border/80 bg-background/50 hover:bg-background transition-colors duration-200">
                      <CardHeader className="flex flex-col items-center text-center">
                        <div className="flex size-11 items-center justify-center rounded-lg border border-border bg-card text-accent mb-4">
                          <Icon size={20} />
                        </div>

                        <CardTitle className="text-xl font-semibold tracking-tight">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="text-center">
                        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-14 flex flex-wrap justify-center gap-3">
                <Button
                  render={<Link href="/skills" />}
                  nativeButton={false}
                  variant="outline"
                  className="rounded-full gap-2 px-6 py-5 text-sm font-medium"
                >
                  <IconSparkles size={16} className="text-accent" />
                  <span>Explore Skills</span>
                </Button>

                <Button
                  render={<Link href="/browse" />}
                  nativeButton={false}
                  className="rounded-full gap-2 px-6 py-5 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm"
                >
                  <IconCompass size={16} />
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
