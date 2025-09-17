import type { Component } from "solid-js";

import { IndexPage } from "@/pages/IndexPage/IndexPage.js";
import { InitDataPage } from "@/pages/InitDataPage/InitDataPage.js";
import { LaunchParamsPage } from "@/pages/LaunchParamsPage.js";
import { ThemeParamsPage } from "@/pages/ThemeParamsPage.js";
import { TonConnectPage } from "@/pages/TonConnectPage/TonConnectPage.js";
import CatalogPage from "@/pages/CatalogPage.jsx";

interface Route {
  path: string;
  Component: Component;
  title?: string;
  Icon?: Component;
}

export const routes: Route[] = [
  { path: "/", Component: IndexPage, title: "index page" },
  { path: "/init-data", Component: InitDataPage, title: "Init Data" },
  { path: "/theme-params", Component: ThemeParamsPage, title: "Theme Params" },
  {
    path: "/launch-params",
    Component: LaunchParamsPage,
    title: "Launch Params",
  },
  {
    path: "/ton-connect",
    Component: TonConnectPage,
    title: "TON Connect",
  },
  { path: "/catalog", Component: CatalogPage, title: "Catalog Page" },
  { path: "/home", Component: CatalogPage, title: "home Page" },
  { path: "/kavosh", Component: CatalogPage, title: "kavosj Page" },
  { path: "/secans", Component: CatalogPage, title: "sekans ziadg Page" },
];
