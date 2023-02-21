import combineClassNames from "@/utils/combineClassNames";
import Link from "next/link";
import { UrlObject } from "url";
import styles from "./CommonLink.module.scss";
import OpenInNewTabIcon from "@/assets/icons/open_in_new_tab.svg";

interface CommonLinkProps {
  href: string | UrlObject;
  as?: string;
  children: React.ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  preventUnderLine?: boolean; // default is false
  legacyBehavior?: boolean; // default is false
  hideExternalLinkIcon?: boolean; // default is false
}

export default function CommonLink({
  children,
  className,
  preventUnderLine = false,
  legacyBehavior = false,
  hideExternalLinkIcon = false,
  ...restProps
}: CommonLinkProps) {
  return (
    <Link
      className={combineClassNames(styles, { root: true, preventUnderLine }, className)}
      legacyBehavior={legacyBehavior}
      {...restProps}
    >
      {children}
      {restProps.target === "_blank" && !hideExternalLinkIcon && (
        <OpenInNewTabIcon className={styles.openInNewTabIcon} />
      )}
    </Link>
  );
}
