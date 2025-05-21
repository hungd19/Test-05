// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RocketLaunchSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RocketLaunchSvgIcon(props: RocketLaunchSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
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
          "M6.67 12.45a.625.625 0 01-.393.79c-1.06.357-1.622 1.246-1.923 2.15a6.1 6.1 0 00-.236.991c.286-.043.632-.115.991-.235.905-.301 1.794-.864 2.15-1.924a.625.625 0 011.185.399c-.534 1.589-1.856 2.35-2.94 2.711a7.372 7.372 0 01-2.019.362l-.038.001h-.016l-.001-.625h-.625v-.019a3.195 3.195 0 01.006-.168 7.373 7.373 0 01.357-1.888c.36-1.084 1.122-2.406 2.71-2.94a.625.625 0 01.793.393zm-3.24 4.62h-.625c0 .345.28.625.625.625v-.625zM17.046 3.454c-.725-.105-2.51-.144-4.338 1.683L7.845 10l2.655 2.655 4.863-4.862c1.827-1.828 1.788-3.614 1.683-4.339zm.181-1.237c-.997-.144-3.221-.145-5.403 2.037L6.519 9.558a.625.625 0 000 .884l3.54 3.54a.626.626 0 00.883 0l5.305-5.305c2.182-2.183 2.18-4.407 2.036-5.404a1.234 1.234 0 00-1.056-1.056z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M14.922 8.492c.345 0 .625.28.625.625v5.057a1.25 1.25 0 01-.372.871l-2.522 2.53a1.25 1.25 0 01-2.11-.64l-.656-3.273a.625.625 0 111.226-.246l.656 3.275 2.528-2.536V9.117c0-.345.28-.625.625-.625zM6.327 4.953h5.056a.625.625 0 110 1.25H6.345l-.005.005-2.53 2.523 3.274.656a.625.625 0 11-.246 1.226l-3.272-.656a1.25 1.25 0 01-.64-2.11l2.53-2.522a1.25 1.25 0 01.871-.372z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RocketLaunchSvgIcon;
/* prettier-ignore-end */
