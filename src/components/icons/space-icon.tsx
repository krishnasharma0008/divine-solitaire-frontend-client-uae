import { SvgIconProps } from "./icon-props";

const EmptySpaceIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  />
);

export default EmptySpaceIcon;
