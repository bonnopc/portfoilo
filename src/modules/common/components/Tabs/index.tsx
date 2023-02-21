import combineClassNames from "@/utils/combineClassNames";
import { createRef, CSSProperties, ReactNode, useMemo, useState } from "react";
import styles from "./Tabs.module.scss";

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

  const handleTabHeaderClick = (tab: TabWithRef, index: number) => {
    setActiveTab(tab.label);
    tab.ref.current?.scrollIntoView({
      behavior: "smooth",
      ...(index !== 0 && index !== tabsWithRefs.length - 1 ? { inline: "center" } : {}),
    });
  };

  const ActiveTabContent: ReactNode | undefined = useMemo(() => {
    const _activeTab: Tab | undefined = tabsWithRefs.find((tab) => tab.label === activeTab);
    return _activeTab?.component;
  }, [activeTab]);

  return (
    <div className={`${styles.root} ${className ? className : ""}`}>
      <div className={styles.tabs}>
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
            onClick={() => handleTabHeaderClick(tab, i)}
            ref={tab.ref}
          >
            <div className={styles.tabLabel}>
              {tab.icon}
              {tab.label}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>{ActiveTabContent ?? null}</div>
    </div>
  );
}
