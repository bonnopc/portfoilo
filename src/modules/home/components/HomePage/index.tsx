import Container from "@/modules/common/components/Container";
import IntroImage from "../IntroImage";
import IntroTexts from "../IntroTexts";
import Projects from "../Projects";
import Skills from "../Skills";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <IntroImage />
        <IntroTexts />
        <Skills />
        <Projects />
      </Container>
    </div>
  );
}
