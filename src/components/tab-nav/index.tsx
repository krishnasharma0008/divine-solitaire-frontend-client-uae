import { useEffect, useState } from "react";

import { Button } from "../common";

interface TabNavProps {
  tabs: Array<{ label: string; icon: React.ReactNode }>;
  initialTab: number;
  onTabSwitch: (newTab: number) => void;
  orientation: "horizontal" | "vertical";
  currentTab?: number;
  tabClass?: string;
  className?: string;
  selectedTabClass?: string;
}

const TabNav: React.FC<TabNavProps> = ({
  tabs,
  onTabSwitch,
  initialTab = 1,
  orientation = "vertical",
  currentTab: currentTabProp,
  tabClass,
  className,
  selectedTabClass,
}) => {
  const [currentTab, setCurrentTab] = useState<number>(initialTab);

  const onTabClickHandler = (tabNumber: number) => () => {
    setCurrentTab(tabNumber);
    onTabSwitch(tabNumber);
  };

  useEffect(() => {
    if (currentTabProp && currentTabProp !== currentTab) {
      setCurrentTab(currentTabProp);
    }
  }, [currentTab, currentTabProp]);

  if (orientation === "horizontal") {
    const selectedClasses = `font-semibold text-gold border-b border-gold ${selectedTabClass}`;
    return (
      <ul
        className={`mb-5 flex list-none justify-around ${className || ""}`}
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <li
            role="presentation"
            key={tab.label}
            className={`text-center text-base leading-5 cursor-pointer py-3 font-normal inline-block align-center justify-center min-w-fit ${
              currentTab === index + 1 ? selectedClasses : ""
            } ${tabClass}`}
            onClick={onTabClickHandler(index + 1)}
          >
            {/* {tab} */}
            {tab.icon && (
              <span
                className={`icon inline-block align-middle	 ${
                  currentTab === index + 1 ? "text-white" : "" // Apply text-white class for the selected tab
                }`}
              >
                {tab.icon}
              </span>
            )}
            <span className="align-text-bottom ml-2">{tab.label}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      className={`flex md:flex-wrap md:flex-col md:flex-row gap-4 md:overflow-hidden overflow-x-scroll md:overflow-auto scrollbar-hide ${className}`}
    >
      {tabs.map((tab, index) => (
        <Button
          themeType={currentTab === index + 1 ? "dark" : "grey"}
          onClick={onTabClickHandler(index + 1)}
          //key={tab}
          key={tab.label}
          cornerType="sharp"
          classes="h-9 md:h-11 py-2 px-6 mt-0 border-0 rounded md:rounded-none min-w-max font-semibold inline-flex items-center justify-center"
          color="gray"
        >
          {tab.icon && (
            <span
              className={`icon ${
                currentTab === index + 1 ? "text-white" : "" // Apply text-white class for the selected tab
              }`}
            >
              {tab.icon}
            </span>
          )}
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default TabNav;
export { type TabNavProps };
