import combineClassNames from "@/utils/combineClassNames";
import Link from "next/link";
import { UrlObject } from "url";
import styles from "./CommonLink.module.scss";

interface CommonLinkProps {
  href: string | UrlObject;
  as?: string;
  children: React.ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  preventUnderLine?: boolean; // default is false
  legacyBehavior?: boolean; // default is false
}

export default function CommonLink({
  children,
  className,
  preventUnderLine = false,
  legacyBehavior = false,
  ...restProps
}: CommonLinkProps) {
  return (
    <Link
      className={combineClassNames(styles, { root: true, preventUnderLine }, className)}
      legacyBehavior={legacyBehavior}
      {...restProps}
    >
      {children}
    </Link>
  );
}
