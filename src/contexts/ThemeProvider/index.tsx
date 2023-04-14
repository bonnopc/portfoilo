import { KEY_LOCAL_STORAGE_CUSTOMIZED_THEME_PREF } from "@/config/keys";
import useThemePreference from "@/hooks/useThemePreference";
import { IThemeContext, ThemeScheme } from "@/types/common";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

export const DEFAULT_THEME: ThemeScheme = "light";

export const ThemeContext = createContext<IThemeContext>({
  theme: DEFAULT_THEME,
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: any) {
  const prefferedTheme: ThemeScheme = useThemePreference();
  const [theme, setTheme] = useState<ThemeScheme>(prefferedTheme);

  const handleTheme = useCallback((theme: ThemeScheme): void => {
    setTheme(theme);
    if (localStorage?.setItem) {
      localStorage.setItem(KEY_LOCAL_STORAGE_CUSTOMIZED_THEME_PREF, theme);
    }
  }, []);

  useEffect(() => {
    handleTheme(prefferedTheme);
  }, [prefferedTheme]);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (theme !== "dark" && document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    } else if (theme === "dark" && !document.body.classList.contains("dark")) {
      document.body.classList.add("dark");
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>;
}
