import { useEffect, useState } from "react";

import TabHeader from "./tab-header";

interface OptionsProps {
  options: Array<string>;
  onChange?: () => void;
  name: string;
  onSelect?: (value: string) => void;
  className?: string;
  defaultValue: number;
  selected: string;
}
const ColourOptionsSelector: React.FC<OptionsProps> = ({
  options,
  name,
  onSelect,
  className,
  defaultValue,
  selected: selectedVal,
}) => {
  const [selected, setSelected] = useState<number>(defaultValue);
  //console.log("Default Value : ", defaultValue);

  const ColorsLength = options.filter(
    (color) => color !== "VDF" && color !== "INY"
  ).length;

  const optionClickHandler = (idx: number) => () => {
    setSelected(idx);
    if (onSelect) {
      onSelect(options[idx]);
    }
  };

  // useEffect(() => {
  //   const selectedIndex = options.findIndex((i) => i === selectedVal);
  //   setSelected(selectedIndex);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selected]);
  useEffect(() => {
    const selectedIndex = options.findIndex((option) => option === selectedVal);
    setSelected(selectedIndex !== -1 ? selectedIndex : defaultValue);
  }, [selectedVal, options, defaultValue]); // Depend on selectedVal, options, and defaultValue

  return (
    <div className={`w-full mb-6 ${className}`}>
      <TabHeader text={name} />
      <div className="flex flex-row gap-x-2 mr-[0.5px]">
        {/* Div for colors D to K */}
        <div
          className="w-full mt-4 flex flex-wrap items-center text-base font-normal  md:mt-6 gap-3"
          style={{ maxWidth: "200px;" }}
        >
          {options.slice(0, ColorsLength).map((option, idx) => (
            <div
              key={`colors-${option}`}
              className={`w-auto flex h-[2rem] p-2 rounded flex-col justify-center gap-x-6 border-black border ${
                idx === selected ? "md:font-semibold bg-black text-white" : ""
              }`}
              role="button"
              tabIndex={0}
              onClick={optionClickHandler(idx)}
            >
              {option}
            </div>
          ))}
        </div>
        {/* Divider */}
        <div className="w-2 mt-4 bg-slate-200"></div>
        {/* Div for colors VDF and INY */}
        <div
          className="flex flex-col gap-y-2 mt-4"
          style={{ maxWidth: "120px" }}
        >
          {options.slice(ColorsLength).map((color, idx) => (
            <div
              key={`color-${color}`}
              onClick={optionClickHandler(idx + ColorsLength)}
              className={`h-[2rem] flex whitespace-nowrap justify-center items-center border rounded border-solid border-black p-2 cursor-pointer ${
                idx + ColorsLength === selected ? "bg-black text-white" : ""
              }`}
            >
              {color === "VDF"
                ? "Yellow Vivid"
                : color === "INY"
                ? "Yellow Intense"
                : color}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColourOptionsSelector;
