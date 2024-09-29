import { SvgIconProps } from "./icon-props";

const EyeIcon: React.FC<SvgIconProps> = (props) => (
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" {...props}>
    <g id="Eye" clipPath="url(#clip0_859_5796)">
      <path
        id="Vector"
        d="M10.5 4.375C4.25 4.375 1.75 10 1.75 10C1.75 10 4.25 15.625 10.5 15.625C16.75 15.625 19.25 10 19.25 10C19.25 10 16.75 4.375 10.5 4.375Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_2"
        d="M10.5 13.125C12.2259 13.125 13.625 11.7259 13.625 10C13.625 8.27411 12.2259 6.875 10.5 6.875C8.77411 6.875 7.375 8.27411 7.375 10C7.375 11.7259 8.77411 13.125 10.5 13.125Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_859_5796">
        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default EyeIcon;
