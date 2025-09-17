import { For, Show, type Component } from "solid-js";
import { Dynamic } from "solid-js/web";

import { Link } from "@/components/Link/Link.js";
import { Page } from "@/components/Page/Page.js";
import { routes } from "@/navigation/routes.js";

import LazyNavbar from "@/components/wrapper/LazyNavbar.jsx";

export const IndexPage: Component = () => {
  return (
    <div class="index">
      <Page title="COCO KING" back={true}>
        <LazyNavbar />
        <p class="index-about">آموزش فارسی تمام مکانیزم های بازی همستر کینگ</p>
        <ul class="index-page__links">
          <For each={routes}>
            {(route) => (
              <Show when={route.title}>
                <li class="index-page__link-item">
                  <Link class="index-page__link" href={route.path}>
                    <Show when={route.Icon}>
                      {(Icon) => (
                        <i class="index-page__link-icon">
                          <Dynamic component={Icon()} />
                        </i>
                      )}
                    </Show>
                    {route.title}
                  </Link>
                </li>
              </Show>
            )}
          </For>
        </ul>
      </Page>
    </div>
  );
};
