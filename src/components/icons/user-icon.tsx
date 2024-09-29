import { SvgIconProps } from "./icon-props";

const UserIcon: React.FC<SvgIconProps> = (props) => (
  <svg width="24" height="24" fill="none" stroke="#fff" {...props}>
    <path d="M12 15a6 6 0 1 0 0-12 6 6 0 1 0 0 12z" strokeMiterlimit="10" />
    <path
      d="M2.906 20.25A10.5 10.5 0 0 1 12 14.999a10.5 10.5 0 0 1 9.094 5.251"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UserIcon;
