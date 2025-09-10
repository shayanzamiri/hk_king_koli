import { useLocation } from "@solidjs/router";

export default function Navbar() {
  const location = useLocation();
  const titles: Record<string, string> = {
    "/": "bah bah",
    "/catalog": "harchi",
  };

  return (
    <nav class="Navbar">
      <div class="navbar-container">
        <h1 class="navbar-container-title">{titles[location.pathname]}</h1>
      </div>

      <div id="menu-toggle">
        <input type="checkbox" id="navbar-check-input" />
        <span></span>
        <span></span>
        <span></span>
        <ul class="navbar-menu">
          <li class="navbar-menu-item">
            <a href="/catalog" class="navbar-menu-item-anchor">
              اولین بار
            </a>
          </li>
          <li class="navbar-menu-item">
            <a href="" class="navbar-menu-item-anchor">
              ساختمان
            </a>
          </li>
          <li class="navbar-menu-item">
            <a href="" class="navbar-menu-item-anchor">
              کارتل
            </a>
          </li>
          <li class="navbar-menu-item">
            <a href="" class="navbar-menu-item-anchor"></a>
          </li>
          <li class="navbar-menu-item">
            <a href="" class="navbar-menu-item-anchor"></a>
          </li>
          <li class="navbar-menu-item">
            <a href="" class="navbar-menu-item-anchor"></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
