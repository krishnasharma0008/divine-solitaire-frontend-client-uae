import { SvgIconProps } from "./icon-props";

const XMarkIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
export default XMarkIcon;
