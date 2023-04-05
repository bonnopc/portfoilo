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

/**
 * This component will act as a wrapper for any other component.
 * But default, it will render a div element. Can be changed by passing the as prop.
 * @param props
 * @returns {JSX.Element}
 * @constructor Card
 * @example
 * <Card
 *  className="my-class"
 *  fullWidth={false}
 *  fullHeight={false}
 *  as="section"
 * >
 *  <div>My Card</div>
 * </Card>
 */
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
