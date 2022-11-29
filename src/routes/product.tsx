import { Outlet } from "solid-start";

export default function ProductLayout() {
  return (
    <div>
      <h1>Product Title</h1>
      <Outlet />
    </div>
  );
}
