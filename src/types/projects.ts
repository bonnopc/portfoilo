import { KEY_SKILLS } from "@/config/keys";
export type ISkill = typeof KEY_SKILLS[number];

export interface IProject {
  id: string;
  title: string;
  description: string;
  skills: ISkill[];
  link?: string;
  github?: string;
  image?: string;
}
