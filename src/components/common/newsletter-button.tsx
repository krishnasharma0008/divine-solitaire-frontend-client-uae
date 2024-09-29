import React, { ChangeEvent } from "react";

export interface ButtonProps {
  className?: string;
  id?: string;
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  placeholder?: string;
  type: "file" | "number" | "date" | "text" | "password";
  value?: string;
}

const NewsletterButton: React.FC<ButtonProps> = ({
  className,
  id,
  label,
  name,
  onChange,
  onClick,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className="flex gap-x-3">
      <input
        className={`py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 block ${className}`}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <button
        onClick={onClick}
        className={`inline-flex items-center justify-center mb-0 px-4 py-2 bg-Chinese-Black-sidebar border border-solid ring-white rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition ${className}`}
      >
        {label}
      </button>
    </div>
  );
};

export default NewsletterButton;
