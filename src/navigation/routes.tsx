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

const makeCatalogRoute = (key: keyof typeof catalogs) => {
  const catalog = catalogs[key];
  return {
    path: `/${key}`,
    Component: () => <CatalogPage data={catalog.data} title={catalog.title} />,
    title: catalog.title,
  };
};

export const routes: Route[] = [
  { path: "/", Component: IndexPage, title: "index page" },
  ...Object.keys(catalogs).map((key) =>
    makeCatalogRoute(key as keyof typeof catalogs)
  ),
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
