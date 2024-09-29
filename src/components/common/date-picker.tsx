import DatePickerTw from "react-datepicker";

interface DatePickerProps {
  className?: string;
  label?: string;
  value: Date;
  onChange: (e: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  onChange,
  className,
  label,
  value,
}) => (
  <div className={`flex flex-col ${className}`}>
    {label && <label className="absolute -mt-6">{label}</label>}
    <DatePickerTw
      selected={value}
      onChange={onChange}
      dateFormat="dd-MM-yyyy"
      className="border border-black p-2.5 rounded"
    />
  </div>
);

export default DatePicker;
export { type DatePickerProps };
