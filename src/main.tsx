import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";
import "./index.css";
import { Layout } from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <div>TODO: Comic page</div>
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <div>TODO: About page</div>
      </Layout>
    ),
  },
  {
    path: "/archive",
    element: (
      <Layout>
        <div>TODO: Archive page</div>
      </Layout>
    ),
  },
  {
    path: "/characters",
    element: (
      <Layout>
        <div>TODO: Characters page</div>
      </Layout>
    ),
  },
  {
    path: "/art",
    element: (
      <Layout>
        <div>TODO: Art page</div>
      </Layout>
    ),
  },
  {
    path: "/links",
    element: (
      <Layout>
        <div>TODO: Links page</div>
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <div>TODO: 404 page</div>
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
