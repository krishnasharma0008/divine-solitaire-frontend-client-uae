import { SvgIconProps } from "./icon-props";

const ShoppingCartIcon: React.FC<SvgIconProps> = (props) => (
  <svg width="24" height="24" {...props}>
    <g clipPath="url(#clip0_486_5061)">
      <path
        d="M7.5 21.75C8.32843 21.75 9 21.0784 9 20.25C9 19.4216 8.32843 18.75 7.5 18.75C6.67157 18.75 6 19.4216 6 20.25C6 21.0784 6.67157 21.75 7.5 21.75Z"
        fill="white"
      />
      <path
        d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
        fill="white"
      />
      <path
        d="M3.96469 6.75H21L18.3262 15.4416C18.2318 15.7482 18.0415 16.0165 17.7833 16.207C17.5252 16.3975 17.2127 16.5002 16.8919 16.5H7.88156C7.55556 16.5001 7.23839 16.3941 6.97806 16.1978C6.71772 16.0016 6.5284 15.7259 6.43875 15.4125L3.04781 3.54375C3.00301 3.38711 2.90842 3.24932 2.77835 3.15122C2.64828 3.05311 2.4898 3.00003 2.32687 3H0.75"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_486_5061">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ShoppingCartIcon;
