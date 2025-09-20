import { createSignal, onCleanup, onMount } from "solid-js";
import FigureCard from "@/components/FigureCard.jsx";
import LazyNavbar from "@/components/wrapper/LazyNavbar.jsx";
import { Link } from "@/components/Link/Link.jsx";

export default function CatalogPage(props: {
  title: string;
  data: { image: string; text: string }[];
  nextPage?: string | null;
  prevPage?: string | null;
}) {
  const [visibleCount, setVisibleCount] = createSignal(2);
  let sentinel!: HTMLDivElement;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => Math.min(prev + 2, props.data.length));
      }
    });

    observer.observe(sentinel);

    onCleanup(() => observer.disconnect());
  });

  return (
    <div>
      <LazyNavbar />
      <div class="catalog-page">
        <h1 class="catalog-page-title">{props.title}</h1>
        {props.data.slice(0, visibleCount()).map((item) => (
          <FigureCard image={item.image} text={item.text} />
        ))}

        <div ref={sentinel} class="sentinel" />
        <div class="catalog-page-nav">
          {props.prevPage && (
            <Link class="catalog-page-nav-button" href={props.prevPage}>
              صفحه قبلی
            </Link>
          )}
          {props.nextPage && (
            <Link class="catalog-page-nav-button" href={props.nextPage}>
              صفحه بعدی
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
