//import OptionsSelector from "./options-selector";
import FancyColorOption from "./fancy-color-selector";

interface ColorSelectorProps {
  onSelect?: (value: string) => void;
  className?: string;
  defaultValue: number;
  options: Array<string>;
  selected: string;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  onSelect,
  className,
  defaultValue,
  options,
  selected,
}) => (
  <FancyColorOption
    name="Colour"
    options={options}
    onSelect={onSelect}
    className={className}
    defaultValue={defaultValue}
    selected={selected}
  />
);

export default ColorSelector;
