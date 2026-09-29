import { useEffect, useState } from "react";

/**
 * Tracks the user's `prefers-reduced-motion` setting reactively.
 *
 * The CSS in index.css handles pure-CSS animation loops, but anything driven
 * by requestAnimationFrame or Framer Motion has to be gated in JS. Pair this
 * with Framer's <MotionConfig reducedMotion="user"> for the motion library.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (!window.matchMedia) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return prefersReduced;
}
