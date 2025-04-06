import { SvgIconProps } from "./icon-props";

const SucessIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width="24" height="24" fill="url(#pattern0_1119_2004)" />
    <defs>
      <pattern
        id="pattern0_1119_2004"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_1119_2004" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_1119_2004"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default SucessIcon;
