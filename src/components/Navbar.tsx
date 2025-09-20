import { useLocation, A } from "@solidjs/router";
import { routes } from "@/navigation/routes.js";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav class="Navbar" role="navigation">
      <h1 class="navbar-title">
        {routes.find((r) => r.path === location.pathname)?.nav ??
          "WELCOME TO COCO KING"}
      </h1>
      <div id="menu-toggle">
        <input type="checkbox" id="navbar-check" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu" class="navbar-toggle-menu">
          {routes
            .filter((r) => r.title)
            .map((route) => (
              <li class="navbar-toggle-menu-item">
                <A href={route.path} class="navbar-toggle-menu-item-anchor">
                  <label
                    for="navbar-check"
                    class="navbar-toggle-menu-item-anchor-label"
                  >
                    {route.Icon && <route.Icon />}
                    {route.title}
                  </label>
                </A>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
