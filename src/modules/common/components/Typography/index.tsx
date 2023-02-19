import combineClassNames from "@/utils/combineClassNames";
import { createElement } from "react";
import styles from "./Typography.module.scss";

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption"; // default: p
  children: React.ReactNode;
}

export default function Typography({
  variant = "p",
  children,
  className,
  ...rest
}: TypographyProps) {
  const specialElements: string[] = ["caption"];

  return createElement(
    specialElements.includes(variant) ? "p" : variant,
    {
      ...rest,
      className: combineClassNames(
        styles,
        {
          root: true,
          caption: variant === "caption",
        },
        className
      ),
    },
    children
  );
}
