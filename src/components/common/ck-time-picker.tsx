import React, { useState } from "react";

interface TimePickerProps {
  selectedTime: Date;
  onChange: (newTime: Date) => void;
}

const CHKTimePicker: React.FC<TimePickerProps> = ({
  selectedTime,
  onChange,
}) => {
  const [hours, setHours] = useState(
    selectedTime ? selectedTime.getHours() : 0
  );
  const [minutes, setMinutes] = useState(
    selectedTime ? selectedTime.getMinutes() : 0
  );
  const isAM = hours < 12;

  const handleHoursChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newHours = parseInt(e.target.value);
    setHours(newHours);
    onChange(new Date(0, 0, 0, newHours, minutes));
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMinutes = parseInt(e.target.value);
    setMinutes(newMinutes);
    onChange(new Date(0, 0, 0, hours, newMinutes));
  };

  return (
    <div className="flex space-x-2">
      <select
        className="px-2 py-1 border rounded"
        value={isAM ? hours : hours - 12}
        onChange={handleHoursChange}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i} value={i}>
            {i === 0 ? "12" : i.toString().padStart(2, "0")}
          </option>
        ))}
      </select>
      <span className="px-2">:</span>
      <select
        className="px-2 py-1 border rounded"
        value={minutes}
        onChange={handleMinutesChange}
      >
        {Array.from({ length: 60 }, (_, i) => (
          <option key={i} value={i}>
            {i.toString().padStart(2, "0")}
          </option>
        ))}
      </select>
      <select
        className="px-2 py-1 border rounded"
        value={isAM ? "AM" : "PM"}
        onChange={(e) => {
          const newIsAM = e.target.value === "AM";
          const adjustedHours = newIsAM ? hours : hours + 12;
          setHours(adjustedHours);
          onChange(new Date(0, 0, 0, adjustedHours, minutes));
        }}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

export default CHKTimePicker;
