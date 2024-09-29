import { SvgIconProps } from "./icon-props";

const XIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="X">
      <g clipPath="url(#clip0_840_8728)">
        <rect width="24" height="24" rx="12" fill="#FFF1DD" />
        <g id="Group 141">
          <path
            id="Vector"
            d="M17 7L7 17"
            stroke="#161616"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M17 17L7 7"
            stroke="#161616"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_840_8728">
        <rect width="24" height="24" rx="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default XIcon;
