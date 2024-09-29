import { SvgIconProps } from "./icon-props";

const QuestionIcon: React.FC<SvgIconProps> = (props) => (
  <svg width="24" height="24" fill="none" {...props}>
    <g clipPath="url(#A)">
      <path
        d="M12 18c.621 0 1.125-.504 1.125-1.125S12.621 15.75 12 15.75s-1.125.504-1.125 1.125S11.379 18 12 18z"
        fill="#fff"
      />
      <g stroke="#fff" strokeLinejoin="round">
        <path
          d="M12 13.5v-.75c1.657 0 3-1.176 3-2.625S13.657 7.5 12 7.5s-3 1.176-3 2.625v.375"
          strokeLinecap="round"
        />
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 1 0 0 18z" />
      </g>
    </g>
    <defs>
      <clipPath id="A">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default QuestionIcon;
