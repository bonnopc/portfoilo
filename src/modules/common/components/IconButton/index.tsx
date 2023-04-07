import { forwardRef, memo } from "react";
import styles from "./IconButton.module.scss";
import combineClassNames from "@/utils/combineClassNames";
import isUndefined from "@/utils/isUndefined";
import Link from "next/link";

export interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  size?: "small" | "medium" | "large";
  as?: "button" | "a";
  url?: string;
  urlOpensInNewTab?: boolean;
  "aria-label": string;
}

function IconButtonComponent(
  {
    children,
    className,
    size = "medium",
    as = "button",
    url,
    urlOpensInNewTab,
    ...restProps
  }: IIconButtonProps,
  ref: any
) {
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
      <a
        className={classNames}
        href={url}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        {...restProps}
      >
        {children}
      </a>
    );
  } else if (as === "a" && url) {
    // case - internal link, should use next/link
    return (
      <Link href={url} ref={ref} className={classNames} {...restProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} ref={ref} {...restProps}>
      {children}
    </button>
  );
}

const IconButton = forwardRef(IconButtonComponent);

export default memo(IconButton);
