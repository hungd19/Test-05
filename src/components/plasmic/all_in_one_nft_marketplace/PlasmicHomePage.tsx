// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qLP7ErC94TEE4dz5dv2X5Z
// Component: 0kNdMb3gq-kD

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Header from "../../Header"; // plasmic-import: 10EiSPWhbhx8/component
import { AntdAvatar } from "@plasmicpkgs/antd5/skinny/registerAvatar";
import Footer from "../../Footer"; // plasmic-import: -cOCZnE_z14s/component

import { useScreenVariants as useScreenVariantsp6MrClqyiXeZ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: p6MrClqyiXeZ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: 66MC2d9B7YecVEphuUMtqF/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qLP7ErC94TEE4dz5dv2X5Z/projectcss
import sty from "./PlasmicHomePage.module.css"; // plasmic-import: 0kNdMb3gq-kD/css

import RocketLaunchSvgIcon from "./icons/PlasmicIcon__RocketLaunchSvg"; // plasmic-import: rmZ8cXclu7PH/icon

createPlasmicElementProxy;

export type PlasmicHomePage__VariantMembers = {};
export type PlasmicHomePage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomePage__VariantsArgs;
export const PlasmicHomePage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomePage__ArgsType = {};
type ArgPropType = keyof PlasmicHomePage__ArgsType;
export const PlasmicHomePage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomePage__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  button?: Flex__<"button">;
  svg?: Flex__<"svg">;
  img?: Flex__<typeof PlasmicImg__>;
  avatar?: Flex__<typeof AntdAvatar>;
  image?: Flex__<typeof PlasmicImg__>;
  image2?: Flex__<typeof PlasmicImg__>;
  image3?: Flex__<typeof PlasmicImg__>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultHomePageProps {
  className?: string;
}

const $$ = {};

function PlasmicHomePage__RenderFunc(props: {
  variants: PlasmicHomePage__VariantsArgs;
  args: PlasmicHomePage__ArgsType;
  overrides: PlasmicHomePage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsp6MrClqyiXeZ()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__ai7U)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__q9RRf)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__oHtnf)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rxAsw
                  )}
                >
                  {"The leading marketplace on SUI blockchain"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jAe1W
                  )}
                >
                  {
                    "Discover the most outstanding NFTs across various categories. Buy and sell to earn rewards"
                  }
                </div>
                <Stack__
                  as={"button"}
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.button,
                    sty.button
                  )}
                  onClick={async event => {
                    const $steps = {};

                    $steps["goToViewNftList"] = true
                      ? (() => {
                          const actionArgs = { destination: `/view-nft-list` };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              location.assign(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToViewNftList"] != null &&
                      typeof $steps["goToViewNftList"] === "object" &&
                      typeof $steps["goToViewNftList"].then === "function"
                    ) {
                      $steps["goToViewNftList"] = await $steps[
                        "goToViewNftList"
                      ];
                    }
                  }}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__o9HkW)}
                  >
                    <RocketLaunchSvgIcon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(projectcss.all, sty.svg)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dzq2N
                      )}
                    >
                      {"Browse NFTs"}
                    </div>
                  </div>
                </Stack__>
              </Stack__>
              <div className={classNames(projectcss.all, sty.freeBox___6Lq8)}>
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"420px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"400px"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={
                    "https://suinova.var-meta.com/static/img/nft-illustration.jpeg"
                  }
                />

                <section
                  className={classNames(projectcss.all, sty.section__jeFhf)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__xypp9)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tjvpJ
                      )}
                    >
                      {"Magic Astronaut"}
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__iRg8Y)}
                    >
                      <AntdAvatar
                        data-plasmic-name={"avatar"}
                        data-plasmic-override={overrides.avatar}
                        className={classNames("__wab_instance", sty.avatar)}
                        letters={"AB"}
                        src={
                          "https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CwSGrTLpUYdXblpCocSw6T~HZ16t6BTJdEZae9jSB2mrNxDvoE5KKmo0n9UnqbOZWiieqCbyHCkRi-v6LTtujDRQ7kGIGlulR1vOeafoZ~g4tIGrB1CqdZcU6qT9N9tDxCpRiZVJXAIdE1Ho-b1fC-MTC-x5Fr9GoxT-Ky~cyDhUoaXJPe0h8kLxqADrWIJQvnOx-3EpkLWJNmtG8NUSGobUSx4jfLzgRyGqOfYF-atkRO9KO1Ly7moRM0GotLyuNwbie90rJQOqOwy~fX890y9QlN-AK4EaXnOKgBd5a3U~3Ur-fqgzJYQO-8abilryng6d5UQID21Sdu4Vokx0OA__"
                        }
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dZar
                        )}
                      >
                        {"Bronan"}
                      </div>
                    </Stack__>
                  </div>
                </section>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__j80Z)}>
              <div className={classNames(projectcss.all, sty.freeBox__wuV3K)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hi3St
                  )}
                >
                  {"Trending NFTs"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kNsId
                  )}
                >
                  {"Checkout our weekly updated trending NFTs"}
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__jCuAp)}>
              <div className={classNames(projectcss.all, sty.freeBox__xxm8T)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__eYnv6
                  )}
                >
                  {"How it works"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__n1QiF
                  )}
                >
                  {"Find out how to get started"}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__juMLh)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox___84KkH)}
                  >
                    <section
                      className={classNames(projectcss.all, sty.section__hkwlv)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__iWdPm
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__vXaOj
                          )}
                        >
                          <PlasmicImg__
                            data-plasmic-name={"image"}
                            data-plasmic-override={overrides.image}
                            alt={""}
                            aria-describedby={"image"}
                            aria-hidden={"false"}
                            aria-label={"image"}
                            aria-labelledby={"image"}
                            className={classNames(sty.image)}
                            displayHeight={"auto"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"250px"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"100%"}
                            loading={"lazy"}
                            src={
                              "https://dev-suinova.s3.ap-southeast-1.amazonaws.com/3a13fadc1481b4bba469f346b5b4aead.png"
                            }
                          />
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__jQbLp
                          )}
                        >
                          {"Setup Your wallet"}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__cgU84
                          )}
                        >
                          {
                            "Set up your wallet of choice. Connect it to the market by clicking the wallet icon in the top right corner."
                          }
                        </div>
                      </div>
                    </section>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__qsnj2)}
                  >
                    <section
                      className={classNames(projectcss.all, sty.section__yx0QL)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__xpsEa
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__h99Zv
                          )}
                        >
                          <PlasmicImg__
                            data-plasmic-name={"image2"}
                            data-plasmic-override={overrides.image2}
                            alt={""}
                            aria-describedby={"image"}
                            aria-hidden={"false"}
                            aria-label={"image"}
                            aria-labelledby={"image"}
                            className={classNames(sty.image2)}
                            displayHeight={"auto"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"250px"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"100%"}
                            loading={"lazy"}
                            src={
                              "https://dev-suinova.s3.ap-southeast-1.amazonaws.com/cb13e2335ee39562dc24d1d4efc9d625.png"
                            }
                          />
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__b3Epr
                          )}
                        >
                          {"Setup Your wallet"}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__pAxIc
                          )}
                        >
                          {
                            "Set up your wallet of choice. Connect it to the market by clicking the wallet icon in the top right corner."
                          }
                        </div>
                      </div>
                    </section>
                  </div>
                  <section
                    className={classNames(projectcss.all, sty.section__ajbYr)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___2ZsP6
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__fcEL
                        )}
                      >
                        <PlasmicImg__
                          data-plasmic-name={"image3"}
                          data-plasmic-override={overrides.image3}
                          alt={""}
                          aria-describedby={"image"}
                          aria-hidden={"false"}
                          aria-label={"image"}
                          aria-labelledby={"image"}
                          className={classNames(sty.image3)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"250px"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"100%"}
                          loading={"lazy"}
                          src={
                            "https://dev-suinova.s3.ap-southeast-1.amazonaws.com/de664eeba8eae4d75fbba8c15a7d0a25.png"
                          }
                        />
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__tM3JY
                        )}
                      >
                        {"Setup Your wallet"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lOtQu
                        )}
                      >
                        {
                          "Set up your wallet of choice. Connect it to the market by clicking the wallet icon in the top right corner."
                        }
                      </div>
                    </div>
                  </section>
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox__hGlrC)}
                />
              </div>
            </div>
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "button",
    "svg",
    "img",
    "avatar",
    "image",
    "image2",
    "image3",
    "footer"
  ],
  header: ["header"],
  button: ["button", "svg"],
  svg: ["svg"],
  img: ["img"],
  avatar: ["avatar"],
  image: ["image"],
  image2: ["image2"],
  image3: ["image3"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  button: "button";
  svg: "svg";
  img: typeof PlasmicImg__;
  avatar: typeof AntdAvatar;
  image: typeof PlasmicImg__;
  image2: typeof PlasmicImg__;
  image3: typeof PlasmicImg__;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomePage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomePage__VariantsArgs;
    args?: PlasmicHomePage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomePage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomePage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomePage__ArgProps,
          internalVariantPropNames: PlasmicHomePage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomePage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomePage";
  } else {
    func.displayName = `PlasmicHomePage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomePage = Object.assign(
  // Top-level PlasmicHomePage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    img: makeNodeComponent("img"),
    avatar: makeNodeComponent("avatar"),
    image: makeNodeComponent("image"),
    image2: makeNodeComponent("image2"),
    image3: makeNodeComponent("image3"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomePage
    internalVariantProps: PlasmicHomePage__VariantProps,
    internalArgProps: PlasmicHomePage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomePage;
/* prettier-ignore-end */
