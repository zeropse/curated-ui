"use client";

import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [size, setSize] = useState({ width: 1024, height: 768 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width: size.width,
    height: size.height,
    lessThan: (breakpoint) => {
      const breakpoints = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      };
      return size.width < (breakpoints[breakpoint] || 768);
    },
  };
}
