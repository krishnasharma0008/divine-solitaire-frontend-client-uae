import React from "react";

interface TimePickerProps {
  className?: string;
  label?: string;
  value: string; // Use string to represent the selected time in HH:mm format
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  onChange,
  className,
  label,
  value,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="absolute -mt-6">{label}</label>}
      <input
        type="time"
        value={value}
        onChange={onChange}
        className="border border-black p-2.5 rounded"
        step="3600"
      />
    </div>
  );
};

export default TimePicker;
export type { TimePickerProps };
