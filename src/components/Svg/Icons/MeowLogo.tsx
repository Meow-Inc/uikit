import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 25 25" {...props}>
      <defs>
        <clipPath id="a" transform="translate(-0.2 -0.02)">
          <polygon points="537.86 218.82 537.86 870.26 926.84 870.26 926.84 277.31 537.86 218.82" fill="none"/>
        </clipPath>
        <clipPath id="b" transform="translate(-0.2 -0.02)">
          <polyline points="540 144.02 540 230.74 540 970.93 111.39 970.93 111.39 224.69" fill="none"/>
        </clipPath>
      </defs>
      <ellipse cx="539.82" cy="539.99" rx="539.82" ry="539.99" fill="#ef52d1"/>
        <g clip-path="url(#a)">
          <path d="M195.7,377.39c0-58.59,34.41-84.63,76.26-84.63,20.46,0,35.34,5.58,49.29,18.6,26-13.95,55.8-18.6,83.7-18.6,53.94,0,98.58,13,133,38.13,34.41-25.11,80-38.13,133.92-38.13,132.06,0,209.25,75.33,209.25,207.39V679.64c0,61.38-33.48,88.35-75.33,88.35-42.78,0-76.26-27-76.26-88.35V502a57.35,57.35,0,0,0-57.66-57.66c-30.69,0-55.8,23.25-57.66,53V679.64C614.2,741,580.72,768,538.87,768c-42.78,0-76.26-27-76.26-88.35V502A57.35,57.35,0,0,0,405,444.35c-30.69,0-55.8,23.25-57.66,53V679.64c0,58.59-34.41,89.28-74.4,89.28-44.64,0-75.33-23.25-77.19-88.35Z" transform="translate(-0.2 -0.02)" fill="#fff"/>
        </g>
        <g clip-path="url(#b)">
          <path d="M884,680.34c-1.86,65.1-32.55,88.35-77.19,88.35-40,0-74.4-30.69-74.4-89.28V497.13c-1.86-29.76-27-53-57.66-53a57.35,57.35,0,0,0-57.66,57.66V679.41c0,61.38-33.48,88.35-76.26,88.35-41.85,0-75.33-27-75.33-88.35V497.13c-1.86-29.76-27-53-57.66-53a57.35,57.35,0,0,0-57.66,57.66V679.41c0,61.38-33.47,88.35-76.26,88.35-41.84,0-75.32-27-75.32-88.35V499.92c0-132.06,77.19-207.39,209.24-207.39,53.94,0,99.51,13,133.92,38.13,34.41-25.11,79-38.13,133-38.13,27.9,0,57.66,4.65,83.7,18.6,14-13,28.83-18.6,49.29-18.6,41.85,0,76.26,26,76.26,84.63Z" transform="translate(-0.2 -0.02)" fill="#fff"/>
        </g>
        <rect x="538.18" y="329.56" width="3.27" height="2.5" transform="translate(287.19 -249.83) rotate(35)" fill="#fff"/>
      </Svg>
  );
};

export default Icon;
