import { Navigate, Route, HashRouter } from "@solidjs/router";
import { routes } from "@/navigation/routes.js";

export function App() {
  return (
    <HashRouter>
      {routes.map((route) => (
        <Route path={route.path} component={route.Component} />
      ))}

      <Route path="*" component={() => <Navigate href="/" />} />
    </HashRouter>
  );
}
