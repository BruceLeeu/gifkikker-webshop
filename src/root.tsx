// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.scss";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Gifkikker Webshop</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <nav>
              {/* <A href="/">Index</A> */}
              <img src="../public/topicus-logo.png" />
              <A href="/browse">Products</A>
              <A href="/cart">Cart</A>
              <A href="/admin">Admin</A>
            </nav>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
