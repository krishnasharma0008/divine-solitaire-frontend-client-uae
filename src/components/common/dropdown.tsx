import { Select, Option, SelectProps } from "@material-tailwind/react";
import React from "react";

export interface DropdownProps
  extends Omit<SelectProps, "children" | "onChange"> {
  options: Array<string>; // Array of options for the dropdown
  value: string; // Current selected value
  onChange: (value: string) => void; // Function to handle change events
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  disabled,
  value,
  onChange,
}) => {
  // Render the dropdown component
  return (
    <div className="mb-4 [&>div>ul]:my-0 [&>div>ul>li]:!text-black [&>div>button]:!border-black [&>div]:min-w-0">
      <Select
        label={label}
        className="border rounded bg-white [&+label]:inset-0 [&>span]:px-2 [&>span]:!pt-0 !border-blue-gray-200 [&+label]:!text-black"
        style={{ minWidth: 0 }}
        color="gray"
        disabled={disabled}
        variant="static"
        value={value}
        onChange={(e) => {
          if (typeof e === "string") {
            onChange(e); // Invoke the onChange prop with the selected value
          }
        }}
      >
        {options.map((item) => (
          <Option key={item} value={item} style={{ listStyleType: "none" }}>
            {item}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default Dropdown;
