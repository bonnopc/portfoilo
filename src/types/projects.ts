import { KEY_SKILLS } from "@/config/keys";
export type ISkill = typeof KEY_SKILLS[number];

export interface IProject {
  id: string;
  name: string;
  description?: string;
  responsibilities: string[];
  technologies: (ISkill | string)[];
  link?: string;
  github?: string;
  image?: string;
  links?: {
    name: string;
    url: string;
  }[];
}
