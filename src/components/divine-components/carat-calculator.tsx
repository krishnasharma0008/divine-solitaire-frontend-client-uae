import { Slider, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import React from "react";

import PricingDialog from "@/components/common/pricing-dialog";

import TabHeader from "./tab-header";
import { InputText } from "../common";
import { InfoIcon } from "../icons";

const MAX_ROUND = 2.99;
const MIN_ROUND = 0.18;
const MAX_OVAL = 1.23;
const MIN_OVAL = 0.1;

export interface CaratCalculator {
  onChange?: (value: number) => number;
  className?: string;
  defaultValue: number;
  isRound: boolean;
  premiumper: number;
  premiumsizerange: string;
  premium_f_cts: number;
  premium_t_cts: number;
}

const CaratCalculator: React.FC<CaratCalculator> = ({
  className,
  onChange,
  defaultValue,
  isRound,
  premiumper,
  premiumsizerange,
}) => {
  const MAX = isRound ? MAX_ROUND : MAX_OVAL;
  const [sliderValue, setSliderValue] = useState<number>(defaultValue);
  const [caratValue, setCaratValue] = useState<string>("");

  const [specialSizeMessageVisible, setSpecialSizeMessageVisible] =
    useState(false);

  const setSliderValueCalculated = (value: number) => {
    setSliderValue((value * 100) / MAX);
  };

  useEffect(() => {
    setSliderValueCalculated(defaultValue);
    setCaratValue(defaultValue.toFixed(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  useEffect(() => {
    handlePremiumCaratDialog(premiumper);
  }, [premiumper]);

  const sliderValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value));
    const calculatedVal = (parseFloat(e.target.value) / 100) * MAX;
    setCaratValue(calculatedVal.toFixed(2));
  };

  const sliderValidator = () => {
    if (onChange) {
      setCaratValue(onChange(parseFloat(caratValue)).toString());
    } else {
      setCaratValue(caratValue);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (/[0-9|.]/.test(e.target.value) || !e.target.value.length) {
    if (/[0-9|.]/.test(e.target.value)) {
      setCaratValue(e.target.value);
    }
  };

  const onBlurChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    let newVal = value;
    if (onChange) {
      newVal = onChange(parseFloat(value.toFixed(2)));
    }
    setSliderValueCalculated(newVal);
    setCaratValue(newVal.toFixed(2));
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onChange) {
      const value = parseFloat(caratValue);
      //setCaratValue(onChange(value).toString());
      if (!isNaN(value)) {
        // Call the onChange handler and update caratValue
        setCaratValue(onChange(value).toString());

        // Remove focus after Enter key is pressed
        (e.target as HTMLInputElement).blur();
      }
    }

    // Prevent default action for arrow keys
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
  };

  const handlePremiumCaratDialog = (value: number) => {
    if (value > 0) {
      setSpecialSizeMessageVisible(true);
    } else {
      setSpecialSizeMessageVisible(false);
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`md:mb-16 ${className}`}>
        <div className="flex justify-between items-center">
          <TabHeader text="Carat" />
          <InputText
            type="text"
            value={caratValue}
            onChange={onChangeHandler}
            className="max-w-[4rem] float-right number-button mr-[0.5px]"
            onBlur={onBlurChangeHandler}
            onKeyDown={onKeyDownHandler}
            autoFocus
          />
        </div>

        <div className="w-full mt-2 text-[#826344] slider">
          <Slider
            className="text-black [&>input[type=range]::-ms-track]:w-8 hidden md:block"
            barClassName="bg-black"
            value={sliderValue}
            onChange={sliderValueChangeHandler}
            min={0}
            max={100}
            onMouseUp={sliderValidator}
          />
          <span
            className="w-full mt-3 md:mt-7 text-gold flex items-center gap-2"
            onClick={handleOpen}
          >
            {specialSizeMessageVisible && (
              <p>
                This is a special size diamond and may attract{" "}
                <strong>Premium</strong>
              </p>
            )}
            {specialSizeMessageVisible && (
              <InfoIcon
                className="fill-white w-6 h-6 cursor-pointer"
                onClick={() => {
                  console.log("InfoIcon clicked");
                }}
              />
            )}
          </span>
          <div className="hidden md:flex justify-between mt-3">
            <span className="text-gray-900 text-base font-normal leading-4 font-montserrat px-4 py-2 border">
              {isRound ? MIN_ROUND : MIN_OVAL}
            </span>
            <span className="text-gray-900 text-base font-normal leading-4 font-montserrat px-4 py-2 border">
              {isRound ? MAX_ROUND : MAX_OVAL}
            </span>
          </div>
        </div>
      </div>
      <PricingDialog open={open} onClose={handleOpen} cancelText="OK">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="w-1/2 sm:w-auto border border-blue-gray-100 bg-blue-gray-50 p-4">
                  Premium Size Range
                </th>
                <th className="w-1/2 sm:w-auto border-y border-r border-blue-gray-100 bg-blue-gray-50 p-4">
                  Premium Charge
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-x border-blue-gray-100">
                <td className="p-4 border-r">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {premiumsizerange}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {premiumper} {" % "}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-col item-start text-left px-2">
              <p className="leading-8 ">
                <b className="underline">Note : </b>
              </p>
              <ul
                role="list"
                className="marker:text-gray-900 list-disc pl-5 space-y-3 text-gray-900"
              >
                <li className="list-disc text-gray-700 text-base leading-6">
                  if already available in stock premium will not be applied
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Premium will be applied if special requirement is made in the
                  above size range
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Even by paying the Premium available of special size diamond
                  (eg. {caratValue} cts) can not be guaranteed
                </li>
                <li className="list-disc text-gray-700 text-base leading-6">
                  Any diamond with that Premium size bracket will be made
                  available. eg {premiumsizerange}.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PricingDialog>
    </>
  );
};

export default CaratCalculator;
