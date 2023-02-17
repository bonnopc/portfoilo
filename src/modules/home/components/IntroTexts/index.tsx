import Button from "@/modules/common/components/Button";
import Typography from "@/modules/common/components/Typography";
import styles from "./IntroTexts.module.scss";

export default function IntroTexts() {
  return (
    <div className={styles.root}>
      <Typography variant="h1" className={styles.heading}>
        <span className={styles.light}>My Name is</span> <br /> Prosenjit Chowdhury
      </Typography>
      <Typography>
        I am a professional programmer with passion and dedication, based in Dhaka, Bangladesh. I
        have been closely working in a SDLC for the last half decade!
      </Typography>
      <Button className={styles.button}>Contact Me</Button>
    </div>
  );
}
