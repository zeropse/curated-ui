import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The requested page could not be found",
};

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <Card className="max-w-md w-full border border-border/80 bg-card shadow-2xs p-6 text-center">
        <CardHeader className="pb-4">
          <Badge
            variant="outline"
            className="mx-auto mb-2 font-mono text-xs text-accent border-accent/30 bg-accent/5"
          >
            404 ERROR
          </Badge>
          <CardTitle className="font-heading text-6xl md:text-7xl font-semibold text-foreground tracking-tight">
            404
          </CardTitle>
          <CardDescription className="text-sm md:text-base text-muted-foreground mt-2">
            We couldn&apos;t find the page you were looking for.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2 pb-2 flex justify-center">
          <Button
            render={<Link href="/" />}
            nativeButton={false}
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-6 font-medium text-sm"
          >
            Return Home
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
