import { getTopTechnologies } from "@/utils/getTopTechnologies";

export const KEY_APP_NAME: string = "Prosenjit Chowdhury";
export const KEY_LOCAL_STORAGE_CUSTOMIZED_THEME_PREF: string = "customized-theme";
export const KEY_SKILLS: readonly string[] = getTopTechnologies(32);
export enum KEY_SECTION_IDS {
  INTRO = "intro",
  ABOUT = "about",
  SKILLS = "skills",
  PROJECTS = "projects",
  WORKS = "works",
  CONTACT = "contact",
}
export const KEY_NAV_DELAY: number = 1000;
export const KEY_DESIGNATION: string = "Full Stack Engineer";
export const KEY_FIRST_JOB_START_DATE: Date = new Date("2017-09-01T00:00:00.000Z");
