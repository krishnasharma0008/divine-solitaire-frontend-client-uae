import { SvgIconProps } from "./icon-props";

const ArrowRightIcon: React.FC<SvgIconProps> = (props) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <g clipPath="url(#clip0_909_11661)">
      <path
        d="M5 16H27"
        stroke="#252525"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 7L27 16L18 25"
        stroke="#252525"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_909_11661">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowRightIcon;
