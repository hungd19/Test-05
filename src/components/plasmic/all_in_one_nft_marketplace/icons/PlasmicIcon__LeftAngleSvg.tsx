// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LeftAngleSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LeftAngleSvgIcon(props: LeftAngleSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M5 1L1 5l4 4"} stroke={"#27273A"}></path>

      <path d={"M5 1L1 5l4 4"} stroke={"#000"} strokeOpacity={".2"}></path>
    </svg>
  );
}

export default LeftAngleSvgIcon;
/* prettier-ignore-end */
