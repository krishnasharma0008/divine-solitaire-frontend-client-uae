import { SvgIconProps } from "./icon-props";

const MenuIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="27"
    height="24"
    viewBox="0 0 27 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.5 21V24H3V21H19.5ZM27 10.5V13.5H0V10.5H27ZM24 0V3H7.5V0H24Z"
      fill="white"
    />
  </svg>
);

export default MenuIcon;
