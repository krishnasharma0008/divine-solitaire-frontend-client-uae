import Image from "next/image";
//import { useState } from "react";

import {
  CaratCalculator,
  ColorSelector,
  DiamondFeatures,
  PriceDisplay,
  Separator,
  ShapeSelector,
} from "@/components/divine-components";
import ClaritySelector from "@/components/divine-components/clarity-selector";
import { useSolitairePrice } from "@/hooks";

const HomeScreenKnowYourDiamond: React.FC = () => {
  const {
    changeHandler,
    caratChangeHandler,
    isRound,
    state,
    premiumper,
    premiumsizerange,
    premiumfcts,
    premiumtcts,
    stonePrice,
    clarityOptions,
    colorOptions,
    shapeType,
  } = useSolitairePrice();

  return (
    <div className="flex flex-col items-center md:px-0 [&>div]:px-4">
      <div className="mb-9 text-gray-900 text-2xl md:text-5xl font-bold md:leading-[3.5rem] tracking-wider uppercase text-center md:text-left">
        Know Your Diamond Value
      </div>
      <div className="mb-12 text-gray-700 text-sm md:text-xl font-normal leading-6 md:leading-7 tracking-wide text-center">
        Divine Solitaires’ Know The Value (KTV) helps you know exactly how much
        your solitaire is worth, based on our Nationwide Standard and
        Transparent Pricing.
      </div>
      <div className="w-full">
        <DiamondFeatures className="md:hidden" />

        <div className="w-full md:flex justify-between !px-0">
          <div className="md:w-7/12">
            <ShapeSelector
              onSelect={changeHandler("shape")}
              defaultValue={0}
              stype={shapeType}
            />

            <Separator />
            <CaratCalculator
              onChange={caratChangeHandler}
              defaultValue={isRound ? 0.18 : 0.3}
              isRound={isRound}
              premiumper={premiumper}
              premiumsizerange={premiumsizerange}
              premium_f_cts={premiumfcts}
              premium_t_cts={premiumtcts}
            />

            <Separator />
            <ColorSelector
              onSelect={changeHandler("color")}
              defaultValue={0}
              options={colorOptions}
              selected={state.colour}
            />
            <Separator />
            <ClaritySelector
              onSelect={changeHandler("clarity")}
              defaultValue={0}
              options={clarityOptions}
              selected={state.clarity}
            />
            <Separator />
          </div>

          <div className="md:w-5/12 bg-white md:p-6 flex flex-col items-center justify-around border-l-px border-solid border-[#826344]">
            <Image
              src="/Frame1386.png"
              alt="Divine Logo"
              width="0"
              height="0"
              sizes="100vw"
              className="w-10/12 hidden md:block"
            />

            <PriceDisplay
              price={stonePrice}
              carats={state.cts}
              clocale="en-IN"
              ccode="IN"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenKnowYourDiamond;
