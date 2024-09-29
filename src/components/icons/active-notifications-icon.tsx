import { SvgIconProps } from "./icon-props";

const ActiveNotificationsIcon: React.FC<SvgIconProps> = (props) => (
  <svg width="24" height="24" fill="none" {...props}>
    <g clipPath="url(#A)" stroke="#fff" strokeLinejoin="round">
      <path
        d="M19.5 12v7.5a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75H12"
        strokeLinecap="round"
      />
      <path d="M18.375 8.25C19.825 8.25 21 7.075 21 5.625S19.825 3 18.375 3 15.75 4.175 15.75 5.625s1.175 2.625 2.625 2.625z" />
    </g>
    <defs>
      <clipPath id="A">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ActiveNotificationsIcon;
