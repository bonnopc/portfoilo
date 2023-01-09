import { memo } from "react";
import styles from "./IconButton.module.scss";
import combineClassNames from "@/utils/combineClassNames";
import isUndefined from "@/utils/isUndefined";

interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
}

function IconButton({ children, className, size = "medium", ...restProps }: IIconButtonProps) {
  return (
    <button
      className={combineClassNames(
        styles,
        {
          root: true,
          small: size === "small",
          medium: size === "medium" || isUndefined(size),
          large: size === "large",
        },
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default memo(IconButton);
