import Image from "next/image";
import React, { useState } from "react";

interface DiamondInfo {
  src: string;
  label: string;
  text: string;
}

interface DiamondSelectorProps {
  diamondData: DiamondInfo[];
  className?: string;
  containerClass?: string;
}

const DiamondSelector: React.FC<DiamondSelectorProps> = ({
  diamondData,
  className,
  containerClass,
}) => {
  const [activeDiamond, setActiveDiamond] = useState(
    diamondData[0]?.label || ""
  );

  return (
    <div className="w-full text-gray-300">
      <div className={`w-full flex justify-center ${containerClass}`}>
        <Image
          src={
            diamondData.find(
              (diamondInfo) => diamondInfo.label === activeDiamond
            )?.src || ""
          }
          alt={`Color ${activeDiamond}`}
          width="0"
          height="0"
          sizes="100vw"
          //className="w-full h-auto"
          className={`${className}`}
        />
      </div>

      <div className="w-full flex bg-gray-300 h-px"></div>

      <div
        className="w-full flex justify-between items-center py-5"
        style={{ marginTop: "-7px" }}
      >
        {diamondData.map((diamondInfo) => (
          <span
            key={diamondInfo.label}
            className={`flex flex-col items-center ${
              activeDiamond === diamondInfo.label
                ? "cursor-pointer font-bold"
                : ""
            }`}
            onClick={() => setActiveDiamond(diamondInfo.label)}
          >
            <span
              className={`w-3 h-3 text-black bg-gray-300 rounded-full ${
                activeDiamond === diamondInfo.label ? "bg-gray-900" : ""
              }`}
            />
            <span
              className={`text-sm mt-3 ${
                activeDiamond === diamondInfo.label ? "text-black" : ""
              }`}
            >
              {diamondInfo.label}
            </span>
          </span>
        ))}
      </div>

      <div className="bg-[#f3f4f8] text-black p-2">
        {
          diamondData.find((diamondInfo) => diamondInfo.label === activeDiamond)
            ?.text
        }
      </div>
    </div>
  );
};

export default DiamondSelector;
