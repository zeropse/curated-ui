import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Terms of Service - Curated UI",
  description: "Terms of Service for Curated UI",
};

const termsSections = [
  {
    title: "1. Agreement to Terms",
    content:
      "By accessing or using Curated UI, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.",
  },
  {
    title: "2. Use of the Directory & AI Agent Skills",
    content:
      "Curated UI is provided as a free, curated resource for developers, designers, and AI coding agents. You may use the directory to discover web tools, design systems, and AI agent skills (`npx skills add ...`). You agree not to use the directory for any unlawful purpose or in any way that could damage or impair the service.",
  },
  {
    title: "3. Intellectual Property & Skill Repositories",
    content:
      "The curation, layout, design, and original content of Curated UI are protected by intellectual property rights. However, all third-party logos, trademarks, library names, and AI skill repository sources belong to their respective owners. We do not claim ownership over the external resources or open-source skills we link to.",
  },
  {
    title: "4. Disclaimer of Warranties",
    content:
      'The directory and skill references are provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or safety of third-party tools or AI agent skills listed. Always review open-source skill code before executing CLI commands.',
  },
  {
    title: "5. Limitation of Liability",
    content:
      "In no event shall Curated UI, its creators, or contributors be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the directory, or from any third-party tools or AI agent skills you discover through the platform.",
  },
  {
    title: "6. Changes to Terms",
    content:
      "We reserve the right to modify or replace these Terms at any time. We will provide notice of significant changes by updating the date at the top of this page. Your continued use of the directory after such modifications constitutes acceptance of the new terms.",
  },
];

export default function TermsPage() {
  return (
    <main
      id="main-content"
      className="max-w-4xl mx-auto px-4 py-28 md:py-36 w-full"
    >
      <Card className="border border-border/80 bg-card shadow-2xs">
        <CardHeader className="text-center pt-8 pb-4">
          <Badge
            variant="outline"
            className="mx-auto mb-4 font-mono text-xs text-accent border-accent/30 bg-accent/5"
          >
            TERMS & CONDITIONS
          </Badge>
          <CardTitle className="text-3xl md:text-5xl font-heading font-semibold tracking-tight text-foreground">
            Terms of Service
          </CardTitle>

          <CardDescription className="font-mono text-xs text-muted-foreground mt-2">
            Effective Date: August 9, 2026
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-8 pt-4 pb-8 px-6 md:px-10">
          {termsSections.map((section, index) => (
            <section
              key={section.title}
              className={index !== 0 ? "border-t border-border/60 pt-6" : ""}
            >
              <h2 className="text-lg md:text-xl font-heading font-semibold tracking-tight text-foreground mb-2">
                {section.title}
              </h2>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
