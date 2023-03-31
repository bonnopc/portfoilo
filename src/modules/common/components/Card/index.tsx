import combineClassNames from "@/utils/combineClassNames";
import { createElement, ReactNode } from "react";
import styles from "./Card.module.scss";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export default function Card({
  children,
  className,
  fullWidth = false,
  fullHeight = false,
  as = "div",
  ...rest
}: CardProps) {
  return createElement(
    as,
    {
      className: combineClassNames(styles, { root: true, fullWidth, fullHeight }, className),
      ...rest,
    },
    children
  );
}
