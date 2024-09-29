import { Radio } from "@material-tailwind/react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface OptionsProps<T> {
  options: Array<T>;
  render: (data: T, idx: number) => React.ReactNode;
  className?: string;
  onChange?: (idx: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Options: React.FC<OptionsProps<any>> = ({
  options,
  render,
  className,
  onChange,
  name,
}) => (
  <div className={`flex flex-col ${className}`}>
    {options.map((item, idx) => (
      <Radio
        className={`hover:before:opacity-0 `}
        key={idx}
        id={`option-${idx}`}
        label={render(item, idx)}
        name={name}
        onChange={(e) => onChange && onChange(idx, e)}
        ripple={false}
        color="brown"
      ></Radio>
    ))}
  </div>
);

export default Options;
export { type OptionsProps };
