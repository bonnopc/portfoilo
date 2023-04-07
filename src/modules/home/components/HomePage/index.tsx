import Container from "@/modules/common/components/Container";
import IntroImage from "../IntroImage";
import IntroTexts from "../IntroTexts";
import styles from "./HomePage.module.scss";
import { KEY_SECTION_IDS } from "@/config/keys";
import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("../AboutMe"));
const Skills = dynamic(() => import("../Skills"));
const Projects = dynamic(() => import("@/modules/projects/components/Projects"));
const Works = dynamic(() => import("../Works"));
const Contact = dynamic(() => import("../Contact"));

export default function HomePage() {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <IntroImage />
        <IntroTexts id={KEY_SECTION_IDS.INTRO} />
        <AboutMe id={KEY_SECTION_IDS.ABOUT} />
        <Skills id={KEY_SECTION_IDS.SKILLS} />
        <Projects id={KEY_SECTION_IDS.PROJECTS} />
        <Works id={KEY_SECTION_IDS.WORKS} />
        <Contact id={KEY_SECTION_IDS.CONTACT} />
      </Container>
    </div>
  );
}
