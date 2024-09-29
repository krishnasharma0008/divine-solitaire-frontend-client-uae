import OptionsSelector from "./options-selector";

interface ClaritySelectorProps {
  className?: string;
  onSelect?: (value: string) => void;
  defaultValue: number;
  options: Array<string>;
  selected: string;
}

const ClaritySelector: React.FC<ClaritySelectorProps> = ({
  className,
  onSelect,
  defaultValue,
  options,
  selected,
}) => (
  <OptionsSelector
    name="Clarity"
    options={options}
    className={className}
    onSelect={onSelect}
    defaultValue={defaultValue}
    selected={selected}
  />
);

export default ClaritySelector;
