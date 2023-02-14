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
          <Chip color="white">white</Chip>
          <Chip color="black">black</Chip>
          <Chip color="gray">gray</Chip>
          <Chip color="red">red</Chip>
          <Chip color="orange">orange</Chip>
          <Chip color="yellow">yellow</Chip>
          <Chip color="green">green</Chip>
          <Chip color="teal">teal</Chip>
          <Chip color="blue">blue</Chip>
          <Chip color="cyan">cyan</Chip>
          <Chip color="purple">purple</Chip>
          <Chip color="pink">pink</Chip>
          <Chip color="transparent">transparent</Chip>
          <Chip color="primary">primary</Chip>
          <Chip color="secondary">secondary</Chip>
        </div>
        <div className={styles.skills}>
          <Chip color="white" variant="outlined">
            white
          </Chip>
          <Chip color="black" variant="outlined">
            black
          </Chip>
          <Chip color="gray" variant="outlined">
            gray
          </Chip>
          <Chip color="red" variant="outlined">
            red
          </Chip>
          <Chip color="orange" variant="outlined">
            orange
          </Chip>
          <Chip color="yellow" variant="outlined">
            yellow
          </Chip>
          <Chip color="green" variant="outlined">
            green
          </Chip>
          <Chip color="teal" variant="outlined">
            teal
          </Chip>
          <Chip color="blue" variant="outlined">
            blue
          </Chip>
          <Chip color="cyan" variant="outlined">
            cyan
          </Chip>
          <Chip color="purple" variant="outlined">
            purple
          </Chip>
          <Chip color="pink" variant="outlined">
            pink
          </Chip>
          <Chip color="transparent" variant="outlined">
            transparent
          </Chip>
          <Chip color="primary" variant="outlined">
            primary
          </Chip>
          <Chip color="secondary" variant="outlined">
            secondary
          </Chip>
        </div>
      </Container>
    </div>
  );
}
