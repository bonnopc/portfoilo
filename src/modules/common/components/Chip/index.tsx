import combineClassNames from "@/utils/combineClassNames";
import Link from "next/link";
import { createElement, MouseEventHandler, ReactNode } from "react";
import { UrlObject } from "url";
import styles from "./Chip.module.scss";

export const CHIP_COLORS = [
  "primary",
  "secondary",
  "transparent",
  "white",
  "black",
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
] as const;

export type ChipColor = typeof CHIP_COLORS[number];

interface ChipProps {
  children: ReactNode;
  className?: string;
  color?: ChipColor;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined";
  onClick?: MouseEventHandler<HTMLDivElement>;
  icon?: ReactNode;
  url?: UrlObject | string;
  disabled?: boolean;
  isSelected?: boolean;
  as?: keyof JSX.IntrinsicElements;
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
  isSelected = false,
  as = "div",
}: ChipProps) {
  const elem = (
    <>
      {icon && <span className={styles.icon}> {icon} </span>}
      {children}
    </>
  );
  const renderChip = () =>
    createElement(
      as,
      {
        className: combineClassNames(
          styles,
          {
            root: true,
            clickable: Boolean(onClick || url),
            disabled,
            [size]: true,
            [`${color}Color`]: true,
            [variant]: true,
            isSelected,
          },
          className
        ),
        onClick: onClick,
      },
      elem
    );

  return url ? <Link href={url}>{renderChip()}</Link> : renderChip();
}
