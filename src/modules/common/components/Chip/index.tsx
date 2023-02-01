import combineClassNames from "@/utils/combineClassNames";
import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";
import styles from "./Chip.module.scss";

interface ChipProps {
  children: ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "transparent";
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined";
  onClick?: MouseEventHandler<HTMLDivElement>;
  icon?: ReactNode;
  url?: string;
  disabled?: boolean;
}

export default function Chip({
  children,
  className,
  color = "primary",
  size = "medium",
  variant = "contained",
  onClick,
  icon,
  url,
  disabled = false,
}: ChipProps) {
  const renderChip = () => (
    <div
      className={combineClassNames(
        styles,
        {
          root: true,
          clickable: Boolean(onClick || url),
          disabled,
          [size]: true,
          [`${color}Color`]: true,
          [variant]: true,
        },
        className
      )}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}> {icon} </span>}
      {children}
    </div>
  );

  return url ? <Link href={url}>{renderChip()}</Link> : renderChip();
}
