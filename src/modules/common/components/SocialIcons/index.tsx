import DevToIcon from "@/assets/icons/social-icons/dev-badge.svg";
import LinkedInIcon from "@/assets/icons/social-icons/linkedin.svg";
import TwitterIcon from "@/assets/icons/social-icons/twitter.svg";
import GithubIcon from "@/assets/icons/social-icons/github.svg";
import StackoverflowIcon from "@/assets/icons/social-icons/stackoverflow.svg";
import IconButton from "../IconButton";
import styles from "./SocialIcons.module.scss";
import Typography from "../Typography";

const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/in/bonnopc",
    name: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://twitter.com/bonnopc",
    icon: TwitterIcon,
    name: "Twitter",
  },
  {
    href: "https://dev.to/bonnopc",
    icon: DevToIcon,
    name: "Dev.to",
  },
  {
    href: "https://stackoverflow.com/users/7430118/bonnopc",
    icon: StackoverflowIcon,
    name: "Stackoverflow",
  },
  {
    href: "https://github.com/pchy10",
    icon: GithubIcon,
    name: "Github",
  },
];

export default function SocialIcons() {
  return (
    <div className={styles.root}>
      <Typography>Find me on these platforms</Typography>
      <div className={styles.container}>
        {SOCIAL_LINKS.map(({ href, icon: Icon, name }) => (
          <IconButton aria-label={name} size="large" as="a" key={href} url={href} urlOpensInNewTab>
            <Icon width={24} height={24} />
          </IconButton>
        ))}
      </div>
    </div>
  );
}
