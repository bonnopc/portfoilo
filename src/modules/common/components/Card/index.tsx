import combineClassNames from "@/utils/combineClassNames";
import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface CardProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export default function Card({
  children,
  className,
  fullWidth = false,
  fullHeight = false,
}: CardProps) {
  return (
    <div className={combineClassNames(styles, { root: true, fullWidth, fullHeight }, className)}>
      {children}
    </div>
  );
}
