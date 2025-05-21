// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MagnifyingGlassSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MagnifyingGlassSvgIcon(props: MagnifyingGlassSvgIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.875 3.75a7.125 7.125 0 100 14.25 7.125 7.125 0 000-14.25zM2.25 10.875a8.625 8.625 0 1117.25 0 8.625 8.625 0 01-17.25 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.913 15.913a.75.75 0 011.06 0l4.557 4.556a.75.75 0 01-1.06 1.061l-4.557-4.556a.75.75 0 010-1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MagnifyingGlassSvgIcon;
/* prettier-ignore-end */
