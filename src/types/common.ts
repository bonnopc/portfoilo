export type ThemeScheme = "dark" | "light";

export interface IThemeContext {
  theme: ThemeScheme;
  handleTheme?: (theme: ThemeScheme) => void;
}

export interface WorkplaceCompany {
  name: string;
  url?: string;
}

export interface Workplace {
  id?: string;
  company: WorkplaceCompany;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  keyRoles: string[];
}
