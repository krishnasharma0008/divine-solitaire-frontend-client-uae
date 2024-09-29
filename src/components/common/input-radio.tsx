import React, { ChangeEvent } from "react";

export interface InputTextProps {
  className?: string;
  htmlFor?: string;
  id?: string;
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "radio";
  value: string;
}

const InputRadio: React.FC<InputTextProps> = ({
  className,
  htmlFor,
  id,
  label,
  name,
  onChange,
  type,
  value,
}) => {
  return (
    <div className="flex justify-between mb-4">
      <input
        className={`py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block ${className}`}
        id={id}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
      <label className="pl-3" htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};

export default InputRadio;
