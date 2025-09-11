import { lazy, Suspense } from "solid-js";

const Navbar = lazy(() => import("@/components/Navbar.jsx"));

export default function LazyNavbar() {
  return (
    <Suspense fallback={null}>
      <Navbar />
    </Suspense>
  );
}
