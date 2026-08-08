import { Inter, Inter_Tight } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "@/components/layout/Footer";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  metadataBase: new URL("https://ui.zeropse.me"),
  title: {
    template: "%s | Curated UI",
    default: "Curated UI - Directory of Web UI Resources & AI Agent Skills",
  },
  description:
    "A hand-curated directory of modern UI libraries, design systems, web tools, and AI agent skills for developers building with AI.",
  appleWebApp: {
    title: "Curated UI",
  },
  keywords: [
    "Curated UI",
    "UI Directory",
    "AI Agent Skills",
    "Design Systems",
    "Tailwind CSS v4",
    "Next.js App Router",
    "Shadcn UI",
    "Web Components",
    "Developer Tools",
    "Frontend Resources",
  ],
  authors: [{ name: "Curated UI" }],
  creator: "Curated UI",
  publisher: "Curated UI",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ui.zeropse.me",
    title: "Curated UI - Directory of Web UI Resources & AI Agent Skills",
    description:
      "A hand-curated directory of modern UI libraries, design systems, web tools, and AI agent skills for developers building with AI.",
    siteName: "Curated UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Curated UI - Modern UI Directory & AI Agent Skills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curated UI - Directory of Web UI Resources & AI Agent Skills",
    description:
      "A hand-curated directory of modern UI libraries, design systems, web tools, and AI agent skills for developers building with AI.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, interTight.variable)}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-primary focus:font-medium focus:rounded-md focus:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Skip to main content
            </a>
            {/* Ghost Website Name in Background */}
            <div className="fixed inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
              <span className="font-heading text-[15vw] md:text-[20vw] font-bold text-primary opacity-[0.02] dark:opacity-[0.03] select-none whitespace-nowrap tracking-tighter">
                CURATED UI.
              </span>
            </div>
            <FloatingNav />
            {children}
            <Footer />
            <ScrollToTop />
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
