import { SvgIconProps } from "./icon-props";

const ArrowUpIcon: React.FC<SvgIconProps> = (props) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
    <g id="ArrowUp" clipPath="url(#clip0_840_8747)">
      <path
        id="Vector"
        d="M12.5 20.25V3.75"
        stroke="#3B9D45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_2"
        d="M5.75 10.5L12.5 3.75L19.25 10.5"
        stroke="#3B9D45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_840_8747">
        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowUpIcon;
