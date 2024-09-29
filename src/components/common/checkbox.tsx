import React from "react";

interface CheckboxProps {
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  className?: string;
  children: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  checked,
  id,
  className,
  children,
}) => {
  return (
    <div className={`flex ${className}`}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label className="ml-2 block">{children}</label>
    </div>
  );
};

export default Checkbox;
