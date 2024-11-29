// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.254 5.5c0-.41.34-.75.75-.75h3V1c0-.55-.45-1-1-1h-2.23C2.624 0-.116 2.58.004 5.72a5.5 5.5 0 001.61 3.67c1 .99 2.37 1.61 3.89 1.61h2.5c.55 0 1-.45 1-1V6.25h-3c-.41 0-.75-.34-.75-.75zm13.139-3.89c-1-.99-2.37-1.61-3.89-1.61h-2.5c-.55 0-1 .45-1 1v3.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3V10c0 .55.45 1 1 1h2.23c3.15 0 5.89-2.58 5.76-5.72a5.49 5.49 0 00-1.6-3.67z"
        }
        fill={"currentColor"}
      ></path>

      <path d={"M11.004 4.75h-2v1.5h2v-1.5z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
