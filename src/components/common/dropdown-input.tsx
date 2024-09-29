import { Option, Select, SelectProps } from "@material-tailwind/react";
import React from "react";

export interface DropdownProps extends Omit<SelectProps, "children"> {
  items: Array<string>;
  className?: string;
  id?: string;
  containerClass?: string;
  name?: string;
  value?: string;
  optionsClassName?: string;
}

const DropdownInput: React.FC<DropdownProps> = ({
  items,
  className,
  id,
  name,
  selected,
  containerClass,
  optionsClassName,
  value,
}) => {
  return (
    <div className={`mb-4 ${containerClass}`}>
      <Select
        id={id}
        name={name}
        selected={selected}
        value={value}
        className={`py-2 px-3 border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block ${className}`}
      >
        {items.map((item, idx) => {
          return (
            <Option key={`${item}_${idx}`} className={optionsClassName}>
              {item}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default DropdownInput;
