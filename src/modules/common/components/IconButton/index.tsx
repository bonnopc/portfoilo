import { memo } from "react";
import styles from "./IconButton.module.scss";
import combineClassNames from "@/utils/combineClassNames";
import isUndefined from "@/utils/isUndefined";
import Link from "next/link";

interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  size?: "small" | "medium" | "large";
  as?: "button" | "a";
  url?: string;
  urlOpensInNewTab?: boolean;
}

function IconButton({
  children,
  className,
  size = "medium",
  as,
  url,
  urlOpensInNewTab,
  ...restProps
}: IIconButtonProps) {
  const classNames = combineClassNames(
    styles,
    {
      root: true,
      small: size === "small",
      medium: size === "medium" || isUndefined(size),
      large: size === "large",
    },
    className
  );

  if (as === "a" && url && urlOpensInNewTab) {
    return (
      <a className={classNames} href={url} target="_blank" rel="noopener noreferrer" {...restProps}>
        {children}
      </a>
    );
  } else if (as === "a" && url) {
    // case - internal link, should use next/link
    return (
      <Link href={url} className={classNames} {...restProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} {...restProps}>
      {children}
    </button>
  );
}

export default memo(IconButton);
