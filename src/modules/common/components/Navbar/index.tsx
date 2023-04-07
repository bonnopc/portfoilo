import combineClassNames from "@/utils/combineClassNames";
import CommonLink from "../CommonLink";
import ThemeSwitch from "../ThemeSwitch";
import styles from "./Navbar.module.scss";
import useHideNavOnScroll from "./useHideNavOnScroll";
import { KEY_SECTION_IDS } from "@/config/keys";

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
    component: <ThemeSwitch className={styles.link} />,
    skipNavigation: true,
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
          <span />
          <span />
          <span />
        </label>
      </div>
      <div className={styles.container}>
        <div className={styles.links}>
          {NAVBAR_LINKS.map((link) =>
            link.skipNavigation && link.component ? (
              link.component
            ) : (
              <CommonLink
                href={{
                  hash: link.hash,
                }}
                key={link.label}
                as={link.hash}
                className={styles.link}
                onClick={() => {
                  // close the navbar when the user clicks on a link
                  // works only on mobile, when the navbar is collapsed
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
            )
          )}
        </div>
      </div>
    </nav>
  );
}
