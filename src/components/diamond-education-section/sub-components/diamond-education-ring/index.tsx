import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";

import {
  DiamondEducationRingTypeIcon,
  DiamondEducationRingSettingIcon,
  DiamondEducationRingSizeIcon,
  DiamondEducationRingMetalIcon,
  DiamondEducationRingBudgetIcon,
  DiamondEducationRingPerfectDiamondIcon,
  //TabNavWithSection,
  //TabNavWithSectionProps,
} from "@/components";

import DiamondEducationRingBudget from "./diamond-education-ring-budget";
import DiamondEducationRingMetal from "./diamond-education-ring-metal";
import DiamondEducationRingPerfectDiamond from "./diamond-education-ring-perfect-diamond-ring";
import DiamondEducationRingSettingTypes from "./diamond-education-ring-setting";
import DiamondEducationRingSize from "./diamond-education-ring-size";
import DiamondEducationRingTypes from "./diamond-education-ring-type";
// import DiamondEducationFourCSourcing from "./diamond-education-fourc-sourcing";

const TabsList = [
  {
    label: "Ring Types",
    icon: <DiamondEducationRingTypeIcon />,
    component: <DiamondEducationRingTypes />,
  },
  {
    label: "Setting Type",
    icon: <DiamondEducationRingSettingIcon />,
    component: <DiamondEducationRingSettingTypes />,
  },
  {
    label: "Ring Sizing",
    icon: <DiamondEducationRingSizeIcon />,
    component: <DiamondEducationRingSize />,
  },
  {
    label: "Metal",
    icon: <DiamondEducationRingMetalIcon />,
    component: <DiamondEducationRingMetal />,
  },
  {
    label: "Budget",
    icon: <DiamondEducationRingBudgetIcon />,
    component: <DiamondEducationRingBudget />,
  },
  {
    label: "Perfect Diamond",
    icon: <DiamondEducationRingPerfectDiamondIcon />,
    component: <DiamondEducationRingPerfectDiamond />,
  },
];

const DiamondEducationRing: React.FC = () => {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (num: number) => () => {
    setOpen(num === open ? -1 : num);
  };

  return (
    <>
      <div className="hidden lg:block">
        <Tabs
          id="diamond-education-loose"
          value={TabsList[0].label}
          orientation="vertical"
        >
          <TabsHeader
            className="!bg-white m-auto pt-5 pb-0 shadow-[0px_15px_10px_-15px_#111]"
            indicatorProps={{
              className:
                "bg-[#ccc] border-l-2 border-solid border-black rounded-none",
            }}
          >
            {TabsList.map(({ label, icon }) => (
              <Tab
                key={label}
                value={label}
                className="[&>div]:flex [&>div]:gap-3 py-4 font-medium justify-start"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
            className="w-9/12"
          >
            {TabsList.map(({ component, label }) => (
              <TabPanel key={label} value={label}>
                {component}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      <div className="lg:hidden">
        {TabsList.map((tab, idx) => (
          <Fragment key={tab.label.replace(/\ /, "_")}>
            <Accordion
              open={open === idx}
              className="mb-2 rounded-lg border border-blue-gray-100 px-4"
            >
              <AccordionHeader
                onClick={handleOpen(idx)}
                className="border-b-0 transition-colors"
              >
                {tab.label}
              </AccordionHeader>
              <AccordionBody>{tab.component}</AccordionBody>
            </Accordion>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default DiamondEducationRing;
