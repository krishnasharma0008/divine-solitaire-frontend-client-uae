import { useEffect, useState } from "react";

import { Button } from "../common";

interface TabNavProps {
  tabs: Array<{ label: string; icon: React.ReactNode }>;
  initialTab: number;
  onTabSwitch: (newTab: number) => void;
  orientation: "horizontal" | "vertical" | "custom" | "Customhorizontal";
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

  if (orientation === "custom") {
    return (
      <div className="w-full">
        <div className="relative right-0 px-2">
          <ul
            className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-[#FFFFFF] border-[0.5px] border-[#000000]"
            role="list"
          >
            {tabs.map((tab, index) => (
              <li key={tab.label} className="z-30 flex-auto text-center">
                <button
                  className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer truncate ${
                    currentTab === index + 1
                      ? "font-semibold text-[#000000] bg-[#EDEDED]"
                      : "text-slate-600 bg-inherit"
                  }`}
                  role="tab"
                  aria-selected={currentTab === index + 1}
                  onClick={onTabClickHandler(index + 1)}
                >
                  {tab.icon && <span className="mr-2">{tab.icon}</span>}
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (orientation === "Customhorizontal") {
    return (
      <ul
        className={`mb-0 pl-0 flex justify-around list-none bg-[#FFFFFF] border-[2px] border-t-0 border-x-0 border-b-[#000000] ${
          className || ""
        } `}
        role="tablist"
      >
        {tabs.map((tab, index) => {
          const isFirst = index === 0;
          const isLast = index === tabs.length - 1;
          const isSelected = currentTab === index + 1;

          const selectedClasses = `overflow-hidden font-Montserrat font-semibold bg-white text-[#000000] border-[2px] border-[#000000] border-solid ${
            isSelected ? "border-b-0" : "border-b-[2px]"
          } ${isFirst ? "rounded-tr-lg rounded-br-lg" : ""} 
            ${isLast ? "rounded-tl-lg rounded-bl-lg" : ""} 
            ${selectedTabClass}`;

          return (
            <li
              role="presentation"
              key={tab.label}
              className={`relative text-center text-xs md:text-sm leading-5 cursor-pointer py-3 font-normal inline-block align-center justify-center 
                ${
                  isSelected
                    ? `${selectedClasses} -mb-[2px] w-2/3`
                    : "w-1/3 overflow-x-hidden truncate"
                } 
                ${isFirst ? "border-l-0 rounded-tl-none rounded-br-none" : ""} 
                ${isLast ? "border-r-0 rounded-tr-none rounded-bl-none" : ""}
                ${tabClass}`}
              onClick={onTabClickHandler(index + 1)}
            >
              {tab.icon && (
                <span
                  className={`icon inline-block align-middle ${
                    isSelected ? "text-white " : ""
                  }`}
                >
                  {tab.icon}
                </span>
              )}
              <span className="align-text-bottom mx-2 whitespace-nowrap">
                {tab.label}
              </span>
            </li>
          );
        })}
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
