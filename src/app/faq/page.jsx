import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "FAQ - Curated UI",
  description:
    "Frequently Asked Questions about Curated UI resources and AI agent skills",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Curated UI and who is it for?",
      answer:
        "Curated UI is a meticulously curated directory of modern UI components, design systems, web tools, and AI agent skills. It is built for developers and designers who want to stop endlessly searching for scattered resources and start building exceptional web products faster with AI agents.",
    },
    {
      question: "What are Popular Skills?",
      answer:
        "Popular Skills are curated capabilities, coding guidelines, and architectural patterns designed for AI coding agents. They equip AI assistants with repository guidelines, framework best practices (Next.js, Tailwind v4, Shadcn UI), and strict coding standards.",
    },
    {
      question: "How do you select the libraries and skills that get listed?",
      answer:
        "We enforce strict curation standards. Every UI resource and AI skill is manually reviewed to ensure it meets modern design standards, includes clear documentation, is actively maintained, and provides genuine value. However, as time passes, links may become outdated, removed, or relocated. Unless these changes are reported, we may not be able to update every resource immediately.",
    },
    {
      question: "How can I submit a new site or AI skill?",
      answer:
        "We welcome community submissions! To submit a new site or suggest a popular AI skill, click 'Add a Site' or 'Add a Skill' in the footer to open a GitHub issue submission template. Each submission is thoroughly reviewed before being added to the directory.",
    },
    {
      question: "Is this directory free to use?",
      answer:
        "Yes, Curated UI is completely free and open-source. We believe in keeping high-quality design resources and AI agent skills accessible to everyone.",
    },
    {
      question: "How often do you add new resources and skills?",
      answer:
        "We update the directory regularly, adding newly discovered UI gems, popular AI skills, and reviewing community submissions.",
    },
    {
      question: "Do you rank or sponsor specific libraries or skills?",
      answer:
        "No. All resources and skills are curated purely based on merit and quality. We do not accept paid placements to maintain curation integrity.",
    },
  ];

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
            SUPPORT & FAQ
          </Badge>
          <CardTitle className="text-3xl md:text-5xl font-heading font-semibold tracking-tight text-foreground">
            Frequently Asked Questions
          </CardTitle>
          <CardDescription className="text-sm md:text-base max-w-2xl mx-auto mt-3 text-muted-foreground leading-relaxed">
            Everything you need to know about how we curate, update, and manage
            our UI resources and AI agent skills.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-4 pb-8 px-6 md:px-10">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/60 last:border-0 py-1"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-base md:text-lg text-foreground hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pt-1 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </main>
  );
}
