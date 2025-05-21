// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterLogoSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterLogoSvgIcon(props: TwitterLogoSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16 11c0-2.75 2.312-5.037 5.062-5a5 5 0 014.525 3H30l-4.038 4.038A15.988 15.988 0 0110 28c-4 0-5-1.5-5-1.5S9 25 11 22c0 0-8-4-6-15 0 0 5 5 11 6v-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TwitterLogoSvgIcon;
/* prettier-ignore-end */
