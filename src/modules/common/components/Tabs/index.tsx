import combineClassNames from "@/utils/combineClassNames";
import isUndefined from "@/utils/isUndefined";
import { createRef, CSSProperties, ReactNode, useMemo, useState } from "react";
import styles from "./Tabs.module.scss";
import ArrowBackIcon from "@/assets/icons/arrow_back.svg";
import ArrowForwardIcon from "@/assets/icons/arrow_forward.svg";
import IconButton from "../IconButton";
import useDeviceWidth from "@/hooks/useDeviceWidth";

interface Tab {
  label: string; // this should be unique
  component: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

interface TabWithRef extends Tab {
  ref: React.RefObject<HTMLDivElement>;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveTabIndex?: number;
  className?: string;
}

interface TabHeaderArrows {
  shouldHideBackArrow: boolean;
  shouldHideFwdArrow: boolean;
}

const DEFAULT_TAB_INDEX = 0;

export default function Tabs({ tabs, defaultActiveTabIndex, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(
    tabs[defaultActiveTabIndex ?? DEFAULT_TAB_INDEX].label
  );
  const tabsWithRefs = useMemo(() => {
    return tabs.map((tab) => ({
      ...tab,
      ref: createRef<HTMLDivElement>(),
    }));
  }, [tabs]);
  const tabHeaderParentRef = createRef<HTMLDivElement>();
  const [tabHeaderArrows, setTabHeaderArrows] = useState<TabHeaderArrows>({
    shouldHideBackArrow: true,
    shouldHideFwdArrow: false,
  });
  const { isTabletUp } = useDeviceWidth();

  const handleTabHeaderClick = (tab: TabWithRef) => {
    setActiveTab(tab.label);

    // scroll to the tab header
    // for tablet and desktop, we will only scroll horizontally
    // scroll to the tab header and set it to the center
    if (isTabletUp) {
      tabHeaderParentRef.current?.scrollTo({
        left: tab.ref.current?.offsetLeft! - tabHeaderParentRef.current?.offsetWidth! / 2,
        behavior: "smooth",
      });
    } else {
      // for mobile, we will scroll vertically
      tab.ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ActiveTabContent: ReactNode | undefined = useMemo(() => {
    const _activeTab: Tab | undefined = tabsWithRefs.find((tab) => tab.label === activeTab);
    return _activeTab?.component;
  }, [activeTab]);

  const handleTabHeaderParentScroll = () => {
    // get horizontal scroll position of the tab header parent
    const scrollLeft = tabHeaderParentRef.current?.scrollLeft;
    const scrollWidth = tabHeaderParentRef.current?.scrollWidth;
    const offsetWidth = tabHeaderParentRef.current?.offsetWidth;

    if (isUndefined(scrollLeft) || isUndefined(scrollWidth) || isUndefined(offsetWidth)) {
      return;
    }

    if (scrollWidth! > offsetWidth!) {
      // parent div has horizontal scroll
      // check if the scroll position is at the start or end
      if (scrollLeft === 0) {
        // scroll position is at the start
        setTabHeaderArrows((prev) => ({ ...prev, shouldHideBackArrow: true }));
      } else if (scrollLeft! > 0 && scrollLeft! < scrollWidth! - offsetWidth!) {
        // scroll position is in the middle
        setTabHeaderArrows((prev) => ({
          ...prev,
          shouldHideBackArrow: false,
          shouldHideFwdArrow: false,
        }));
      } else if (scrollLeft === scrollWidth! - offsetWidth!) {
        // scroll position is at the end
        setTabHeaderArrows((prev) => ({ ...prev, shouldHideFwdArrow: true }));
      }
    } else if (scrollWidth! <= offsetWidth!) {
      // parent div does not have horizontal scroll
      // hide both arrows
      setTabHeaderArrows((prev) => ({
        ...prev,
        shouldHideBackArrow: true,
        shouldHideFwdArrow: true,
      }));
    }
  };

  const handleClickBackOrFwd = (direction: "back" | "fwd") => {
    // get the current scroll position of the tab header parent
    const scrollLeft = tabHeaderParentRef.current?.scrollLeft;
    const offsetWidth = tabHeaderParentRef.current?.offsetWidth;

    if (isUndefined(scrollLeft) || isUndefined(offsetWidth)) {
      return;
    }

    const buffer = 100;

    if (direction === "back") {
      console.log("scrollLeft! - offsetWidth!", scrollLeft! - offsetWidth!);
      tabHeaderParentRef.current?.scrollTo({
        left: scrollLeft! - offsetWidth! + buffer,
        behavior: "smooth",
      });
    } else if (direction === "fwd") {
      console.log("scrollLeft! + offsetWidth!", scrollLeft! + offsetWidth!);
      tabHeaderParentRef.current?.scrollTo({
        left: scrollLeft! + offsetWidth! - buffer,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`${styles.root} ${className ? className : ""}`}>
      <div className={styles.tabHeaderRoot}>
        <div
          className={styles.tabHeaderContainer}
          ref={tabHeaderParentRef}
          onScroll={handleTabHeaderParentScroll}
        >
          {tabsWithRefs.map((tab, i) => (
            <div
              key={tab.label}
              className={combineClassNames(
                styles,
                {
                  tab: true,
                  active: tab.label === activeTab,
                  disabled: Boolean(tab.disabled),
                },
                tab.className
              )}
              onClick={() => handleTabHeaderClick(tab)}
              ref={tab.ref}
            >
              <div className={styles.tabLabel}>
                {tab.icon}
                {tab.label}
              </div>
            </div>
          ))}
        </div>

        <IconButton
          className={`${styles.floatingBack} ${
            tabHeaderArrows.shouldHideBackArrow ? styles.hidden : ""
          }`}
          onClick={() => handleClickBackOrFwd("back")}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          className={`${styles.floatingFwd} ${
            tabHeaderArrows.shouldHideFwdArrow ? styles.hidden : ""
          }`}
          onClick={() => handleClickBackOrFwd("fwd")}
        >
          <ArrowForwardIcon />
        </IconButton>
      </div>
      <div className={styles.tabContent}>{ActiveTabContent ?? null}</div>
    </div>
  );
}
