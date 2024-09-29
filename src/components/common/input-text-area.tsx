import { Textarea, TextareaProps } from "@material-tailwind/react";
import React from "react";

export interface TextAreaProps extends TextareaProps {
  className?: string;
  containerClass?: string;
  id?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  errorText?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  className,
  containerClass,
  id,
  label,
  onChange,
  value,
  disabled,
  placeholder,
  errorText,
  rows = 4,
}) => {
  return (
    <div className={`mb-4 ${containerClass}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-black mb-2"
        >
          {label}
        </label>
      )}
      <Textarea
        id={id}
        // className={`border rounded border-black w-full p-2 ${
        //   disabled ? "bg-gray-100" : "bg-white"
        // } ${className}`}
        className={`border rounded ${
          !errorText
            ? "!border-black !border-px focus:border-transparent [&+label]:!text-black"
            : ""
        } [&+label]:-mt-3.5 px-2 !pt-2 [&+label]:focus:!text-black ${className}`}
        onChange={onChange}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        error={!!errorText}
        rows={rows}
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
  );
};

export default TextArea;
