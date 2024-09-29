import { SvgIconProps } from "./icon-props";

const SignoutIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="#fff"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7.688 8.063L3.75 12l3.938 3.938M14.25 12H3.75m10.5 8.25h5.25a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75h-5.25" />
  </svg>
);

export default SignoutIcon;
