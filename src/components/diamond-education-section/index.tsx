import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";

import {
  DiamondCaratIcon,
  DiamondClarityIcon,
  DiamondColorIcon,
  DiamondCutIcon,
} from "@/components";

import DiamondEducationChoosePerfectDiamond from "./diamond-education-choose-perfect-diamond";
import DiamondEducationDiamondCare from "./diamond-education-diamond-care";
import { DiamondEducationLoose, DiamondEducationRing } from "./sub-components";

const TabsList = [
  {
    label: "Loose Diamond",
    icon: <DiamondCutIcon />,
    component: <DiamondEducationLoose />,
  },
  {
    label: "Diamond Ring",
    icon: <DiamondCaratIcon />,
    component: <DiamondEducationRing />,
  },
  {
    label: "Choose Your Perfect Diamond Jewellery",
    icon: <DiamondColorIcon />,
    component: <DiamondEducationChoosePerfectDiamond />,
  },
  {
    label: "Diamond Care",
    icon: <DiamondClarityIcon />,
    component: <DiamondEducationDiamondCare />,
  },
];

const DiamondEducationSections: React.FC = () => (
  <Tabs id="custom-animation" value={TabsList[0].label}>
    <TabsHeader
      className="!bg-white w-full lg:w-9/12 m-auto lg:pt-5 pb-0 pl-0 overflow-x-scroll py-2 lg:py-0 gap-3 lg:gap-4 scrollbar-hide rounded-none"
      indicatorProps={{
        className:
          "lg:bg-[#f3f4f8] border-[1px] md:border-0 md:border-b-2 border-solid border-black lg:rounded-none bg-111",
      }}
    >
      {TabsList.map(({ label, icon }) => (
        <Tab
          key={label}
          value={label}
          //className="[&>div]:flex [&>div]:gap-3 py-2 lg:py-4 font-medium whitespace-nowrap bg-[#eeeeee] rounded-s-2xl rounded-e-2xl lg:rounded-none [&>div]:rounded-s-2xl [&>div]:rounded-e-2xl [&>div]:lg:rounded-none"
          className="[&>div]:flex [&>div]:gap-3 py-2 lg:py-4 font-medium whitespace-nowrap bg-[#eeeeee]"
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
    >
      {TabsList.map(({ component, label }) => (
        <TabPanel key={label} value={label}>
          {component}
        </TabPanel>
      ))}
    </TabsBody>
  </Tabs>
);

export default DiamondEducationSections;
