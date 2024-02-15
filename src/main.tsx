import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>TODO: Comic page</div>,
  },
  {
    path: "/about",
    element: <div>TODO: About page</div>,
  },
  {
    path: "/archive",
    element: <div>TODO: Archive page</div>,
  },
  {
    path: "/characters",
    element: <div>TODO: Characters page</div>,
  },
  {
    path: "/art",
    element: <div>TODO: Art page</div>,
  },
  {
    path: "/links",
    element: <div>TODO: Links page</div>,
  },
  {
    path: "*",
    element: <div>TODO: 404 page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
