import { Outlet } from "solid-start";

export default function ProductLayout() {
  return (
    <div>
      <h1>Product Information</h1>
      <Outlet />
    </div>
  );
}
