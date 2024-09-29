import { CountryCode } from "@/interface/country-code";

import DropdownInput from "./dropdown-input";
import InputText from "./input-text";

interface MobileNumberInputProps {
  onChange: (mobileNumber: string, countryCode: CountryCode) => void;
  value: string;
  countryCode: CountryCode;
  className?: string;
}

const MobileNumberInput: React.FC<MobileNumberInputProps> = ({
  onChange,
  value,
  countryCode,
  className,
}) => {
  const onSelectHandler = (elem?: React.ReactElement) => {
    onChange(value, (elem?.props?.children as CountryCode) || countryCode);
    return elem?.props?.children || countryCode;
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value);
    if (!e.target.value.length) return onChange("", countryCode);
    if (!isNaN(number) && e.target.value.length <= 10)
      onChange(`${parseInt(e.target.value)}`, countryCode);
  };

  return (
    <div className={className}>
      <DropdownInput
        selected={onSelectHandler}
        items={Object.values(CountryCode)}
        className="py-3 border-gray_light !rounded !mt-0"
        containerClass="[&>div]:min-w-[70px]  [&>div]:h-11 [&>div>ul]:!px-2"
      />
      <InputText
        placeholder="Enter Mobile Number"
        onChange={onChangeHandler}
        containerClass="!mt-0 !mb-0"
        className="!border-gray_light"
        value={value}
        type="text"
      />
    </div>
  );
};

export default MobileNumberInput;
export { type MobileNumberInputProps };
