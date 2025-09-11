import { useLocation } from "@solidjs/router";

export default function Navbar() {
  const location = useLocation();
  const titles: Record<string, string> = {
    "/": "bah bah",
    "/catalog": "harchi",
  };

  return (
    <nav class="Navbar" role="navigation">
      <h1 class="navbar-title">
        {titles[location.pathname] ?? "Default Title"}
      </h1>
      <div id="menu-toggle">
        <input type="checkbox" id="navbar-check" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu" class="navbar-toggle-menu">
          <li class="navbar-toggle-menu-item">
            <a href="/" class="navbar-toggle-menu-item-anchor">
              <label for="navbar-check">Home</label>
            </a>
          </li>
          <li class="navbar-toggle-menu-item">
            <a href="/catalog" class="navbar-toggle-menu-item-anchor">
              <label for="navbar-check">About</label>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
