import { createContext, useEffect, useState } from "react";

import TabNav from "../tab-nav";

interface Tab {
  label: string;
  icon?: React.ReactNode;
  component: React.ReactNode;
}

interface TabNavWithSectionProps {
  sections: Array<Tab>;
  initialTab: number;
  orientation?: "horizontal" | "vertical" | "custom" | "Customhorizontal";
  className?: string;
  tabClass?: string;
  selectedTabClass?: string;
  currentTab?: number;
  onChange?: (tabIndex: number) => void; // New prop
}

type TabNavContextData = {
  setCurrentTab: (arg: { tabNumber?: number; tabName: string }) => void;
};

const defaultState: TabNavContextData = {
  setCurrentTab: ({}) => {
    console.log;
  },
};

const TabNavContext = createContext<TabNavContextData>(defaultState);

const TabNavWithSection: React.FC<TabNavWithSectionProps> = ({
  sections,
  initialTab,
  orientation = "vertical",
  tabClass,
  className,
  selectedTabClass,
  currentTab: currentTabProp,
  onChange,
}) => {
  const [currentTab, setCurrentTabNum] = useState<number>(initialTab || 1);
  const [currentSection, setCurrentSection] = useState<React.ReactNode | null>(
    sections[currentTab - 1].component
  );

  const onTabSwitchHandler = (newTabIndex: number) => {
    setCurrentSection(sections[newTabIndex - 1].component);
    setCurrentTabNum(newTabIndex);
    //to get current tab
    if (onChange) {
      onChange(newTabIndex); // Notify parent about the tab change
    }
  };

  useEffect(() => {
    //console.log(orientation);
    if (currentTabProp) {
      setCurrentTabNum(currentTabProp);
    }
  }, [currentTabProp]);

  const setCurrentTab = ({
    tabNumber,
    tabName,
  }: {
    tabNumber?: number;
    tabName?: string;
  }) => {
    if (tabNumber) {
      setCurrentTabNum(tabNumber);
    }
    if (!tabName) return;

    const tabIndex = sections.findIndex((section) => section.label === tabName);
    setCurrentTabNum(tabIndex + 1);
  };

  useEffect(() => {
    setCurrentSection(sections[currentTab - 1].component);
  }, [currentTab, sections]);

  if (orientation === "horizontal")
    return (
      <>
        <TabNav
          className={className}
          currentTab={currentTab}
          initialTab={initialTab}
          onTabSwitch={onTabSwitchHandler}
          orientation={orientation}
          tabClass={tabClass}
          //tabs={sections.map(({ title }) => title)}
          tabs={sections.map(({ label, icon }) => ({ label, icon }))}
          selectedTabClass={selectedTabClass}
        />
        {currentSection}
      </>
    );

  if (orientation === "custom")
    return (
      <>
        <TabNav
          className={className}
          currentTab={currentTab}
          initialTab={initialTab}
          onTabSwitch={onTabSwitchHandler}
          orientation={orientation}
          tabClass={tabClass}
          //tabs={sections.map(({ title }) => title)}
          tabs={sections.map(({ label, icon }) => ({ label, icon }))}
          selectedTabClass={selectedTabClass}
        />
        {currentSection}
      </>
    );
  if (orientation === "Customhorizontal")
    return (
      <>
        <TabNav
          className={className}
          currentTab={currentTab}
          initialTab={initialTab}
          onTabSwitch={onTabSwitchHandler}
          orientation={orientation}
          tabClass={tabClass}
          //tabs={sections.map(({ title }) => title)}
          tabs={sections.map(({ label, icon }) => ({ label, icon }))}
          selectedTabClass={selectedTabClass}
        />
        {currentSection}
      </>
    );

  return (
    <TabNavContext.Provider value={{ setCurrentTab }}>
      <div className="md:flex md:w-full md:justify-around">
        <div className="md:w-3/12 lg:w-4/12 mt-2">
          <TabNav
            className={className}
            currentTab={currentTab}
            initialTab={initialTab}
            onTabSwitch={onTabSwitchHandler}
            orientation={orientation}
            tabClass={tabClass}
            //tabs={sections.map(({ title }) => title)}
            tabs={sections.map(({ label, icon }) => ({ label, icon }))}
            selectedTabClass={selectedTabClass}
          />
        </div>
        <div className="md:w-6/12 lg-8/12 mt-4">{currentSection}</div>
      </div>
    </TabNavContext.Provider>
  );
};

export default TabNavWithSection;
export { type TabNavWithSectionProps, type Tab, TabNavContext };
