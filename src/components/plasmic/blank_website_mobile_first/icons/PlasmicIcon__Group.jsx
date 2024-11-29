// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M6.222 10.889c3.111 1.555 6.222 1.555 9.334 0"}
        stroke={"currentColor"}
        strokeWidth={"2.222"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={
          "M2.333 1.556C2.333.696 1.811 0 1.167 0 .522 0 0 .696 0 1.556 0 2.415.522 3.11 1.167 3.11c.644 0 1.166-.696 1.166-1.555zm18.667 0C21 .696 20.478 0 19.833 0c-.644 0-1.166.696-1.166 1.556 0 .859.522 1.555 1.166 1.555.645 0 1.167-.696 1.167-1.555z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
