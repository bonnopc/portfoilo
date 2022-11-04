export type ThemeScheme = "dark" | "light";

export interface IThemeContext {
  theme: ThemeScheme;
  handleTheme?: (theme: ThemeScheme) => void;
}
