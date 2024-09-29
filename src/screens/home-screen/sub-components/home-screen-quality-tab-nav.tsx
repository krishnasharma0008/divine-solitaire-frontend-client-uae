//import Image from "next/image";
import { useState } from "react";

import {
  //ArrowIcon8,
  Button,
  //HeartIcon8,
  QualityGuranteeCertificate,
  ExExExPlusIcon,
  TransparentPricingIcon,
} from "@/components";

const tabs = [
  {
    title: "Heart & Arrows",
    component: (
      <div className="lg:flex items-center max-w-2xl gap-6 m-auto">
        <div className="w-full lg:w-2/6 flex justify-around items-center gap-8 py-9">
          <div className="text-center">
            {/* <HeartIcon8 /> */}
            <img src="/HEARTS.png" width="95.25" height="96" />
            <span className="font-montserrat text-gray-900 text-base font-semibold leading-6 tracking-tighter inline-block mt-2">
              8 HEARTS
            </span>
          </div>
          <div className="text-center">
            {/* <ArrowIcon8 /> */}
            <img src="/ARROWS.png" width="95.25" height="96" />
            <span className="font-montserrat text-gray-900 text-base font-semibold leading-6 tracking-tighter inline-block mt-2">
              8 ARROWS
            </span>
          </div>
        </div>
        <div className="lg:w-4/6">
          <p className="text-gray-900 text-justify text-xs lg:text-lg font-montserrat font-normal leading-6 tracking-normal">
            Our diamonds have 8 hearts and 8 arrows, which makes them unique and
            really beautiful. Our diamonds with 8 hearts and 8 arrows are
            perfect for you!
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "123 Parameter",
    component: (
      <div className="lg:flex items-center max-w-2xl gap-6 m-auto">
        <div className="w-full lg:w-2/6 flex justify-around items-center gap-10 py-9">
          <div className="gap-12">
            <QualityGuranteeCertificate />
          </div>
        </div>
        <div className="lg:w-4/6">
          <p className="text-gray-900 text-justify text-xs lg:text-lg font-montserrat font-normal leading-6 tracking-normal">
            We test our diamonds in 123 different ways! This includes things
            like how it&apos;s cut, how clear it is, what colour it is, and how
            much it weighs.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Ex.Ex.Ex. Plus®",
    component: (
      <div className="lg:flex items-center max-w-2xl gap-6 m-auto">
        <div className="w-full lg:w-2/6 flex justify-around items-center gap-10 py-9">
          <div className="gap-12">
            <ExExExPlusIcon />
          </div>
        </div>
        <div className="lg:w-4/6">
          <p className="text-gray-900 text-justify text-xs lg:text-lg font-montserrat font-normal leading-6 tracking-normal">
            The diamond has been graded as “Excellent” not only in Cut, but also
            it is “Excellent” in Polish and Symmetry too. This is the highest
            classification possible for these areas in the GIA grading system.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Transparent Pricing",
    component: (
      <div className="lg:flex items-center max-w-2xl gap-6 m-auto">
        <div className="w-full lg:w-2/6 flex justify-around items-center gap-10 py-9">
          <div className="gap-12">
            <TransparentPricingIcon />
          </div>
        </div>
        <div className="lg:w-4/6">
          <p className="text-gray-900 text-justify text-xs lg:text-lg font-montserrat font-normal leading-6 tracking-normal">
            At Divine Solitaires, we provide our customers with a complete price
            transparency, so you can see exactly what you&apos;re paying for. We
            have standard price at each and every store.
          </p>
        </div>
      </div>
    ),
  },
];

const HomeScreenQualityTabNav: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const onClickHandler = (idx: number) => () => setSelectedTab(idx);

  const component = tabs[selectedTab].component;

  return (
    <div className="flex flex-col items-center w-full mt-6 md:pt-12 px-4 md:px-0">
      <div className="font-montserrat letter-spacing-[0.48px] text-gray-900 text-base md:text-2xl uppercase text-left w-full lg:border-b-2 border-black md:pb-6 mb-6 text-center md:text-left">
        Divine Solitaires only offers the best quality Diamonds
      </div>
      <div className="lg:rounded-md bg-white lg:shadow-lg w-full md:pb-12 md:pt-8 md:px-11">
        <ul className="block overflow-x-scroll lg:overflow-x-auto whitespace-nowrap scrollbar-hide lg:flex gap-2 lg:gap-4 justify-around [&>li]:ml-4 [&>li:first-child]:ml-0 [&>li]:lg:ml-0">
          {tabs.map(({ title }, idx) => (
            <li className={`inline-block`} key={`ul-${title}`}>
              <Button
                themeType="dark"
                classes={`font-body text-base lg:text-xl w-full xl:w-56 !shadow-none rounded-none font-normal capitalize ${
                  selectedTab !== idx ? "!bg-white !text-black" : ""
                }`}
                onClick={onClickHandler(idx)}
              >
                {title}
              </Button>
            </li>
          ))}
        </ul>
        <div>{component}</div>
      </div>
    </div>
  );
};

export default HomeScreenQualityTabNav;
