import React, { ChangeEvent } from "react";

export interface TextInputProps {
  className?: string;
  id?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  placeholder?: string;
  type: "file" | "number" | "date" | "text" | "password" | "email";
  value?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  className,
  id,
  name,
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className="mb-4">
      <input
        className={`py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block ${className}`}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};

export default TextInput;
