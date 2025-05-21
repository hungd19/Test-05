// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloseSquareSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloseSquareSvgIcon(props: CloseSquareSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M18 6L6 18"}
        stroke={"#27273A"}
        strokeWidth={"2"}
        strokeLinecap={"square"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18 6L6 18"}
        stroke={"#000"}
        strokeOpacity={".2"}
        strokeWidth={"2"}
        strokeLinecap={"square"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 6l12 12"}
        stroke={"#27273A"}
        strokeWidth={"2"}
        strokeLinecap={"square"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 6l12 12"}
        stroke={"#000"}
        strokeOpacity={".2"}
        strokeWidth={"2"}
        strokeLinecap={"square"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CloseSquareSvgIcon;
/* prettier-ignore-end */
