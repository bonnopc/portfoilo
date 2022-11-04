import { useTheme } from "@/contexts/ThemeProvider";
import Switch from "../Switch";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.root}>
      <Switch
        checked={theme === "dark"}
        onChange={(val) => {
          setTheme!(val ? "dark" : "light");
        }}
      />
    </div>
  );
}
