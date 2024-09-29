import { SvgIconProps } from "./icon-props";

const SecondarySaleIcon: React.FC<SvgIconProps> = (props) => (
  <svg width="24" height="24" fill="none" {...props}>
    <g clipPath="url(#A)" stroke="#fff" strokeLinejoin="round">
      <path d="M6.75 3.75h10.5l5.25 6L12 21 1.5 9.75l5.25-6z" />
      <path d="M16.5 9.75L12 21 7.5 9.75l4.5-6 4.5 6z" />
      <path d="M1.5 9.75h21" strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="A">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SecondarySaleIcon;
