// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2awYjQxaFuULphBNfdnqZC
// Component: 57eeSfzprtYU
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Doctorcard from "../../Doctorcard"; // plasmic-import: rhRLKA6pErpe/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 2awYjQxaFuULphBNfdnqZC/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: 57eeSfzprtYU/css

createPlasmicElementProxy;

export const PlasmicNewPage__VariantProps = new Array();

export const PlasmicNewPage__ArgProps = new Array();

const $$ = {};

function PlasmicNewPage__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "doctors",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => [
          { name: "sagar sonawane", role: "engineeer" },
          { name: "sagar2 sonawane", role: "engineeer" },
          { name: "sagar1 sonawane", role: "engineeer" }
        ]
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"test"}
          data-plasmic-override={overrides.test}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.test
          )}
        >
          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $state.doctors;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return [];
                }
                throw e;
              }
            })()
          ).map((__plasmic_item_0, __plasmic_idx_0) => {
            const currentItem = __plasmic_item_0;
            const currentIndex = __plasmic_idx_0;
            return (
              <Doctorcard
                data-plasmic-name={"doctorcard"}
                data-plasmic-override={overrides.doctorcard}
                className={classNames("__wab_instance", sty.doctorcard)}
                docName={(() => {
                  try {
                    return currentItem.name;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                doctorRole={(() => {
                  try {
                    return currentItem.role;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                key={currentIndex}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  test: ["test", "doctorcard"],
  doctorcard: ["doctorcard"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "test") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("test"),
  {
    // Helper components rendering sub-elements
    doctorcard: makeNodeComponent("doctorcard"),
    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */
