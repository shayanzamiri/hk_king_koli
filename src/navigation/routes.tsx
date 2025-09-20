// import { InitDataPage } from "@/pages/InitDataPage/InitDataPage.js";
// import { LaunchParamsPage } from "@/pages/LaunchParamsPage.js";
// import { ThemeParamsPage } from "@/pages/ThemeParamsPage.js";
// import { TonConnectPage } from "@/pages/TonConnectPage/TonConnectPage.js";
import type { Component, JSX } from "solid-js";

import { IndexPage } from "@/pages/IndexPage/IndexPage.js";
import CatalogPage from "@/pages/CatalogPage.jsx";
import { catalogs } from "@/data/catalog.js";

interface Route {
  path: string;
  Component: Component | (() => JSX.Element);
  title?: string;
  Icon?: Component;
}

const keys = Object.keys(catalogs) as (keyof typeof catalogs)[];

const makeCatalogRoute = (key: keyof typeof catalogs, index: number) => {
  const catalog = catalogs[key];
  const prev = index > 0 ? `/${keys[index - 1]}` : null;
  const next = index < keys.length - 1 ? `/${keys[index + 1]}` : null;

  console.log("route:", key, "index:", index, "prev:", prev, "next:", next);

  return {
    path: `/${key}`,
    Component: () => (
      <CatalogPage
        data={catalog.data}
        title={catalog.title}
        prevPage={prev}
        nextPage={next}
      />
    ),
    title: catalog.title,
  };
};

export const routes: Route[] = [
  { path: "/", Component: IndexPage, title: "index page" },
  ...keys.map((key, index) => makeCatalogRoute(key, index)),
];

// { path: "/init-data", Component: InitDataPage, title: "Init Data" },
//   { path: "/theme-params", Component: ThemeParamsPage, title: "Theme Params" },
//   {
//     path: "/launch-params",
//     Component: LaunchParamsPage,
//     title: "Launch Params",
//   },
//   {
//     path: "/ton-connect",
//     Component: TonConnectPage,
//     title: "TON Connect",
//   },
