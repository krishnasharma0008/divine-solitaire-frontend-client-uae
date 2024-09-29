import { SvgIconProps } from "./icon-props";

const ShareFatIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="ShareFat" clipPath="url(#clip0_840_8688)">
      <path
        id="Vector"
        d="M3.39958 18.63C4.9427 16.9866 8.99364 13.5 14.7499 13.5V18L22.2499 10.5L14.7499 3V7.5C9.79989 7.5 3.45395 12.2297 2.74989 18.3319C2.74014 18.4109 2.7558 18.491 2.7946 18.5605C2.83339 18.63 2.89331 18.6854 2.96567 18.7186C3.03804 18.7518 3.11909 18.7611 3.1971 18.7452C3.27511 18.7293 3.34603 18.6889 3.39958 18.63Z"
        stroke="#161616"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_840_8688">
        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default ShareFatIcon;
