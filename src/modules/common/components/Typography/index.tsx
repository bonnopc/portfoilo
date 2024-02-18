import combineClassNames from "@/utils/combineClassNames";
import { createElement } from "react";
import styles from "./Typography.module.scss";

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption"; // default: p
  children: React.ReactNode;
  rightElement?: React.ReactNode;
  preventMargin?: boolean;
}

export default function Typography({
  variant = "p",
  children,
  className,
  rightElement,
  preventMargin,
  ...rest
}: TypographyProps) {
  const specialElements: string[] = ["caption"];

  const renderChild = () =>
    createElement(
      specialElements.includes(variant) ? "p" : variant,
      {
        ...rest,
        className: combineClassNames(
          styles,
          {
            root: true,
            caption: variant === "caption",
            preventMargin: Boolean(rightElement || preventMargin),
          },
          className
        ),
      },
      children
    );

  return rightElement ? (
    <div className={styles.headerWithRightElem}>
      {renderChild()}
      <div className={styles.rightElement}>{rightElement}</div>
    </div>
  ) : (
    renderChild()
  );
}
