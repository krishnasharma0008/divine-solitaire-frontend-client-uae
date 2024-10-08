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
const OptionsSelector: React.FC<OptionsProps> = ({
  options,
  name,
  onSelect,
  className,
  defaultValue,
  selected: selectedVal,
}) => {
  const [selected, setSelected] = useState<number>(defaultValue);
  //console.log("Default Value : ", defaultValue);
  const optionClickHandler = (idx: number) => () => {
    setSelected(idx);
    if (onSelect) {
      onSelect(options[idx]);
    }
  };

  //console.log("selectedVal ", selectedVal);

  // useEffect(() => {
  //   const selectedIndex = options.findIndex((i) => i === selectedVal);
  //   setSelected(selectedIndex);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selected]);
  useEffect(() => {
    const selectedIndex = options.findIndex((option) => option === selectedVal);
    if (selectedIndex !== -1) {
      setSelected(selectedIndex);
    } else {
      setSelected(defaultValue); // Fallback to defaultValue if not found
    }
  }, [selectedVal, defaultValue, options]); // Depend on selectedVal, defaultValue, and options

  return (
    <div className={`w-full mb-6 ${className}`}>
      <TabHeader text={name} />

      <div
        className="w-full mt-4 flex flex-wrap items-center text-base font-normal md:mt-6 gap-3"
        // style={{ maxWidth: "350px" }}
        style={name !== "Clarity" ? { maxWidth: "350px" } : undefined}
      >
        {options.map((option, idx) => (
          <div
            key={`colors-${option}`}
            className={`w-auto flex h-[2rem] whitespace-nowrap p-2 rounded flex-col justify-center items-center gap-x-6 border-black border ${
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
    </div>
  );
};

export default OptionsSelector;
