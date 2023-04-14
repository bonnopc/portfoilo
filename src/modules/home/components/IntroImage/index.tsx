import React from "react";
import styles from "./IntroImage.module.scss";
import Image from "next/image";

const variants = {
  hidden: { opacity: 0, x: "100%", y: "-100%" },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: "-100%" },
};

export default function IntroImage() {
  return (
    <div className={styles.root}>
      <div className={styles.container + " " + styles.transparent}>
        <div className={styles.avatarContainer}>
          <Image
            className={styles.avatar}
            src="/static/images/intro-image.png"
            alt="Avatar"
            width={400}
            height={400}
            layout="responsive"
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className={styles.container} />
    </div>
  );
}
