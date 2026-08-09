import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Privacy Policy - Curated UI",
  description: "Privacy Policy for Curated UI",
};

const privacySections = [
  {
    title: "1. Introduction",
    content:
      'Welcome to Curated UI ("we," "our," or "us"). We respect your privacy and are deeply committed to protecting it. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information that you may provide via our directory of UI resources and AI agent skills.',
  },
  {
    title: "2. The Data We Collect",
    content:
      "We believe in data minimization. We do not track, collect, or store any personally identifiable information from our visitors. We use simple, privacy-respecting analytics (which do not use cookies or collect IP addresses) solely to understand overall website traffic and usage patterns.",
  },
  {
    title: "3. Third-Party Links & AI Skill Repositories",
    content:
      "Our core service provides curated links to third-party web tools, design systems, and external GitHub/skills.sh repositories. When you click on these links or copy CLI commands, you may interact with third-party sites or repositories. We strongly advise you to review the Privacy Policy of every external service you visit or install.",
  },
  {
    title: "4. Data Security",
    content:
      "While we do not collect personal data, we still prioritize the security of our platform. We use commercially acceptable means to protect our website and ensure it remains a safe directory for all users.",
  },
  {
    title: "5. Changes to This Privacy Policy",
    content:
      'We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this Privacy Policy periodically for any changes.',
  },
];

export default function PrivacyPage() {
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
            LEGAL & PRIVACY
          </Badge>
          <CardTitle className="text-3xl md:text-5xl font-heading font-semibold tracking-tight text-foreground">
            Privacy Policy
          </CardTitle>

          <CardDescription className="font-mono text-xs text-muted-foreground mt-2">
            Effective Date: August 9, 2026
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-8 pt-4 pb-8 px-6 md:px-10">
          {privacySections.map((section, index) => (
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
