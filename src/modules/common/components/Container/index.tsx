import { createElement } from "react";
import styles from "./Container.module.scss";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export default function Container({ children, className, as = "div", ...rest }: ContainerProps) {
  return createElement(
    as,
    {
      className: [styles.root, className].join(" "),
      ...rest,
    },
    children
  );
}
