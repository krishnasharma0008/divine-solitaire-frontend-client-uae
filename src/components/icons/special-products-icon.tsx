import { SvgIconProps } from "./icon-props";

const SpecialProductsIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="#fff"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 14.25c5.385 0 9.75-2.015 9.75-4.5s-4.365-4.5-9.75-4.5-9.75 2.015-9.75 4.5 4.365 4.5 9.75 4.5z" />
    <g strokeLinecap="round">
      <path d="M12 14.25v4.5" />
      <path d="M2.25 9.75v4.5c0 2.25 3.75 4.5 9.75 4.5s9.75-2.25 9.75-4.5v-4.5" />
      <path d="M18 13.322v4.5m-12-4.5v4.5" />
    </g>
  </svg>
);

export default SpecialProductsIcon;
