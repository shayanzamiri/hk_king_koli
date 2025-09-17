import { createSignal, onCleanup, onMount } from "solid-js";
import FigureCard from "@/components/FigureCard.jsx";
import { catalog } from "@/data/catalog.js";
import LazyNavbar from "@/components/wrapper/LazyNavbar.jsx";
import { routes } from "@/navigation/routes.jsx";
import { useLocation } from "@solidjs/router";

export default function CatalogPage() {
  const [visibleCount, setVisibleCount] = createSignal(2);
  let sentinel!: HTMLDivElement;
  const location = useLocation();

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => Math.min(prev + 2, catalog.length));
      }
    });

    observer.observe(sentinel);

    onCleanup(() => observer.disconnect());
  });

  return (
    <div>
      <LazyNavbar />
      <div class="catalog-page">
        <h1>
          {routes.find((r) => r.path === location.pathname)?.title ??
            "welcome to COCO"}
        </h1>
        {catalog.slice(0, visibleCount()).map((item) => (
          <FigureCard image={item.image} text={item.text} />
        ))}

        <div ref={sentinel} class="sentinel" />
      </div>
    </div>
  );
}
