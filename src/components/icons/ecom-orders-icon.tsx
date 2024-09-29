import { SvgIconProps } from "./icon-props";

const EcomOrdersIcon: React.FC<SvgIconProps> = (props) => (
  <svg width="24" height="24" {...props}>
    <g clipPath="url(#A)" stroke="#fff">
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 11.25v5.25m5.25-8.25l-5.25-6-5.25 6" />
      </g>
      <path
        d="M3 8.25a.75.75 0 0 0-.562.254.75.75 0 0 0-.181.59l1.3 9.75a.75.75 0 0 0 .743.656H19.7a.75.75 0 0 0 .744-.651l1.3-9.75a.75.75 0 0 0-.179-.593A.75.75 0 0 0 21 8.25H3z"
        strokeLinejoin="round"
      />
      <g strokeLinecap="round">
        <path
          d="M16.95 11.25l-.525 5.25M7.05 11.25l.525 5.25"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="A">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default EcomOrdersIcon;
