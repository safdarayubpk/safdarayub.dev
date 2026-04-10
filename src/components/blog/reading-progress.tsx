"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    function updateProgress() {
      const article = document.querySelector("article");
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleHeight = rect.height;
      const scrolled = window.scrollY - articleTop;
      const total = articleHeight - window.innerHeight;

      if (scrolled <= 0) {
        setProgress(0);
      } else if (scrolled >= total) {
        setProgress(100);
      } else {
        setProgress((scrolled / total) * 100);
      }
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-muted"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
