import styles from "./Grid.module.scss";
import { createElement, forwardRef, memo } from "react";
import combineClassNames from "@/utils/combineClassNames";

type GridSections = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GridOffsetOrPullCount = 1 | 2 | 3 | 4 | 5 | 6;

interface GridProps {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: GridSections;
  sm?: GridSections;
  md?: GridSections;
  smPush?: GridOffsetOrPullCount;
  mdPush?: GridOffsetOrPullCount;
  smPull?: GridOffsetOrPullCount;
  mdPull?: GridOffsetOrPullCount;
  smOffset?: GridOffsetOrPullCount;
  mdOffset?: GridOffsetOrPullCount;
  hiddenXs?: boolean;
  hiddenSm?: boolean;
  hiddenMd?: boolean;
  className?: string;
  spacing?: 0 | 1 | 2 | 3 | 4;
  as?: keyof JSX.IntrinsicElements;
}

function GridComponent(
  {
    children,
    item,
    container = !item,
    xs,
    sm,
    md,
    smPush,
    mdPush,
    smPull,
    mdPull,
    smOffset,
    mdOffset,
    hiddenXs,
    hiddenSm,
    hiddenMd,
    className,
    spacing = 2,
    as = "div",
    ...restProps
  }: GridProps,
  ref: React.Ref<HTMLElement>
) {
  return createElement(
    as,
    {
      className: combineClassNames(
        styles,
        {
          root: true,
          container: Boolean(container),
          item: Boolean(item),
          [`xs${xs}`]: Boolean(xs),
          [`sm${sm}`]: Boolean(sm),
          [`md${md}`]: Boolean(md),
          hiddenMd: Boolean(hiddenMd),
          hiddenSm: Boolean(hiddenSm),
          hiddenXs: Boolean(hiddenXs),
          [`smPush${smPush}`]: Boolean(smPush),
          [`mdPush${mdPush}`]: Boolean(mdPush),
          [`smPull${smPull}`]: Boolean(smPull),
          [`mdPull${mdPull}`]: Boolean(mdPull),
          [`smOffset${smOffset}`]: Boolean(smOffset),
          [`mdOffset${mdOffset}`]: Boolean(mdOffset),
          [`spacing${spacing}`]: true,
        },
        className
      ),
      ...restProps,
      ref,
    },
    children
  );
}

const Grid = forwardRef(GridComponent);

export default memo(Grid);
