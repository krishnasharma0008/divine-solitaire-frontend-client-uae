import { useContext, useEffect, useState } from "react";

import {
  HnAGoldenIcon,
  ParametersCertifiedIcon,
  TabNavWithSection,
  TabNavWithSectionProps,
  XxxPlusIcon,
} from "@/components";
import { Separator } from "@/components/divine-components";
import KnowYourDiamondContext from "@/context/know-your-diamond-context";

import DiamondCoinSolitares from "./pricing-diamond-coin";
import SavedSolitares from "./pricing-saved-solitaire";
import SelectYourSolitaire from "./pricing-select-solitaire";

const diamondFeatures = [
  {
    icon: <ParametersCertifiedIcon />,
    title: "123 Parameters Certified",
  },
  {
    icon: <HnAGoldenIcon />,
    title: "Hearts & Arrows",
  },
  {
    icon: <XxxPlusIcon />,
    title: "Ex.Ex.Ex. Plus® Cut",
  },
];

const KnowYourDiamondScreen: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number | undefined>(0);
  const { selectedKyd } = useContext(KnowYourDiamondContext);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    updateIsMobile();

    window.addEventListener("resize", updateIsMobile);

    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const orientations = isMobile ? "vertical" : "horizontal";

  const tabProps: TabNavWithSectionProps = {
    initialTab: 1,
    orientation: orientations,
    currentTab,
    sections: [
      {
        label: "Select your solitaire",
        component: <SelectYourSolitaire />,
      },
      {
        label: "Saved Solitaires",
        component: <SavedSolitares />,
      },
      {
        label: "Diamond Coin",
        component: <DiamondCoinSolitares />,
      },
    ],
  };

  useEffect(() => {
    if (selectedKyd) {
      setCurrentTab(1);
    } else {
      setCurrentTab(undefined);
    }
  }, [selectedKyd, setCurrentTab]);

  return (
    <div className="md:p-24">
      <div>
        <div className="mb-6 md:mb-9 text-gray-900 text-2xl md:text-5xl font-bold md:leading-[3.5rem] tracking-wider uppercase text-center">
          Know Your Diamond Value
        </div>
      </div>
      <div className="w-full m-auto">
        <div className="w-full">
          <TabNavWithSection {...tabProps} />
        </div>
        <Separator />
        {/* {currentTab === 1 && ( */}
        <div className=" md:flex mt-3 md:mt-20 flex items-center justify-around">
          {diamondFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-2 md:gap-8"
            >
              <span className="max-w-[11rem] [&>svg]:w-12 [&>svg]:md:w-24 [&>svg]:h-12 [&>svg]:md:h-24">
                {feature.icon}
              </span>
              <span className="text-xs md:text-base text-center">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default KnowYourDiamondScreen;
