import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface IThemeContext {
  theme: Theme;
  setTheme?: (theme: Theme) => void;
}

const DEFAULT_THEME: Theme = "light";

const ThemeContext = createContext<IThemeContext>({
  theme: "light",
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (theme !== "dark" && document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    } else if (theme === "dark" && !document.body.classList.contains("dark")) {
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
