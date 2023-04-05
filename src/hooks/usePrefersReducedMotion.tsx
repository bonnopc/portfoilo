import { useState, useEffect } from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";
const isRenderingOnServer = typeof window === "undefined";

const getInitialState = (): boolean =>
  isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;

/**
 * This hook will return true if the user prefers reduced motion
 * it can be used to disable animations
 * @returns {boolean} true if the user prefers reduced motion
 * @example
 * const prefersReducedMotion = usePrefersReducedMotion();
 * if (prefersReducedMotion) {
 *  // do something if the user prefers reduced motion
 * }
 */
function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(getInitialState);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };

    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
