import Button from "@/modules/common/components/Button";
import Typography from "@/modules/common/components/Typography";
import styles from "./AboutMe.module.scss";
import { KEY_DESIGNATION, KEY_FIRST_JOB_START_DATE, KEY_SECTION_IDS } from "@/config/keys";
import getDifferenceBetweenDates from "@/utils/getDifferenceBetweenDates";
import CommonLink from "@/modules/common/components/CommonLink";

export default function AboutMe(props: React.HTMLAttributes<HTMLDivElement>) {
  const endDateTime = new Date();
  const diff = getDifferenceBetweenDates(KEY_FIRST_JOB_START_DATE, endDateTime, 0);

  return (
    <section className={styles.root} {...props}>
      <Typography variant="h2" className={styles.heading}>
        About Me
      </Typography>
      <Typography>
        I am an experienced {KEY_DESIGNATION} with over {diff} years of industry experience. I've
        worked with various companies to improve or learn skills in building cross-platform
        applications as well as several web applications. I specialize in using modern tools and
        frameworks like React, Node.js, Redux, Flutter, Vue.js, Next.js, Nuxt.js, Express.js,
        Material UI, SASS, Tailwind CSS, Stylus, etc. Currently, I am part of the team at Multiplyr
        Inc. where we are building a web3 protocol,{" "}
        <CommonLink href={`https://affinedefi.com/`} target="_blank" hideExternalLinkIcon>
          Affine
        </CommonLink>
        , that empowers people to grow their money.
      </Typography>

      <Typography>
        My passion for coding and working with microcontrollers during my studies in Electrical &
        Electronics Engineering led me to explore the world of software engineering, and I have been
        committed to staying at the forefront of industry developments ever since. So far, I have
        been part of multiple teams that have built some awesome products that I feel proud of. You
        can{" "}
        <CommonLink isInlined href="#projects">
          get to know most of them from here
        </CommonLink>
        .
      </Typography>

      <Typography>
        My career goal is to build applications that truly understand and solve users' pain points.
        I aspire to be a part of a team that creates innovative, user-centric products that make a
        meaningful impact on people's lives. I am dedicated to continually expanding my knowledge
        and expertise in software development and am excited to collaborate with like-minded
        individuals and teams to create transformative products that push the boundaries of what's
        possible.
      </Typography>

      <Button
        className={styles.button}
        url={{
          hash: `#${KEY_SECTION_IDS.PROJECTS}`,
        }}
      >
        Recent Projects
      </Button>
    </section>
  );
}
