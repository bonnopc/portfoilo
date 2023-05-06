import combineClassNames from "@/utils/combineClassNames";
import Link from "next/link";
import { UrlObject } from "url";
import styles from "./CommonLink.module.scss";
import OpenInNewTabIcon from "@/assets/icons/open_in_new_tab.svg";
import { forwardRef } from "react";

interface CommonLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string | UrlObject;
  children: React.ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  preventUnderLine?: boolean; // default is false
  legacyBehavior?: boolean; // default is false
  hideExternalLinkIcon?: boolean; // default is false
  color?: "primary" | "textColor"; // default is "primary"
}

function CommonLinkComponent(
  {
    children,
    className,
    preventUnderLine = false,
    legacyBehavior = false,
    hideExternalLinkIcon = false,
    color = "primary",
    ...restProps
  }: CommonLinkProps,
  ref: any
) {
  return (
    <Link
      className={combineClassNames(
        styles,
        { root: true, preventUnderLine, [color]: true },
        className
      )}
      legacyBehavior={legacyBehavior}
      {...restProps}
      ref={ref}
    >
      {children}
      {restProps.target === "_blank" && !hideExternalLinkIcon && (
        <OpenInNewTabIcon className={styles.openInNewTabIcon} />
      )}
    </Link>
  );
}

const CommonLink = forwardRef(CommonLinkComponent);

export default CommonLink;
