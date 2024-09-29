import React from "react";

import { SvgIconProps } from "./icon-props";

const WorkingHourIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="160" height="160" fill="#F4F4F4" />
    <path
      d="M80 111.5C97.397 111.5 111.5 97.397 111.5 80C111.5 62.603 97.397 48.5 80 48.5C62.603 48.5 48.5 62.603 48.5 80C48.5 97.397 62.603 111.5 80 111.5Z"
      stroke="#161616"
      strokeWidth="2"
      stroke-miterlimit="10"
    />
    <path
      d="M80 61.625V80H98.375"
      stroke="#161616"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default WorkingHourIcon;
