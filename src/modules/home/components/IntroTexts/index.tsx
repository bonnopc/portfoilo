import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import Button from "@/modules/common/components/Button";
import Typography from "@/modules/common/components/Typography";
import getDifferenceBetweenDates from "@/utils/getDifferenceBetweenDates";
import { createRef, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SECTION_ID_ABOUT_ME } from "../AboutMe";
import styles from "./IntroTexts.module.scss";

interface IntroElements {
  nodeRef: React.RefObject<HTMLDivElement>;
  component: React.ReactNode | JSX.Element;
}

export const SECTION_ID_INTRO = "intro";

export default function IntroTexts({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const startDateTime = new Date("2018-09-01T00:00:00.000Z");
  const endDateTime = new Date();
  const diff = getDifferenceBetweenDates(startDateTime, endDateTime);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsMounted(true);
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const subHeading = (
    <Typography variant="h5" className={styles.subHeading}>
      Hello, I am
    </Typography>
  );

  const heading = (
    <Typography variant="h1" className={styles.heading}>
      Prosenjit Chowdhury
    </Typography>
  );

  const description = (
    <Typography>
      I pride myself on being a results-driven full-stack developer based in Dhaka, Bangladesh, with
      over {diff} years of experience in creating cross-platform software applications for various
      companies.
      <br />
      <br /> My passion for technology and my commitment to staying up-to-date with the latest
      trends and best practices enable me to deliver top-quality solutions to meet the unique needs
      of each project. Whether I am working on a web application or a mobile app, I approach each
      project with the same level of enthusiasm and attention to detail, ensuring that every aspect
      of the project is executed to the highest standards.
    </Typography>
  );

  const button = (
    <Button
      url={{
        hash: `#${SECTION_ID_ABOUT_ME}`,
      }}
      className={styles.button}
    >
      About Me
    </Button>
  );

  const introElements: IntroElements[] = [
    {
      nodeRef: createRef(),
      component: subHeading,
    },
    {
      nodeRef: createRef(),
      component: heading,
    },
    {
      nodeRef: createRef(),
      component: description,
    },
    {
      nodeRef: createRef(),
      component: button,
    },
  ];

  return (
    <section className={`${styles.root} ${className ?? ""}`} {...rest}>
      <TransitionGroup component={null}>
        {isMounted &&
          introElements.map((introElement, index) => (
            <CSSTransition
              nodeRef={introElement.nodeRef}
              key={index}
              timeout={1000}
              classNames="fade"
            >
              <div ref={introElement.nodeRef} style={{ transitionDelay: `${index * 3 + 1}00ms` }}>
                {introElement.component}
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </section>
  );
}
