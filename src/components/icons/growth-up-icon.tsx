import { SvgIconProps } from "./icon-props";

const GrowthUpIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1819_6192)">
      <path
        d="M19.5 15L12 7.5L4.5 15"
        stroke="#3B9D45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1819_6192">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="matrix(1 0 0 -1 0 24)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default GrowthUpIcon;
