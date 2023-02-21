import Container from "../Container";
import SocialIcons from "../SocialIcons";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <Container as="footer" className={styles.root}>
      <SocialIcons />
    </Container>
  );
}
