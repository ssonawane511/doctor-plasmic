// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaskBeamIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 56"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M56 28C56 12.536 43.464 0 28 0S0 12.536 0 28s12.536 28 28 28 28-12.536 28-28z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskBeamIcon;
/* prettier-ignore-end */
