import Container from "../Container";
import GitRepoInfo from "../GitRepoInfo";
import SocialIcons from "../SocialIcons";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <Container as="footer" className={styles.root}>
      <SocialIcons />
      <GitRepoInfo />
    </Container>
  );
}
