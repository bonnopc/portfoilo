import { KEY_LOCAL_STORAGE_CUSTOMIZED_THEME_PREF } from "@/config/keys";
import { ThemeScheme } from "@/types/common";
import { useEffect, useState } from "react";

/**
 * This hook will return the theme scheme.
 * It will return "dark" if the user prefers dark theme
 * and "light" if the user prefers light theme.
 * It can also sync and save the theme scheme to localStorage
 * @returns {ThemeScheme} theme scheme
 * @example
 * const themeScheme = useThemePreference();
 * if (themeScheme === "dark") {
 *  // do something for dark theme
 * } else {
 *  // do something for light theme
 * }
 */
export default function useThemePreference(): ThemeScheme {
  const [themeScheme, setThemeShceme] = useState<ThemeScheme>("dark");

  const handleThemeChange = (): void => {
    setThemeShceme(
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prevCustomizedThemeScheme: string | null = localStorage.getItem(
      KEY_LOCAL_STORAGE_CUSTOMIZED_THEME_PREF
    );

    if (prevCustomizedThemeScheme) {
      setThemeShceme(prevCustomizedThemeScheme === "dark" ? "dark" : "light");
    } else {
      handleThemeChange();
    }

    // watch events for color scheme change
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleThemeChange);

    () => {
      // remove event listener
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleThemeChange);
    };
  }, [typeof window]);

  return themeScheme;
}
