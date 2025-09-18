// import { InitDataPage } from "@/pages/InitDataPage/InitDataPage.js";
// import { LaunchParamsPage } from "@/pages/LaunchParamsPage.js";
// import { ThemeParamsPage } from "@/pages/ThemeParamsPage.js";
// import { TonConnectPage } from "@/pages/TonConnectPage/TonConnectPage.js";
import type { Component } from "solid-js";

import { IndexPage } from "@/pages/IndexPage/IndexPage.js";
import CatalogPage from "@/pages/CatalogPage.jsx";
import { catalogs } from "@/data/catalog.js";

interface Route {
  path: string;
  Component: Component;
  title?: string;
  Icon?: Component;
}

export const routes: Route[] = [
  { path: "/", Component: IndexPage, title: "index page" },
  {
    path: "/first",
    Component: () => (
      <CatalogPage data={catalogs.first.data} title={catalogs.first.title} />
    ),
    title: "first things",
  },
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
