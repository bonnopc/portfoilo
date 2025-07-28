import { KEY_FIRST_JOB_START_DATE, KEY_SECTION_IDS } from "@/config/keys";
import Button from "@/modules/common/components/Button";
import CommonLink from "@/modules/common/components/CommonLink";
import Typography from "@/modules/common/components/Typography";
import getDifferenceBetweenDates from "@/utils/getDifferenceBetweenDates";
import styles from "./AboutMe.module.scss";

export default function AboutMe(props: React.HTMLAttributes<HTMLDivElement>) {
  const endDateTime = new Date();
  const diff = getDifferenceBetweenDates(KEY_FIRST_JOB_START_DATE, endDateTime, 0);

  return (
    <section className={styles.root} {...props}>
      <Typography variant="h2" className={styles.heading}>
        About Me
      </Typography>
      <Typography>
        Started out tinkering with microcontrollers during engineering school—and never really
        stopped building since. What began as curiosity turned into a {diff}+ year journey through
        software, teaming up with startups and global companies to launch apps people actually use
        and rely on.
      </Typography>

      <Typography>
        Comfortable switching gears between frontend polish and backend logic, with a focus on
        building things that feel fast, look clean, and just work. Whether it’s crafting a trading
        interface, a travel booking flow, or an internal dashboard, the goal has always been the
        same: ship thoughtful products that make sense to real users. A few highlights live{" "}
        <CommonLink isInlined href="#projects">
          over here
        </CommonLink>
        .
      </Typography>

      <Typography>
        Still learning. Still building. Still excited about what software can do when it’s done
        right.
      </Typography>

      <Button
        className={styles.button}
        url={{
          hash: `#${KEY_SECTION_IDS.WORKS}`,
        }}
      >
        My workplaces
      </Button>
    </section>
  );
}
