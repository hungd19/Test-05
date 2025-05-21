// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type YoutubeLogoSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function YoutubeLogoSvgIcon(props: YoutubeLogoSvgIconProps) {
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
        d={
          "M13.528 11.118a1 1 0 011.027.05l6 4a1 1 0 010 1.664l-6 4A1 1 0 0113 20v-8a1 1 0 01.528-.882zM15 13.868v4.263L18.197 16 15 13.868z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.998 5.05h-.079l-.236.001a54.216 54.216 0 00-3.76.183c-2.276.193-5.174.592-7.405 1.444l-.015.006a3.012 3.012 0 00-1.796 2.04v.003C2.394 9.946 2 12.206 2 16c0 3.794.395 6.054.706 7.273l.001.003a3.012 3.012 0 001.796 2.04l.015.006c2.231.852 5.13 1.25 7.406 1.443a54.288 54.288 0 003.995.185h.162c.055 0 .134 0 .236-.002a54.288 54.288 0 003.76-.183c2.276-.192 5.174-.591 7.405-1.444l.015-.005a3.012 3.012 0 001.796-2.04v-.003c.312-1.22.707-3.479.707-7.273 0-3.794-.395-6.054-.706-7.273l-.001-.004a3.013 3.013 0 00-1.796-2.039l-.015-.006c-2.231-.852-5.13-1.251-7.406-1.443a54.216 54.216 0 00-3.995-.185h-.083zm-.003 19.9h.082c.049 0 .123 0 .219-.002a52.298 52.298 0 003.612-.176c2.236-.189 4.896-.57 6.852-1.316a1.012 1.012 0 00.597-.68C27.62 21.742 28 19.652 28 16c0-3.653-.38-5.743-.643-6.775a1.013 1.013 0 00-.597-.682c-1.956-.745-4.616-1.127-6.852-1.315a52.216 52.216 0 00-3.831-.178h-.154l-.219.001a52.216 52.216 0 00-3.612.176c-2.236.19-4.896.57-6.852 1.316a1.012 1.012 0 00-.597.682C4.38 10.257 4 12.347 4 16c0 3.653.38 5.743.643 6.775a1.013 1.013 0 00.597.681c1.956.746 4.616 1.127 6.852 1.316a52.298 52.298 0 003.831.178h.072z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default YoutubeLogoSvgIcon;
/* prettier-ignore-end */
