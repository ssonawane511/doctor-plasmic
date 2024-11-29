// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LocationIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M8 8.953a2.08 2.08 0 100-4.16 2.08 2.08 0 000 4.16z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>

      <path
        d={
          "M2.413 5.66c1.314-5.773 9.867-5.767 11.174.007.766 3.386-1.34 6.253-3.187 8.026a3.462 3.462 0 01-4.807 0c-1.84-1.773-3.946-4.646-3.18-8.033z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>
    </svg>
  );
}

export default LocationIcon;
/* prettier-ignore-end */
