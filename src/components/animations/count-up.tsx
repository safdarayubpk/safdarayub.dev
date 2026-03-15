"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useReducedMotion, useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  className?: string;
}

export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  // Extract numeric part and suffix (e.g., "23+" -> 23, "+")
  const match = value.match(/^(\d+)(.*)$/);
  const numericValue = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [displayValue, setDisplayValue] = useState(() => {
    // If reduced motion or non-numeric, show final value immediately
    if (shouldReduceMotion || numericValue === null) return value;
    return `0${suffix}`;
  });

  const animate = useCallback(() => {
    if (hasAnimated.current || numericValue === null) return;
    hasAnimated.current = true;

    let current = 0;
    const duration = 1500;
    const steps = 30;
    const increment = numericValue / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(`${Math.floor(current)}${suffix}`);
      }
    }, stepTime);
  }, [numericValue, suffix, value]);

  useEffect(() => {
    if (isInView && !shouldReduceMotion && numericValue !== null) {
      animate();
    }
  }, [isInView, shouldReduceMotion, numericValue, animate]);

  // For reduced motion or non-numeric values, always show final value
  if (shouldReduceMotion || numericValue === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
