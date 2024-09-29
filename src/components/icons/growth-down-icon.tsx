import { SvgIconProps } from "./icon-props";

const GrowthDownIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1819_6189)">
      <path
        d="M19.5 9L12 16.5L4.5 9"
        stroke="#FF0000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1819_6189">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default GrowthDownIcon;
