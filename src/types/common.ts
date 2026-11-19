export type ThemeScheme = "dark" | "light";

export interface IThemeContext {
  theme: ThemeScheme;
  handleTheme?: (theme: ThemeScheme) => void;
}

export interface IWorkplaceCompany {
  name: string;
  url?: string;
}

export interface IWorkplace {
  id?: string;
  company: IWorkplaceCompany;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  keyRoles: string[];
  technologies: string;
}
