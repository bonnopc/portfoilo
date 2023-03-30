import { useEffect, useState } from "react";

/**
 * Hook that hides the navbar when the user scrolls down and shows it when the user scrolls up.
 * @returns {boolean} Whether the navbar is hidden or not.
 **/
export default function useHideNavOnScroll(): boolean {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > lastScrollPosition) {
        setIsNavHidden(true);
      } else {
        setIsNavHidden(false);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  return isNavHidden;
}
