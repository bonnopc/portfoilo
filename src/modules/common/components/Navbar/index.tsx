import combineClassNames from "@/utils/combineClassNames";
import CommonLink from "../CommonLink";
import ThemeSwitch from "../ThemeSwitch";
import styles from "./Navbar.module.scss";
import useHideNavOnScroll from "./useHideNavOnScroll";
import { KEY_SECTION_IDS } from "@/config/keys";
import { createRef, isValidElement, useEffect, useMemo, useState } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface NavbarLink {
  label?: string;
  hash?: string;
  component?: React.ReactNode;
  skipNavigation?: boolean;
}

const NAVBAR_LINKS: NavbarLink[] = [
  {
    label: "Home",
    hash: `#${KEY_SECTION_IDS.INTRO}`,
  },
  {
    label: "About",
    hash: `#${KEY_SECTION_IDS.ABOUT}`,
  },
  {
    label: "Skills",
    hash: `#${KEY_SECTION_IDS.SKILLS}`,
  },
  {
    label: "Projects",
    hash: `#${KEY_SECTION_IDS.PROJECTS}`,
  },
  {
    label: "Experience",
    hash: `#${KEY_SECTION_IDS.WORKS}`,
  },
  {
    label: "Contact",
    hash: `#${KEY_SECTION_IDS.CONTACT}`,
  },
  {
    component: <ThemeSwitch />,
    skipNavigation: true,
  },
];

export default function Navbar() {
  const isNavHidden = useHideNavOnScroll();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const collapseNavbarForMobile = () => {
    // close the navbar when the user clicks on a link
    // works only on mobile, when the navbar is collapsed
    const navCheck: HTMLInputElement | null = document.getElementById(
      "navCheck"
    ) as HTMLInputElement;
    if (navCheck) {
      navCheck.checked = false;
    }
  };

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

  const navLinksWithRef = useMemo(() => {
    return NAVBAR_LINKS.map((link) => ({
      ...link,
      nodeRef: createRef<HTMLDivElement>(),
    }));
  }, []);

  const renderNavLink = (link: NavbarLink, i: number) => {
    if (link.skipNavigation) {
      return link.component;
    }

    return (
      <CommonLink
        href={{
          hash: link.hash,
        }}
        key={link.label}
        as={link.hash}
        onClick={collapseNavbarForMobile}
      >
        {link.label}
      </CommonLink>
    );
  };

  return (
    <nav
      className={combineClassNames(styles, {
        root: true,
        hidden: isNavHidden,
        // hide box-shadow when the navbar is on top
        hideShadow: typeof window !== "undefined" ? window.pageYOffset < 30 : true,
      })}
    >
      <input type="checkbox" id="navCheck" className={styles.navCheck} />
      <div className={styles.navBtn}>
        <label htmlFor={"navCheck"}>
          <span />
          <span />
          <span />
        </label>
      </div>
      <div className={styles.container}>
        <div className={styles.links}>
          <TransitionGroup component={null}>
            {isMounted &&
              navLinksWithRef.map((link, i) => (
                <CSSTransition nodeRef={link.nodeRef} key={i} timeout={1000} classNames="fade">
                  {link.skipNavigation && isValidElement(link.component) ? (
                    <span
                      ref={link.nodeRef}
                      key={link.label}
                      style={{ transitionDelay: `${i + 1}00ms` }}
                    >
                      {link.component}
                    </span>
                  ) : (
                    <CommonLink
                      href={{
                        hash: link.hash,
                      }}
                      key={link.label}
                      as={link.hash}
                      className={styles.link}
                      onClick={collapseNavbarForMobile}
                      ref={link.nodeRef}
                      style={{ transitionDelay: `${i + 1}00ms` }}
                    >
                      {link.label}
                    </CommonLink>
                  )}
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
      </div>
    </nav>
  );
}
