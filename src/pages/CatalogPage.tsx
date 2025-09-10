import { createSignal, onCleanup, onMount } from "solid-js";
import FigureCard from "@/components/FigureCard.jsx";
import { catalog } from "@/data/catalog.js";
import Navbar from "@/components/Navbar.jsx";

export default function CatalogPage() {
  const [visibleCount, setVisibleCount] = createSignal(2);
  let sentinel!: HTMLDivElement;

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
      <Navbar />
      <div class="catalog-page">
        {catalog.slice(0, visibleCount()).map((item) => (
          <FigureCard image={item.image} text={item.text} />
        ))}

        <div ref={sentinel} class="sentinel" />
      </div>
    </div>
  );
}
