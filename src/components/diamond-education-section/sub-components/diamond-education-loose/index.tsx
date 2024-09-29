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
  DiamondCutIcon,
  DiamondEducationLooseSourcing,
  DiamondEducationLooseShape,
  DiamondEducationLoosePerfectDiamond,
  DiamondEducationLooseConflictFree,
  DiamondEducationLooseCertification,
  DiamondEducationLooseAnatomy,
} from "@/components";

import DiamondEducationFourC from "./diamond-education-fourc";
import DiamondEducationFourCAnatomy from "./diamond-education-fourc-anatomy";
import DiamondEducationFourCCertificate from "./diamond-education-fourc-certificate";
import DiamondEducationFourCConflictFree from "./diamond-education-fourc-conflict-free";
import DiamondEducationFourCPerfectDiamond from "./diamond-education-fourc-perfect-diamond";
import DiamondEducationFourCShapes from "./diamond-education-fourc-shapes";
import DiamondEducationFourCSourcing from "./diamond-education-fourc-sourcing";

const TabsList = [
  {
    label: "4C's",
    icon: <DiamondCutIcon />,
    component: <DiamondEducationFourC />,
  },
  {
    label: "Shapes",
    icon: <DiamondEducationLooseShape />,
    component: <DiamondEducationFourCShapes />,
  },
  {
    label: "Anatomy",
    icon: <DiamondEducationLooseAnatomy />,
    component: <DiamondEducationFourCAnatomy />,
  },
  {
    label: "Certification",
    icon: <DiamondEducationLooseCertification />,
    component: <DiamondEducationFourCCertificate />,
  },
  {
    label: "Perfect Diamond",
    icon: <DiamondEducationLoosePerfectDiamond />,
    component: <DiamondEducationFourCPerfectDiamond />,
  },
  {
    label: "Ethical sourcing Diamonds",
    icon: <DiamondEducationLooseSourcing />,
    component: <DiamondEducationFourCSourcing />,
  },
  {
    label: "Conflict free diamonds",
    icon: <DiamondEducationLooseConflictFree />,
    component: <DiamondEducationFourCConflictFree />,
  },
];

const DiamondEducationLooseDiamond: React.FC = () => {
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

export default DiamondEducationLooseDiamond;
