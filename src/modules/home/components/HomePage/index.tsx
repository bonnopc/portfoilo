import Container from "@/modules/common/components/Container";
import AboutMe, { SECTION_ID_ABOUT_ME } from "../AboutMe";
import Contact, { SECTION_ID_CONTACT } from "../Contact";
import IntroImage from "../IntroImage";
import IntroTexts, { SECTION_ID_INTRO } from "../IntroTexts";
import Projects, { SECTION_ID_PROJECTS } from "../Projects";
import Skills, { SECTION_ID_SKILLS } from "../Skills";
import Works, { SECTION_ID_WORKS } from "../Works";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <IntroImage />
        <IntroTexts id={SECTION_ID_INTRO} />
        <AboutMe id={SECTION_ID_ABOUT_ME} />
        <Skills id={SECTION_ID_SKILLS} />
        <Projects id={SECTION_ID_PROJECTS} />
        <Works id={SECTION_ID_WORKS} />
        <Contact id={SECTION_ID_CONTACT} />
      </Container>
    </div>
  );
}
