import { SvgIconProps } from "./icon-props";

const MapPinIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="27"
    height="34"
    viewBox="0 0 27 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.7692 13.3077C25.7692 24.3846 13.3846 33 13.3846 33C13.3846 33 1 24.3846 1 13.3077C1 10.0435 2.3048 6.91298 4.62737 4.60484C6.94994 2.2967 10.1 1 13.3846 1C16.6692 1 19.8193 2.2967 22.1419 4.60484C24.4644 6.91298 25.7692 10.0435 25.7692 13.3077Z"
      fill="#161616"
      stroke="#161616"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.3845 18.2329C16.1204 18.2329 18.3384 16.0287 18.3384 13.3098C18.3384 10.5909 16.1204 8.38672 13.3845 8.38672C10.6486 8.38672 8.43066 10.5909 8.43066 13.3098C8.43066 16.0287 10.6486 18.2329 13.3845 18.2329Z"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default MapPinIcon;
