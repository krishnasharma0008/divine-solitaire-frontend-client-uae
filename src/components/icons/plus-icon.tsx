import { SvgIconProps } from "./icon-props";

const PlusIcon: React.FC<SvgIconProps> = ({ className, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    className={className}
    onClick={onClick}
  >
    <g clipPath="url(#clip0_1640_1011)">
      <path
        d="M5 16.0451H27"
        stroke="#161616"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5.04509V27.0451"
        stroke="#161616"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1640_1011">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0 0.0450897)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default PlusIcon;
