import Image from "next/image";
import { useEffect, useState } from "react";

import { ShapeOption } from "@/interface/shape-option";

import TabHeader from "./tab-header";

const ShapeOptions: Array<ShapeOption> = [
  {
    img: "/image7.png",
    text: "ROUND",
    value: "RND",
  },
  {
    img: "/image8.png",
    text: "Princess",
    value: "PRN",
  },
  {
    img: "/image9.png",
    text: "Oval",
    value: "OVL",
  },
  {
    img: "/image_9.png",
    text: "Pear",
    value: "PER",
  },
];

const FancyShapeOptions: Array<ShapeOption> = [
  {
    img: "/radiant.png",
    text: "Radiant",
    value: "RADQ",
  },
  {
    img: "/cushion.png",
    text: "Cushion",
    value: "CUSQ",
  },
  {
    img: "/heart.png",
    text: "Heart",
    value: "HRT",
  },
];

interface ShapeSelectorProps {
  onSelect?: (value: string) => void;
  className?: string;
  defaultValue: number | null;
  options?: Array<ShapeOption>;
  stype: string;
}

const ShapeSelector: React.FC<ShapeSelectorProps> = ({
  onSelect,
  className,
  defaultValue,
  stype,
  //options = ShapeOptions,
}) => {
  const [selected, setSelected] = useState<number | null>(defaultValue);
  //console.log(stype);
  const options =
    stype === "VDF" || stype === "INY" ? FancyShapeOptions : ShapeOptions;

  const getValidShapeValue = (): string | undefined => {
    if (selected !== null) {
      return options[selected]?.value;
    }
    return undefined;
  };

  const onClickHandler = (idx: number) => () => {
    setSelected(idx);
    if (onSelect) {
      onSelect(options[idx]?.value);
    }
  };

  useEffect(() => {
    const selectedIndex = options.findIndex(
      (option) => option.value === getValidShapeValue()
    );
    setSelected(selectedIndex !== -1 ? selectedIndex : defaultValue);
  }, [options, defaultValue]); // Depend only on options and defaultValue

  return (
    <div className={`w-full md:mb-16 ${className}`}>
      <TabHeader text="Shape" />
      <div className="flex justify-between items-center mt-6 w-full">
        {options.map(({ img, text }, idx) => (
          <div
            key={`kyd-${img}`}
            onClick={onClickHandler(idx)}
            className={`flex flex-col justify-center items-center rounded h-16 w-16 md:h-14 md:w-14 ${
              idx === selected ? "border-2 bg-black" : "border-[1px]"
            } border-solid border-black w-19 h-18 md:w-28 md:h-28 p-2 cursor-pointer`}
          >
            <Image
              src={img}
              alt="Arrow"
              height={1000}
              width={1000}
              className="m-auto h-10 w-10 md:h-20 md:w-auto object-contain"
            />
            <span
              className={`text-center font-normal font-body text-xs ${
                idx === selected ? "md:font-semibold !text-white" : ""
              }`}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapeSelector;
