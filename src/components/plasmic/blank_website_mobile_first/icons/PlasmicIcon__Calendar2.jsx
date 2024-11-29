// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Calendar2Icon(props) {
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
        d={
          "M5.333 1.333v2m5.334-2v2M2.333 6.06h11.334M14 5.667v5.666c0 2-1 3.334-3.333 3.334H5.333C3 14.667 2 13.333 2 11.333V5.667c0-2 1-3.334 3.333-3.334h5.334C13 2.333 14 3.667 14 5.667z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7.997 9.133h.006m-2.473 0h.006m-.006 2h.006"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Calendar2Icon;
/* prettier-ignore-end */
