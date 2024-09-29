import { SvgIconProps } from "./icon-props";

const MinusIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_1640_888)">
      <path
        d="M5 16.0951H27"
        stroke="#161616"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1640_888">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0 0.0950775)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default MinusIcon;
