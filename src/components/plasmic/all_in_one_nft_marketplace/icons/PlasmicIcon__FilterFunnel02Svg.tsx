// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterFunnel02SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterFunnel02SvgIcon(props: FilterFunnel02SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.821 4.722c-.63-.704-.945-1.056-.957-1.356a.833.833 0 01.302-.675C2.397 2.5 2.87 2.5 3.815 2.5h12.369c.945 0 1.418 0 1.649.19.2.166.312.416.302.676-.012.3-.327.652-.957 1.356l-4.756 5.315a1.77 1.77 0 00-.233.29.831.831 0 00-.086.227c-.02.09-.02.184-.02.372v4.456c0 .163 0 .244-.027.315a.417.417 0 01-.11.163c-.055.05-.131.08-.282.141L8.83 17.134c-.306.123-.459.184-.582.159a.417.417 0 01-.262-.178c-.07-.105-.07-.27-.07-.6v-5.589c0-.188 0-.283-.02-.372a.832.832 0 00-.086-.226 1.772 1.772 0 00-.234-.291L2.821 4.722z"
        }
        stroke={"#27273A"}
        strokeWidth={"1.667"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M2.821 4.722c-.63-.704-.945-1.056-.957-1.356a.833.833 0 01.302-.675C2.397 2.5 2.87 2.5 3.815 2.5h12.369c.945 0 1.418 0 1.649.19.2.166.312.416.302.676-.012.3-.327.652-.957 1.356l-4.756 5.315a1.77 1.77 0 00-.233.29.831.831 0 00-.086.227c-.02.09-.02.184-.02.372v4.456c0 .163 0 .244-.027.315a.417.417 0 01-.11.163c-.055.05-.131.08-.282.141L8.83 17.134c-.306.123-.459.184-.582.159a.417.417 0 01-.262-.178c-.07-.105-.07-.27-.07-.6v-5.589c0-.188 0-.283-.02-.372a.832.832 0 00-.086-.226 1.772 1.772 0 00-.234-.291L2.821 4.722z"
        }
        stroke={"#000"}
        strokeOpacity={".2"}
        strokeWidth={"1.667"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FilterFunnel02SvgIcon;
/* prettier-ignore-end */
