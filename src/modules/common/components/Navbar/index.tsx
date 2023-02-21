import ThemeSwitch from "../ThemeSwitch";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.root}>
      <ThemeSwitch />
    </nav>
  );
}
