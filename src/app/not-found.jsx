import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowLeft } from "@tabler/icons-react";

export const metadata = {
  title: "404 - Page Not Found | Curated UI",
  description: "The requested page could not be found on Curated UI.",
};

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-md w-full mx-auto relative">
        <div className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md p-8 sm:p-10 shadow-sm flex flex-col items-center space-y-6">
          <div className="relative py-1">
            <span className="font-mono font-bold text-7xl sm:text-8xl tracking-tighter text-accent select-none leading-none">
              404
            </span>
          </div>

          <div className="space-y-2 max-w-xs">
            <h1 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Page not found
            </h1>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              The page you are looking for doesn&apos;t exist or has been
              relocated.
            </p>
          </div>

          <div className="pt-2 w-full">
            <Button
              render={<Link href="/" />}
              nativeButton={false}
              size="lg"
              className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-6 font-medium text-xs font-mono tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-xs"
            >
              <IconArrowLeft className="size-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
