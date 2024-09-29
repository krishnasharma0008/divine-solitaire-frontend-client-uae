import { SvgIconProps } from "./icon-props";

const ArrowCircleLeftIcon: React.FC<SvgIconProps> = (props) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
    <g id="ArrowCircleLeft" clipPath="url(#clip0_840_8811)">
      <path
        id="Vector"
        d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
        stroke="#161616"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_2"
        d="M13.75 20H26.25"
        stroke="#161616"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_3"
        d="M18.75 15L13.75 20L18.75 25"
        stroke="#161616"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_840_8811">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowCircleLeftIcon;
