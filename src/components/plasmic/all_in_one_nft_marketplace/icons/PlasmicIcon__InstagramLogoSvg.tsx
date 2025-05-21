// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramLogoSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramLogoSvgIcon(props: InstagramLogoSvgIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M16 12a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0z"}
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.5 5.5a5 5 0 00-5 5v11a5 5 0 005 5h11a5 5 0 005-5v-11a5 5 0 00-5-5h-11zm-7 5a7 7 0 017-7h11a7 7 0 017 7v11a7 7 0 01-7 7h-11a7 7 0 01-7-7v-11z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M22.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InstagramLogoSvgIcon;
/* prettier-ignore-end */
