import ThemeSwitch from "../ThemeSwitch";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.root}>
      <ThemeSwitch />
    </div>
  );
}
