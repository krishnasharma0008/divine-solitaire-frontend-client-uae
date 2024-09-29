import { SvgIconProps } from "./icon-props";

const PopUpCancelIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g filter="url(#filter0_b_11_155)">
      <circle cx="15" cy="15" r="15" fill="#F3F3F3" fill-opacity="0.43" />
    </g>
    <rect x="7" y="7" width="16" height="16" fill="url(#pattern0)" />
    <defs>
      <filter
        id="filter0_b_11_155"
        x="-4"
        y="-4"
        width="38"
        height="38"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_11_155"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_11_155"
          result="shape"
        />
      </filter>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_11_155" transform="scale(0.0104167)" />
      </pattern>
      <image
        id="image0_11_155"
        width="96"
        height="96"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABwUlEQVR4nO2cQW7CMBQF/5nyFuFmdNcue9lWuYG7SSSEgBIK/f/ZM2sW8YytBDtKBAAAAAAAAAAAAAAAANjyFhFz+DOvY7HiIyJaRCwRcQhfFBHf61g+w0x+M4+gE/nNJcK5fNcIuiC/fIRr8t0i6Ib8shHefrng0wiVb8zzeo33jKXUjXmKiK8dEQ6mM79VnkjOEeQu3zmCepHvGEG9yXeKoF7lO0RQ7/IrR9Ao8itG0GjyK0XQqPIrRNDo8jMjCPl5EYT8vAhCfl4EIT8vgpCfF0HIz4sg5OdFEPLzIgj5eeeyy87fdvsPN3MlNOTXjrAw8/MiLMjPWwkL8vMiLMh/LtrxqLln2wJeIJ8IBeQ3VkK+/EaEfPmNCPuZ2YrIQw9srFV45aUL9IddTSIkyt8gwoPoifv5REiUv0GEO9ELT7KIkCh/gwhX+M8z3IlH1Dz5G0RYyXx7YRp9JVR4dWQaNUIF+cNGqCR/uAgV5Q8TobL87iM4yO82gpP87iI4yu8mgrP8LiLwybICHE1n/iMr4T2KcjSXf0+EsvKvRXCTfytCefnnEVzlX4pgI3+Dj3cDAAAAAAAAAAAAAABApPMDku+sSq/QIeEAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default PopUpCancelIcon;
