import styles from "./IntroTexts.module.scss";

export default function IntroTexts() {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>
        <span className={styles.light}>My Name is</span> <br /> Prosenjit Chowdhury
      </h1>
      <p>
        I am a professional programmer with passion and dedication, based in Dhaka, Bangladesh. I
        have been closely working in a SDLC for the last half decade!
      </p>
    </div>
  );
}
