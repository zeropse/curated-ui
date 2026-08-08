"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className, ...props }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("size-10 rounded-full", className)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      {...props}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 1 : 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            rotate: isDark ? 180 : 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
        >
          {isDark ? <IconMoon size={20} /> : <IconSun size={20} />}
        </motion.div>
      </motion.div>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
