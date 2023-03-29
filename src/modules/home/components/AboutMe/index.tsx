import Button from "@/modules/common/components/Button";
import Typography from "@/modules/common/components/Typography";
import { SECTION_ID_PROJECTS } from "../Projects";
import styles from "./AboutMe.module.scss";

export const SECTION_ID_ABOUT_ME = "about-me";

export default function AboutMe(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={styles.root} {...props}>
      <Typography variant="h2" className={styles.heading}>
        About Me
      </Typography>
      <Typography>
        I am an experienced Senior Frontend Engineer with over 4 years of industry experience. I've
        worked with various companies to improve my skills in building websites and applications. I
        specialize in using modern tools and frameworks like React, Vue.js, Next.js, Nuxt.js,
        Material UI, SASS, and Stylus.
      </Typography>

      <Typography>
        Currently, I am part of the team at Multipyr where we are building a web3 protocol that
        empowers people to grow their money. My passion for coding and working with microcontrollers
        during my studies in Electrical & Electronics Engineering led me to explore the world of web
        development, and I have been committed to staying at the forefront of industry developments
        ever since.
      </Typography>

      <Typography>
        My career goal is to build applications that truly understand and solve users' pain points.
        I aspire to be a part of a team that creates innovative, user-centric products that make a
        meaningful impact in people's lives. I am dedicated to continually expanding my knowledge
        and expertise in frontend development, and am excited to collaborate with like-minded
        individuals and teams to create transformative products that push the boundaries of what's
        possible.
      </Typography>

      <Button
        className={styles.button}
        url={{
          hash: `#${SECTION_ID_PROJECTS}`,
        }}
      >
        Recent Projects
      </Button>
    </section>
  );
}
