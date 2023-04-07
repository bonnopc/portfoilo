import Button from "@/modules/common/components/Button";
import Typography from "@/modules/common/components/Typography";
import styles from "./Contact.module.scss";

export default function Contact(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={styles.root} {...props}>
      <Typography variant="h2">Get in Touch</Typography>
      <Typography>
        Let's connect! If you have any questions or would like to learn more about my experience and
        skills as a Full Stack Engineer, please reach out to me via the contact form or email.
      </Typography>
      <Button url="mailto:prosenjit.chy10@gmail.com" className={styles.button}>
        Contact Me
      </Button>
    </section>
  );
}
