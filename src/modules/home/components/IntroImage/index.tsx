import styles from "./IntroImage.module.scss";

export default function IntroImage() {
  return (
    <div className={styles.root}>
      <div className={styles.bg}></div>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatar}
          src="/static/images/into-image.jpg"
          alt="Avatar"
        />
      </div>
    </div>
  );
}
