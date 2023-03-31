import { SECTION_ID_ABOUT_ME } from "@/modules/home/components/AboutMe";
import { SECTION_ID_CONTACT } from "@/modules/home/components/Contact";
import { SECTION_ID_INTRO } from "@/modules/home/components/IntroTexts";
import { SECTION_ID_PROJECTS } from "@/modules/home/components/Projects";
import { SECTION_ID_SKILLS } from "@/modules/home/components/Skills";
import { SECTION_ID_WORKS } from "@/modules/home/components/Works";
import combineClassNames from "@/utils/combineClassNames";
import CommonLink from "../CommonLink";
import ThemeSwitch from "../ThemeSwitch";
import styles from "./Navbar.module.scss";
import useHideNavOnScroll from "./useHideNavOnScroll";

interface NavbarLink {
  label: string;
  hash: string;
}

const NAVBAR_LINKS: NavbarLink[] = [
  {
    label: "Home",
    hash: `#${SECTION_ID_INTRO}`,
  },
  {
    label: "About",
    hash: `#${SECTION_ID_ABOUT_ME}`,
  },
  {
    label: "Skills",
    hash: `#${SECTION_ID_SKILLS}`,
  },
  {
    label: "Projects",
    hash: `#${SECTION_ID_PROJECTS}`,
  },
  {
    label: "Experience",
    hash: `#${SECTION_ID_WORKS}`,
  },
  {
    label: "Contact",
    hash: `#${SECTION_ID_CONTACT}`,
  },
];

export default function Navbar() {
  const isNavHidden = useHideNavOnScroll();

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
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className={styles.container}>
        <div className={styles.themeSwitchBtn}>
          <ThemeSwitch />
        </div>
        <div className={styles.links}>
          {NAVBAR_LINKS.map((link) => (
            <CommonLink
              href={{
                hash: link.hash,
              }}
              key={link.label}
              as={link.hash}
              className={styles.link}
              onClick={() => {
                // close the navbar when the user clicks on a link
                const navCheck: HTMLInputElement | null = document.getElementById(
                  "navCheck"
                ) as HTMLInputElement;
                if (navCheck) {
                  navCheck.checked = false;
                }
              }}
            >
              {link.label}
            </CommonLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
