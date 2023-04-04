import { KEY_SKILLS } from "@/config/keys";
export type ISkill = typeof KEY_SKILLS[number];

export interface IProject {
  id: string;
  name: string;
  responsibilities: string[];
  technologies: (ISkill | string)[];
  link?: string;
  github?: string;
  image?: string;
}
