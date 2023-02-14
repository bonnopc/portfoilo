import Chip from "@/modules/common/components/Chip";
import Container from "@/modules/common/components/Container";
import IntroImage from "../IntroImage";
import IntroTexts from "../IntroTexts";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <IntroImage />
        <IntroTexts />
        <div className={styles.skills}>
          <Chip color="primary">Primary Contained</Chip>
          <Chip color="secondary">secondary Contained</Chip>
          <Chip color="transparent">transparent Contained</Chip>
        </div>
        <div className={styles.skills}>
          <Chip color="primary" variant="outlined">
            Primary outlined
          </Chip>
          <Chip color="secondary" variant="outlined">
            secondary outlined
          </Chip>
          <Chip color="transparent" variant="outlined">
            transparent outlined
          </Chip>
        </div>

        <div className={styles.skills}>
          <Chip size="large">Large Sized</Chip>
          <Chip size="large">Medium sized</Chip>
          <Chip size="small">Small sized</Chip>
          <Chip url="/hello">Clickable</Chip>
          <Chip url="/hello" color="transparent">
            Clickable
          </Chip>
        </div>
      </Container>
    </div>
  );
}
