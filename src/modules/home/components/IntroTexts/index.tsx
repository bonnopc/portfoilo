import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import Button from "@/modules/common/components/Button";
import Typography from "@/modules/common/components/Typography";
import getDifferenceBetweenDates from "@/utils/getDifferenceBetweenDates";
import { createRef, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./IntroTexts.module.scss";
import {
  KEY_DESIGNATION,
  KEY_FIRST_JOB_START_DATE,
  KEY_NAV_DELAY,
  KEY_SECTION_IDS,
} from "@/config/keys";
import useDeviceWidth from "@/hooks/useDeviceWidth";

interface IntroElements {
  nodeRef: React.RefObject<HTMLDivElement>;
  component: React.ReactNode | JSX.Element;
}

export default function IntroTexts({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const endDateTime = new Date();
  const diff = getDifferenceBetweenDates(KEY_FIRST_JOB_START_DATE, endDateTime, 0);
  const { isMobileUp } = useDeviceWidth();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsMounted(true);
      return;
    }

    const timeout = setTimeout(
      () => {
        setIsMounted(true);
      },
      isMobileUp ? KEY_NAV_DELAY : 100
    );

    return () => clearTimeout(timeout);
  }, [isMobileUp]);

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
      Embarking on a journey as a results-driven {KEY_DESIGNATION} rooted in Dhaka, Bangladesh. I
      bring over {diff} years of expertise in crafting cross-platform software applications for
      diverse organizations serving millions of users.
      {/* <br />
      <br /> My passion for technology and my commitment to staying up-to-date with the latest
      trends and best practices enable me to deliver top-quality solutions to meet the unique needs
      of each project. Whether I am working on a web application or a mobile app, I approach each
      project with the same level of enthusiasm and attention to detail, ensuring that every aspect
      of the project is executed to the highest standards. */}
    </Typography>
  );

  const button = (
    <Button
      url={{
        hash: `#${KEY_SECTION_IDS.PROJECTS}`,
      }}
      className={styles.button}
    >
      Recent Projects
    </Button>
  );

  const introElements: IntroElements[] = [subHeading, heading, description, button].map(
    (component, index) => ({
      nodeRef: createRef(),
      component,
    })
  );

  return (
    <section className={`${styles.root} ${className ?? ""}`} {...rest}>
      <TransitionGroup component={null}>
        {isMounted &&
          introElements.map((introElement, index) => (
            <CSSTransition
              nodeRef={introElement.nodeRef}
              key={index}
              timeout={2000}
              classNames="appear-from-bottom"
            >
              <div ref={introElement.nodeRef} style={{ transitionDelay: `${index + 1}00ms` }}>
                {introElement.component}
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </section>
  );
}
